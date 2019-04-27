<template>
  <section
    id="container"
    class="wap-wrap">    
    <wy-header @addBodyClass="addBodyClass" />
    <wy-login
      :is-mask-show="isShowSide"
      @onMyIsMaskShowChange="onMyIsMaskShowChange" />
    <div class="wap-content-wrap">
      <wy-nav />
      <nuxt/>
    </div>
  </section>
</template>

<script>
import wyHeader from '~/components/common/wyHeader.vue'
import wyNav from '~/components/common/wyNav.vue'
import wyLogin from '~/components/common/wyLogin.vue'
export default {
  components: {
    wyHeader,
    wyNav,
    wyLogin
  },
  data() {
    return {
      isShowSide: false
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].style.height = 'auto'
  },
  methods: {
    addBodyClass() {
      this.isShowSide = !this.isShowSide
      if (this.isShowSide) {
        document.getElementsByTagName('body')[0].classList.add('module-show')
        document.getElementsByTagName('body')[0].style.height = '568px'
        return
      }
      document.getElementsByTagName('body')[0].classList.remove('module-show')
      document.getElementsByTagName('body')[0].style.height = 'auto'
    },
    onMyIsMaskShowChange(val) {
      this.isShowSide = val
      if (!this.isShowSide) {
        document.getElementsByTagName('body')[0].classList.remove('module-show')
        document.getElementsByTagName('body')[0].style.height = 'auto'
      }
    }
  }
}
</script>

<style>
.module-show {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wap-wrap {
  font-size: 0.32rem;
  width: 100%;
}

.wap-content-wrap {
  position: relative;
}
</style>
