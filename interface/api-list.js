const HOST = 'http://127.0.0.1:9000'
const API_LIST = {
  /**
   * 获取分类菜单
   */
  GET_TAB: HOST + '/api/tab',
  /**
   * 获取底部分类
   */
  GET_COLUMN: HOST + '/api/column',
  /**
   * 获取要闻列表
   */
  GET_NEWS: HOST + '/api/news',
  /**
   * 获取推荐列表
   */
  GET_RECOMMEND: HOST + '/api/recommend',
  /**
   * 获取原创列表
   */
  GET_EXCLUSIVE: HOST + '/api/exclusive',
  /**
   * 登录
   */
  POST_LOGIN: HOST + '/api/login',
  /**
   * 注册
   */
  POST_REGISTER: HOST + '/api/register'
}
export default API_LIST
