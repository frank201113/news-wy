<template>
  <div>
    <wy-login-header />
    <div class="main_content">
      <div
        id="login_panel"
        class="login_panel">
        <div class="login_list">
          <ul class="not_logined">
            <li
              class="l_item"
              data-method="login">
              <div
                id="login_module"
                class="login_module"
                style="width: 290px; height: 261px;">
                <div
                  id="cnt-box"
                  class="g-bd">
                  <div class="m-container">
                    <div
                      id="account-box"
                      :class="{ 'error-color': emailHasError, active: isEmailActive }"
                      class="inputbox">
                      <div class="u-logo">
                        <div class="u-logo-img1"></div>
                      </div>
                      <div class="u-input box">
                        <input
                          ref="inE"
                          v-model.trim="email"
                          data-placeholder="邮箱"
                          name="email"
                          class="j-inputtext dlemail"
                          type="text"
                          placeholder="邮箱"
                          @focus="haveFocus('email')"
                          @input="valueChange('email')"
                          @blur="haveBlur('email')" />
                      </div>
                      <div
                        :style="dnEmailObj"
                        class="u-tip"
                        @click="clearTxt('email')">
                        <div class="u-success u-clear"></div>
                      </div>
                    </div>
                    <div class="fur-change-email"></div>
                    <div
                      :class="{ 'error-color': passwordHasError, active: isPasswordActive }"
                      class="inputbox">
                      <div class="u-logo">
                        <div class="u-logo-img2"></div>
                      </div>
                      <div class="u-input box">
                        <input
                          ref="inP"
                          v-model.trim="password"
                          data-placeholder="密码"
                          name="password"
                          maxlength="50"
                          class="j-inputtext dlpwd"
                          type="password"
                          placeholder="密码"
                          @focus="haveFocus('password')"
                          @input="valueChange('password')"
                          @blur="haveBlur('password')" />
                      </div>
                      <div
                        :style="dnPasswordObj"
                        class="u-tip"
                        @click="clearTxt('password')">
                        <div class="u-success u-clear"></div>
                      </div>
                    </div>
                    <div
                      id="nerror"
                      :class="{
                        'f-dn': errorTxtStyle === 'normal',
                        'err_email': errorTxtStyle === 'errEmail',
                        'err_password': errorTxtStyle === 'errPassword'
                      }"
                      class="m-nerror">
                      <div class="ferrortail"></div>
                      <div class="ferrorhead">{{ errorTxt }}</div>
                    </div>
                    <div class="f-cb loginbox">
                      <a
                        id="dologin"
                        href="javascript:void(0)"                        
                        class="u-loginbtn btncolor tabfocus btndisabled"
                        @click="handleLogin">登&nbsp;&nbsp;录</a>
                    </div>
                    <div class="m-unlogin">
                      <a
                        class="forgetpwd j-redirect"
                        href="javascript:void(0)">忘记密码？</a>
                      <nuxt-link
                        to="/register"
                        class="u-regbtn bgcolor tabfocus j-redirect"
                        target="_blank">去注册</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API_LIST from '../interface/api-list.js'
import * as Cookie from 'js-cookie'
import wyLoginHeader from '../components/common/wyLoginHeader.vue'
export default {
  layout: 'loginRegister',
  components: {
    wyLoginHeader
  },
  data: () => {
    return {
      email: '',
      password: '',
      errorTxt: '请输入帐号',
      emailHasError: false,
      passwordHasError: false,
      isEmailActive: false,
      isPasswordActive: false,
      dnEmailObj: {
        display: 'none'
      },
      dnPasswordObj: {
        display: 'none'
      },
      errorTxtStyle: 'normal',
      emailPattern: /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
    }
  },
  computed: {},
  created() {},
  mounted() {
    const userObj = Cookie.getJSON('wyLogined')
    if (userObj) {
      location.href = '/'
    }
    const wyEmail = window.localStorage.getItem('wyEmail')
    this.email = wyEmail ? wyEmail : ''
    this.dnEmailObj.display = this.email ? 'block' : 'none'
  },
  methods: {
    async handleLogin() {
      if (!this.email) {
        this.emailHasError = true
        this.errorTxtStyle = 'errEmail'
        this.errorTxt = '请输入帐号'
        return
      }
      let email = this.email
      if (!this.emailPattern.test(email)) {
        this.emailHasError = true
        this.errorTxtStyle = 'errEmail'
        this.errorTxt = '帐号格式错误'
        return
      }
      if (!this.password) {
        this.passwordHasError = true
        this.errorTxtStyle = 'errPassword'
        this.errorTxt = '请输入密码'
        return
      }
      let userObj = {
        email: this.email,
        password: this.password
      }
      let res = await this.$axios.post(API_LIST.POST_LOGIN, userObj)
      let { code, data } = res.data
      if (code === 1) {
        this.$store.commit('save', {
          userId: data.userId,
          email: data.email
        })
        window.localStorage.setItem('wyEmail', data.email)
        // 登录成功后跳转至首页
        location.href = '/'
      }
      if (code === 0) {
        this.errorTxt = '账号或密码错误'
        this.errorTxtStyle = ''
      }
    },
    haveFocus(type) {
      if (type === 'email' && this.errorTxt === '请输入帐号') {
        this.errorTxtStyle = 'normal'
      }
      if (type === 'password' && this.errorTxt === '请输入密码') {
        this.isPasswordActive = true
        this.passwordHasError = false
        this.errorTxtStyle = 'normal'
      }
      if (type === 'email' && this.errorTxt === '帐号格式错误') {
        this.errorTxtStyle = 'normal'
      }
      if (!this.errorTxtStyle) {
        this.errorTxtStyle = 'normal'
      }
      // 当邮箱输入框是focus状态时，给其加上active样式
      if (type === 'email') {
        this.isEmailActive = true
        this.emailHasError = false
        return
      }
      this.isPasswordActive = true
      this.passwordHasError = false
    },
    valueChange(type) {
      if (type === 'email') {
        this.dnEmailObj.display = this.email ? 'block' : 'none'
        return
      }
      this.dnPasswordObj.display = this.password ? 'block' : 'none'
    },
    clearTxt(type) {
      if (type === 'email') {
        this.email = ''
        this.dnEmailObj.display = 'none'
        this.$refs.inE.focus()
        return
      }
      this.password = ''
      this.dnPasswordObj.display = 'none'
      this.$refs.inP.focus()
    },
    haveBlur(type) {
      if (type === 'email') {
        this.isEmailActive = false
        return
      }
      this.isPasswordActive = false
    }
  }
}
</script>

<style lang="css">
  @import "../assets/css/login/index.css";
</style>
