<template>
  <div class="side-bar">
    <div
      :class="{ show: myIsMaskShow }"
      class="login_mask"
      @click="maskHidden"></div>
    <div
      id="login_panel"
      :class="{ show: myIsMaskShow }"      
      class="login_panel">
      <div
        v-if="isLogined"
        class="login_head">
        <div class="avatar">
          <img src="/img/face_big.gif" />
        </div>
        <div class="nickname">{{ userEmail }}</div>
      </div>
      <div class="login_list">
        <ul
          v-if="isLogined"
          class="logined">
          <li class="l_item">
            <a
              id="my_email"
              href="javascript:;">
              <span class="i_icon icon-mail iconfont"></span>
              <span class="i_title">我的邮箱</span>
              <span class="i_num unread">116</span>
            </a>
          </li>
          <li class="l_item">
            <a href="javascript:;">
              <span class="i_icon icon-comment iconfont"></span>
              <span class="i_title">我的跟贴</span>
            </a>
          </li>
          <li
            class="l_item item-cancel"
            @click="logout">
            <span class="i_icon icon-logout iconfont"></span>
            <span class="i_title">退出登陆</span>
          </li>
        </ul>
        <ul
          v-if="isNotLogined"
          class="not_logined">
          <li
            data-method="login"
            class="l_item">
            <div style="min-height: 250px;">
              <div
                id="login_module"
                class="login_module"
                style="width: 196px; height: 237px; left: 0px;">
                <div class="input-wrap">
                  <div
                    id="email-box"
                    :class="{ active: isEmailActive, 'error-color': hasEmailError }"
                    class="input-box">
                    <div class="u-logo">
                      <div class="u-logo-img1"></div>
                    </div>
                    <div class="u-input box">
                      <input
                        ref="inE"
                        v-model.trim="email"                        
                        data-placeholder="邮箱"
                        name="email"                                          
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
                    :class="{ active: isPasswordActive, 'error-color': hasPasswordError }"
                    class="input-box">
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
                    class="m-nerror f-dn"
                    data-from="email">
                    <div class="ferrortail"></div>
                    <div class="ferrorhead">{{ errorTxt }}</div>
                  </div>
                  <div class="loginbox">
                    <a                      
                      id="dologin"
                      href="javascript:void(0);"
                      class="u-loginbtn"
                      @click="handleLogin">登&nbsp;&nbsp;录</a>
                  </div>
                  <div class="m-unlogin">
                    <a
                      class="forgetpwd j-redirect"
                      href="javascript:;">忘记密码？</a>
                    <nuxt-link
                      id="changepage"
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
</template>

<script>
import API_LIST from '../../interface/api-list.js'
import * as Cookie from 'js-cookie'
export default {
  props: {
    isMaskShow: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      myIsMaskShow: this.isMaskShow,
      email: '',
      password: '',
      errorTxt: '请输入帐号',
      dnEmailObj: {
        display: 'none'
      },
      dnPasswordObj: {
        display: 'none'
      },
      isEmailActive: false,
      isPasswordActive: false,
      hasEmailError: false,
      hasPasswordError: false,
      isNotLogined: true,
      isLogined: false,
      userEmail: ''
    }
  },
  watch: {
    isMaskShow(val) {
      this.myIsMaskShow = val
    },
    myIsMaskShow(val) {
      this.$emit('onMyIsMaskShowChange', val)
    }
  },
  mounted() {
    // 获取localStorage console.log(localStorage.getItem('wyLogined'))
    // 以JSON的形式获取Cookie
    const userObj = Cookie.getJSON('wyLogined')
    if (userObj) {
      this.isNotLogined = false
      this.isLogined = true
      this.userEmail = userObj.email
    }
    const wyEmail = window.localStorage.getItem('wyEmail')
    this.email = wyEmail ? wyEmail : ''
    this.dnEmailObj.display = this.email ? 'block' : 'none'
  },
  methods: {
    maskHidden() {
      this.myIsMaskShow = false
    },
    async handleLogin() {
      const nerrorObj = document.getElementById('nerror')
      if (!this.email) {
        nerrorObj.classList.remove('f-dn')
        nerrorObj.classList.add('err_email')
        this.errorTxt = '请输入帐号'
        this.hasEmailError = true
        return
      }
      if (!this.password) {
        nerrorObj.classList.remove('f-dn')
        nerrorObj.classList.add('err_password')
        this.errorTxt = '请输入密码'
        this.hasPasswordError = true
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
        this.isLogined = true
        this.isNotLogined = false
      }
      if (code === 0) {
        this.errorTxt = '账号或密码错误'
        nerrorObj.classList.remove('f-dn')
      }
    },
    haveFocus(type) {
      const nerrorObj = document.getElementById('nerror')
      if (type === 'email') {
        this.isEmailActive = true
        this.hasEmailError = false
        nerrorObj.classList.remove('err_email')
        nerrorObj.classList.add('f-dn')
        return
      }
      this.isPasswordActive = true
      this.hasPasswordError = false
      nerrorObj.classList.remove('err_password')
      nerrorObj.classList.add('f-dn')
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
    },
    logout() {
      Cookie.remove('wyLogined')
      this.isNotLogined = true
      this.isLogined = false
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/icomoon/style.css";
@import "../../assets/css/common/wyLogin/index.css";
</style>
