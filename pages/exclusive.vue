<template>
  <div>
    <exclusive-article
      :headline="headline"
      :qsyk="qsyk"
      :fd="fd"
      :rj="rj"
      :lc="lc"/>
    <wy-footer />
  </div>
</template>

<script>
import API_LIST from '../interface/api-list.js'
import exclusiveArticle from '../components/exclusive/exclusiveArticle.vue'
import wyFooter from '../components/common/wyFooter.vue'
export default {
  components: {
    exclusiveArticle,
    wyFooter
  },
  data() {
    return {
      title: '手机网易网原创页',
      headline: [],
      qsyk: [],
      fd: [],
      rj: [],
      lc: []
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '手机网易网原创页description'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '头条，轻松一刻，沸点，人间，浪潮'
        }
      ]
    }
  },
  async asyncData(ctx) {
    let { data, status } = await ctx.$axios.get(API_LIST.GET_EXCLUSIVE)
    if (status === 200) {
      let { headline, qsyk, fd, rj, lc } = data['response']
      return {
        headline: headline,
        qsyk: qsyk,
        fd: fd,
        rj: rj,
        lc: lc
      }
    }
  }
}
</script>

<style>
</style>
