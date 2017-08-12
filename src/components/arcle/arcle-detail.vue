<template>
    <div class="arcle_detail">
        <div class="author">
            <h3>{{arcleDetail.title}}</h3>
            <div class="author_info">
                <figure><img :src=arcleDetail.author.avatar_url></figure>
                <div class="info_left">
                    <p><button>{{arcleDetail.tab | translateTab(arcleDetail.tab)}}</button>{{arcleDetail.author.loginname}}</p>
                    <p>{{arcleDetail.create_at | timeAgo}}创建，{{arcleDetail.visit_count}}次预览</p>
                </div>
              <div class="info_right">
                <i class="icon-heart-empty"></i>
              </div>
            </div>
        </div>
        <div class="arcle_detail_con" v-html="arcleDetail.content"></div>
        <div class="comment">
            <p class="reply_count">{{arcleDetail.reply_count}}条回复</p>
            <ul class="comment_ul">
                <li v-for="(reply,i) in replays">
                    <div class="ul_head">
                        <router-link :to="{name:'user',query:{id:reply.author.loginname}}"><figure><img :src="reply.author.avatar_url"></figure></router-link>
                        <div class="head_left">
                            <p>{{reply.author.loginname}}</p>
                            <p><i>{{i+1}}楼</i>{{reply.create_at | timeAgo}}</p>
                        </div>
                        <div class="head_right">
                            <i class="icon-thumbs-up" @click="thumbUp(reply.id,i)" :class="{active:reply.ups.indexOf(loginId)!=-1}"></i>{{reply.ups.length}}<i class="icon-reply"></i>
                        </div>
                    </div>
                    <div class="ul_content" v-html="reply.content"></div>
                </li>
            </ul>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              arcleDetail:[],
              page:1,
              pageSize:10,
              replays:[],
              comment:[]
            }
        },
        computed:{
            loginId:function(){
                return this.$store.getters.loginInfo.id
            }
        },
        mounted(){
          this.freashDetail();
          window.addEventListener('scroll',this.handleScroll);//监听鼠标滚动事件
        },
        methods:{
          freashDetail:function(){
            var id=this.$route.query.id;
            var self=this;
            this.$axios.get('https://cnodejs.org/api/v1/topic/' + id)
              .then(function (response) {
                self.arcleDetail=response.data.data;
                self.comment=response.data.data.replies;//全部的评论数据
                self.replays=response.data.data.replies.slice(0,self.pageSize);//最初显示的评论数据10条
                console.log(self.replays);
              })
              .catch(function (error) {
                console.log(error);
              });
          },
          handleScroll:function(){
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop; //滚轮滚过去的高度
            var scrollHeight=document.body.scrollHeight;  //文档的总高度
            var availHeight=window.screen.availHeight; //屏幕的高度
            if(scrollTop+availHeight==scrollHeight){
                this.onLoadMore();
            }
          },
          onLoadMore:function(){
              var freash=this.comment.slice(this.page*this.pageSize,(this.page+1)*this.pageSize);
              //获取出评论的10条到20条,在滚动的时候就获取20条至30条，以此类推
              if(freash.length!=0){
                this.replays=this.replays.concat(freash);  //与前十条拼接拼接成一个新的数组
                this.page++;
              }
          },
          thumbUp:function(id,i){
                console.log(id+'...'+i);
                console.log(localStorage.getItem('accessToken'));
                if(this.$store.getters.loginInfo.accessToken){
                      var self=this;
                      this.$axios.post(`/reply/${id}/ups`,{
                              accesstoken:localStorage.getItem('accessToken')
                          })
                          .then(function(response){
                              console.log(response);
                              if(response.data.action=='up'){
                                  self.comment[i].ups.push(self.$store.getters.loginInfo.id);
                                  alert('点赞成功');
                              }else {
                                  var removeIndex=self.comment[i].ups.indexOf(self.$store.getters.loginInfo.id);
                                  self.comment[i].ups.splice(removeIndex,1);
                                  alert('取消点赞成功');
                              }
                          })
                          .catch(function(error){
                              console.log(error);
                          })
                 }else {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>

<style>
@import 'article.css'
</style>
