<template>
  <div class="wap-footer-wrap">
    <section class="wap-section wap-section-footlinks">
      <ul>
        <li class="link-item link-feedback"><a href="javascript:;">反馈</a></li>
        <li class="link-item link-cooperation"><a href="javascript:;">合作</a></li>
        <li class="link-item link-login">
          <nuxt-link
            to="/login"
            target="_blank">登录</nuxt-link>
        </li>
      </ul>
    </section>
    <section class="wap-section wap-section-copyright">
      <span>Copyright © <em class="year">2019</em> 163.com</span>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
  @import "../../assets/css/common/wyFooter/index.css";
</style>
