<template>
  <div
    :class="{ 'auto-fixed': isFixed, 'tab-dark': isFixed }"
    class="wap-tabbar-wrap">
    <div class="tab-bar">
      <ul class="tab-active-0">
        <li
          :class="{ 'tab-active': isActive == 1 }"
          class="tab-item"
          @click="changeActive(1)">
          <span>
            <nuxt-link
              to="/"
              exact
            >
              要闻
            </nuxt-link>
          </span>
        </li>
        <li
          :class="{ 'tab-active': isActive == 2 }"
          class="tab-item"
          @click="changeActive(2)">
          <span><nuxt-link to="/recommend">推荐</nuxt-link></span>
        </li>
        <li
          :class="{ 'tab-active': isActive == 3 }"
          class="tab-item"
          @click="changeActive(3)">
          <span><nuxt-link to="/exclusive">原创</nuxt-link></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: 1,
      isFixed: false
    }
  },
  computed: {},
  created() {
    this.getRouter()
  },
  mounted() {
    this.tabScroll()
  },
  methods: {
    changeActive: function(idx) {
      this.isActive = idx
    },
    tabScroll: function() {
      const tabBarWrap = document.querySelector('.wap-tabbar-wrap')
      if (!tabBarWrap) {
        return
      }
      const tabBarWrapRect = tabBarWrap.getBoundingClientRect()
      const $this = this // 重要 window里面的函数this指向window对象不是Vue实例
      window.onscroll = function() {
        $this.isFixed = document.documentElement.scrollTop > tabBarWrapRect.y
      }
    },
    // 页面刷新后 重新获取当前路由 保持正确的active状态
    getRouter() {
      let routePath = this.$route.path
      if (routePath === '/') {
        this.isActive = 1
      } else if (routePath === '/recommend') {
        this.isActive = 2
      } else {
        this.isActive = 3
      }
    }
  }
}
</script>

<style lang="css">
  @import "../../assets/css/common/wyNav/index.css";
</style>
