<template>
  <div class="wap-nav-wrap wap-index-nav">
    <div class="login-bar">
      <div class="site-info"><h1>手机网易网</h1></div>
      <div class="user-entry">
        <span
          class="user-info"
          @click="showSide"></span>
      </div>
      <div class="app-entry">
        <div
          class="open-list"
          @click="toggleUl"
        ><span class="open-mail">邮箱</span></div>
        <transition name="fade">
          <div
            v-show="isAppListShow"
            class="app-list-wrap">
            <div
              class="global-wrap"
              @click="toggleUl"></div>
            <div class="app-list">
              <ul>
                <li class="app-item item-mail">
                  <a href="javascript:;"><span>网易邮箱</span></a>
                </li>
                <li class="app-item item-opencourse">
                  <a href="javascript:;"><span>网易公开课</span></a>
                </li>
                <li class="app-item item-manhua">
                  <a href="javascript:;"><span>网易漫画</span></a>
                </li>
                <li class="app-item item-read">
                  <a href="javascript:;"><span>网易云阅读</span></a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isAppListShow: false,
      toggleObj: {
        display: 'none'
      }
    }
  },
  methods: {
    toggleUl: function() {
      this.isAppListShow = !this.isAppListShow
    },
    showSide: function() {
      this.$emit('addBodyClass')
    }
  }
}
</script>

<style lang="css">
  @import "../../assets/css/common/wyHeader/index.css";
</style>
