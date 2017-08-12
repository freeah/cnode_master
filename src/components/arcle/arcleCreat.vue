<template>
    <div class="topic_creat">
        <div class="creat_head">
            <h4>新话题</h4>
            <button @click="submitForm">发布</button>
        </div>
        <div class="topic_form">
          <my-select :label_show="sel_label_show" :label_text="sel_label_text" :select_data="select_data" v-model="selrank"></my-select>
            <my-input :label_show="label_show" :label_text="label_text" :placeholder="placeholder" v-model="title" :isfocus="isfocus"></my-input>
            <my-textarea :label_show="label_show" :label_text="label_text" :placeholder="placeholder_area" v-model="detail"></my-textarea>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            label_show:false,
            label_text:'标题',
            placeholder:'标题，至少十个字符',
            placeholder_area:'说点什么吧',
            sel_label_show:true,
            sel_label_text:'分类',
            select_data:[
              {key:0,value:'分享'},
              {key:1,value:'问答'},
              {key:2,value:'招聘'},
              {key:'dev',value:'dev'}
            ],
            title:'',
            selrank:'',
            detail:'',
            isfocus:false
          }
        },
        methods:{
          submitForm:function() {
              //console.log(this.title);
              //console.log(this.selrank);
              //console.log(this.detail);
              if (this.$store.getters.loginInfo.accessToken) {
                  if (this.title == "") {
                      alert('请填写标题');
                      this.isfocus = true;
                      return false;
                  }
                  if (this.detail == ""){
                      alert('请填写内容');
                      return false;
                  }
                  //console.log(localStorage.getItem('accessToken'));
                  var self=this;
                  this.$axios.post(`/topics`,{
                      accesstoken:this.$store.getters.loginInfo.accessToken,
                      title:self.title,
                      tab:self.selrank,
                      content:self.detail
                  })
                  .then(function(response){
                      console.log(response);
                      self.$router.push({
                            name:'detail',
                            query:{
                                id:response.data.topic_id
                            }
                        })
                   })
                   .catch(function(error){

                   })
              }else {
                  this.$router.push('/login');
              }
          }
        }
    }
</script>

<style>
  .creat_head{overflow:hidden;background:#f4f4f4;padding:7px 20px;}
  .creat_head h4{float:left;color:#888;}
  .creat_head button{padding:2px 3px;background:#04BE02;color:#fff;float:right;border:solid 1px #04BE02;}
  .topic_form{padding:0 20px;}
  .form-group{border-bottom:solid 1px #eeeeee;}
</style>
