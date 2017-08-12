<template>
  <div class="user">
    <div class="user_head_box">
      <div class="user_picture">
        <img :src=displayList.avatar_url>
      </div>
      <div class="user_title">
        <h4>{{displayList.loginname}}</h4>
        <a href="">{{displayList.githubUsername}}</a>
      </div>
      <div class="user_info">
        <p>
          <span>注册时间:{{displayList.create_at}}</span>
          <span>积分：{{displayList.score}}</span>
        </p>
      </div>
    </div>
    <tab>
        <!--一般情况下，不能直接用@click给自定义的组件绑定事件，如果要绑定事件，一般有两种方式：一是使用.native修饰符，二是使用自定义绑定事件，在子组件那边执行$emit()，激活父组件的事件。-->
        <tab-item @click.native="tabcon(0)">最近回复</tab-item>
        <tab-item @click.native="tabcon(1)">最新发布</tab-item>
        <tab-item @click.native="tabcon(2)">话题收藏</tab-item>
    </tab>
    <div class="content_box">
        <div class="content_box_li" v-for="useer in display">
            <figure><img :src=useer.author.avatar_url></figure>
            <h4>{{useer.title}}<span>{{useer.author.loginname}}</span></h4>
            <span class="time">{{useer.last_reply_at | timeAgo}}</span>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
              displayList:[],
              currentTab:0,
              display:[]
          }
        },
        created(){
          this.$store.commit('IndexTotal',3);
          this.onUpdateData()
        },
        methods:{
          tabcon:function(tab){
              this.currentTab=tab;
              this.$store.commit('changeTabIndex',tab);
              var self=this;
              if(this.currentTab==2){
                this.$axios.get(`/topic_collect/${this.displayList.loginname}`)
                  .then(function (response) {
                    console.log(response.data.data);
                    self.display=response.data.data;
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }else{
                this.onUpdateData();
              }
          },
          onUpdateData:function(){
              //获取路由上传过来的参数
              //console.log(this.$route.query.id);
              if(this.$store.getters.loginInfo.accessToken){
                  if(this.$route.name=="me"){
                      this.onFetchUser(this.$store.getters.loginInfo.loginname)
                  }else {
                      if(this.$route.query.id){
                          this.onFetchUser(this.$route.query.id)
                      }
                  }
              }else {
                  this.$router.push('/login');
              }
          },
          onFetchUser:function(id){
            var self=this;
            //console.log(id);
            this.$axios.get(`/user/${id}`)
              .then(function (response) {
                console.log(response.data.data);
                console.log(self.currentTab);
                //console.log(self.displayList);
                self.displayList=response.data.data;
                if(self.currentTab==0){
                    self.display=self.displayList.recent_replies;
                }else {
                    self.display=self.displayList.recent_topics;
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
    }
</script>

<style>
@import './article.css'
</style>
