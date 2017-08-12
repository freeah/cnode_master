<template>
    <div class="arcle_list">
      <ul>
          <li v-for="arcle in ArcleList">
                  <router-link :to="{name:'detail',query:{id:arcle.id}}">
                      <!--需要对一些数据进行过滤 |  使用管道-->
                      <p><button class="arcle_zd">{{arcle.tab | translateTab(arcle.tab)}}</button>{{arcle.title}}</p>
                      <div class="arcle_title">
                          <!--路由传递参数query，标识点了哪个人的头像，点进去之后获取这个id,之后作为一个参数获取对应的数据-->
                          <router-link :to="{name:'user',query:{id:arcle.author.loginname}}"><figure><img :src=arcle.author.avatar_url></figure></router-link>
                          <div class="arcle_author">
                              <p>{{arcle.author.loginname}}</p>
                              <span>创建于：{{arcle.create_at | formalDate(arcle.create_at)}}</span>
                          </div>
                          <div class="edit_time">
                              <p><i>{{arcle.reply_count}}</i>/{{arcle.visit_count}}</p>
                              <p>{{arcle.last_reply_at | timeAgo}}</p>
                          </div>
                      </div>
                  </router-link>
              </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          ArcleList:[]
        }
      },
      //页面加载时触发，使用axio进行ajax
        mounted(){
          this.request();
        },
        methods:{
          request:function(){
            self=this;   //this的作用域问题
            this.$axios.get('/topics', {
                params: {
                  page:1,
                  limit:20
                }
              })
              .then(function (response) {
                console.log(response.data.data[0]);
                //console.log(self.ArcleList);
                self.ArcleList=response.data.data;
                console.log(self.ArcleList);
              })
              .catch(function (error) {
                console.log(error);
              });

          }
        }
      //可以这么直接filter，现在我们把filters拿出去，放在公共的filters文件夹下，注册成全局过滤属性
      /*filters:{
        translateTab:function(tab,isTop){
          console.log(tab+'.....'+isTop);
        }
      }*/
    }
</script>

<style>
@import 'article.css'
</style>
