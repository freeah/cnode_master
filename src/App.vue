<template>
  <div id="app">
  <!--每个组件都有一个index.js，导出组件，在main.js中引入，处理,在组件中添加样式，slot分发消息-->
    <!--<arcle-list></arcle-list>-->
    <tabbar>
        <router-link to="/" exact>
            <tabbar-item>
                <i slot="icon" class="icon-bookmark"></i>
                <span slot="label">首页</span>
            </tabbar-item>
        </router-link>
        <router-link to="/creat">
            <tabbar-item>
                <i slot="icon" class="icon-bookmark"></i>
                <span slot="label">发布</span>
            </tabbar-item>
        </router-link>
        <router-link to="/message">
            <tabbar-item>
                <i slot="icon" class="icon-bookmark"></i>
                <span slot="label">消息</span>
            </tabbar-item>
        </router-link>
        <router-link :to="{name:'me'}">
            <tabbar-item>
                <i slot="icon" class="icon-bookmark"></i>
                <span slot="label">我的</span>
            </tabbar-item>
        </router-link>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.router-link-active i,.router-link-active p{color:#09BB07!important;}
</style>
