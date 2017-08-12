// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './components/plugins/axios'  //axios插件,在plugins/axios里面对这个进行配置
Vue.use(axios)

//import axios from 'axios'
//Vue.prototype.$ajax = axios
//在Vue中也可以这么使用ajax，加上上面注释的话，在组件中this.$ajax.get()
import * as filters from './filters/index'
import {Tabbar,TabbarItem} from './components/tabbar/index.js'
import {ArcleList} from './components/arcle/arcle.js'
import {Tab,TabItem} from './components/tab/index'
import {myInput} from './components/form/my-input/index'
import {MyTextarea} from './components/form/my-textarea/index'
import {MySelect} from './components/form/my-select/index'
import {FlexBox,FlexItem} from './components/flexbox/index'
import {MyBtn} from './components/form/my-btn/index'
//配置全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false



Vue.component('Tabbar',Tabbar)
Vue.component('TabbarItem',TabbarItem)
Vue.component('ArcleList',ArcleList)
Vue.component('Tab',Tab)
Vue.component('TabItem',TabItem)
Vue.component('MyInput',myInput)
Vue.component('MyTextarea',MyTextarea)
Vue.component('MySelect',MySelect)
Vue.component('FlexBox',FlexBox)
Vue.component('FlexItem',FlexItem)
Vue.component('MyBtn',MyBtn)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
