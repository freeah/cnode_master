import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ArcleList from '@/components/arcle/arcle-list'
import User from '@/components/arcle/user'
import ArcleDetail from '@/components/arcle/arcle-detail'
import ArcleCreat from '@/components/arcle/arcleCreat'
import Login from '@/components/arcle/login'
import Message from '@/components/arcle/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArcleList',
      component: ArcleList,
      meta:{requireAuth:true}
    },
    {
      path:'/user',
      name:'user',
      component:User,
      meta:{requireAuth:true}
    },
    {
      path:'/detail',
      name:'detail',
      component:ArcleDetail,
      meta:{requireAuth:true}
    },
    {
      path:'/creat',
      name:'creat',
      component:ArcleCreat,
      meta:{requireAuth:true}
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/me',
      name:'me',
      component:User
    },
    {
      path:'/message',
      component:Message
    }
  ]
})
