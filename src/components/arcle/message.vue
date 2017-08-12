<template>
    <div class="message">
        <tab>
          <tab-item @click.native="switchTab(0)">未读消息</tab-item>
          <tab-item @click.native="switchTab(1)">已读消息</tab-item>
        </tab>
      <ul>
        <li v-for="mes in messages">
          <router-link :to="{name:'detail',query:{id:mes.topic.id}}">
            <div class="who">
              <figure><img :src="mes.author.avatar_url"></figure>
              <p class="who-name">{{mes.author.loginname}}<br><span>回复了您的话题</span></p>
              <span class="time">{{mes.topic.last_reply_at | timeAgo}}</span>
            </div>
            <div class="reply-con" v-html="mes.reply.content"></div>
            <div class="topic">{{mes.topic.title}}</div>
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
          messages:[],
          readMessage:[],
          notreadMessage:[]
        }
      },
      created(){
        this.$store.commit('IndexTotal',2);
        this.updateFreash();
      },
      methods:{
        updateFreash:function(){
          var self=this;
          if(this.$store.getters.loginInfo.accessToken){
            this.$axios.get(`/messages`,{
                params:{
                  accesstoken:this.$store.getters.loginInfo.accessToken
                }
              })
              .then(function(response){
                self.messages=response.data.data.hasnot_read_messages;
                self.notreadMessage=response.data.data.hasnot_read_messages;
                self.readMessage=response.data.data.has_read_messages;
              })
              .catch(function(error){
                  console.log(error)
              })
          }else {
            this.$router.push('./login')
          }
        },
        switchTab:function(i){
          this.$store.commit('changeTabIndex',i);
          if(i==1){
            console.log(this.readMessage);
            this.messages=this.readMessage
          } else {
            this.messages=this.notreadMessage
          }
        }
      }
    }
</script>

<style>
.message ul li{padding:20px;}
.message ul li .who{overflow:hidden;margin:0 0 10px 0}
.who figure{width:36px;float:left;}
.who p.who-name{float:left;margin: -5px 0 0 10px;}
.who p.who-name span{color:#888;}
.who .time{float:right;}
.message .topic{background:#eee;padding:10px;margin:10px 0 0 0;}
figure img{width:100%;}
</style>
