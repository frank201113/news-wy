<template>
  <div>
    <recommend-article
      :recommend="recommend" />
  </div>
</template>

<script>
import API_LIST from '../interface/api-list.js'
import recommendArticle from '../components/recommend/recommendArticle.vue'
export default {
  components: {
    recommendArticle
  },
  data() {
    return {
      title: '手机网易网推荐页',
      recommend: []
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '手机网易网推荐页description'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '手机网易网推荐页keywords'
        }
      ]
    }
  },
  async asyncData(ctx) {
    let { data, status } = await ctx.$axios.get(API_LIST.GET_RECOMMEND)
    if (status === 200) {
      let { recommend } = data['response']
      return {
        recommend: recommend
      }
    }
  }
}
</script>

<style>
</style>
