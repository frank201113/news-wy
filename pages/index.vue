<template>
  <div>
    <!-- <span @click="test">测试</span> -->
    <classification :category="category" />
    <index-article
      :column="column"
      :car="car"
      :entertainment="entertainment"
      :finance="finance"
      :local="local"
      :military="military"
      :netease="netease"
      :sports="sports"
      :tech="tech"
      :today-news="todayNews" />
    <wy-footer />
  </div>
</template>

<script>
import API_LIST from '../interface/api-list.js'
import classification from '../components/index/classification.vue'
import indexArticle from '../components/index/indexArticle.vue'
import wyFooter from '../components/common/wyFooter.vue'
export default {
  components: {
    classification,
    indexArticle,
    wyFooter
  },
  data() {
    return {
      title: '手机网易网首页',
      category: [],
      column: [],
      car: [], // 汽车
      entertainment: [], // 娱乐
      finance: [], // 财经
      local: [], // 本地
      military: [], // 军事
      netease: [], // 网易号
      sports: [], // 体育
      tech: [], // 科技
      todayNews: [] // 今日要闻
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '手机网易网首页description'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '汽车，娱乐，财经，本地，军事，网易号，体育，科技，今日要闻'
        },
        {
          'http-equiv': 'pragma',
          content: 'no-cache'
        }
      ]
    }
  },
  mounted() {},
  async asyncData(ctx) {
    let [tabArr, columnArr] = await Promise.all([
      ctx.$axios.get(API_LIST.GET_TAB),
      ctx.$axios.get(API_LIST.GET_COLUMN)
    ])
    let { data, status } = await ctx.$axios.get(API_LIST.GET_NEWS)
    if (
      tabArr.data['code'] === 200 &&
      columnArr.data['code'] === 200 &&
      status === 200
    ) {
      let tabList = tabArr.data['response'].tabList
      let columnList = columnArr.data['response'].columnList
      let {
        car,
        entertainment,
        finance,
        local,
        military,
        netease,
        sports,
        tech,
        todayNews
      } = data['response']
      return {
        category: tabList.map(item => {
          return {
            linkAddress: item.linkAddress,
            name: item.name
          }
        }),
        column: columnList.map(item => {
          return {
            linkAddress: item.linkAddress,
            name: item.name
          }
        }),
        car: car,
        entertainment: entertainment,
        finance: finance,
        local: local,
        military: military,
        netease: netease,
        sports: sports,
        tech: tech,
        todayNews: todayNews
      }
    }
  },
  methods: {
    test() {
      // 通过此种方式获取状态中的数据
      console.log(this.$store.state.email)
      console.log(this.$store.state.userId)
    }
  }
}
</script>

<style>
</style>
