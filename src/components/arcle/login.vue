<template>
    <div class="login-box">
        <div class="login-login">
            <img src="https://cnodejs.org/public/images/cnodejs.svg">
        </div>
        <p class="login-title">登录到Cnodejs.org</p>
        <my-input :label_show="label_show" :label_text="AccessToken" :placeholder="placeholder" v-model="accesstoken"></my-input>
        <flex-box>
            <flex-item>
                <router-link to="/">
                    <my-btn :btn_text="btn_text" :classes="classes1"></my-btn>
                </router-link>
            </flex-item>
            <flex-item>
                <my-btn :btn_text="btn_text1" :classes="classes2" @click.native="subForm"></my-btn>
            </flex-item>
        </flex-box>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                label_show:true,
                AccessToken:'AccessToken',
                accesstoken:'4c526bca-829c-4555-aa18-f6dfcb02ccef',
                placeholder:'4c526bca-829c-4555-aa18-f6dfcb02ccef',
                btn_text:'随便逛逛',
                btn_text1:'立即登录',
                classes1:{c_btn_default:true},
                classes2:{c_btn_primery:true}
            }
        },
        methods:{
            subForm:function(){
                var self=this;
                if(!this.accesstoken){
                    alert('请输入AccessToken');
                    return false;
                }else {
                    this.$axios.post('/accesstoken',{
                        accesstoken:this.accesstoken
                    })
                     .then(function(response){
                         console.log(response);
                         localStorage.setItem('accessToken',self.accesstoken);
                         self.$store.commit('reserveInfo',{
                             avatar_url: "https://avatars0.githubusercontent.com/u/30350076?v=4&s=120",
                             id: "597fd8a168aa87c774e5edf1",
                             loginname: "freeah",
                             accessToken: self.accesstoken
                             //将数据进行保存,使用vuex
                         });
                         //console.log(self.$store.getters.loginInfo.loginname);
                         self.$router.push('/'); //登陆成功之后进入首页
                    })
                    .catch(function(error){
                          console.log(error);
                    })
                }
            }
        }
    }
</script>

<style>
.login-box{padding:20px;}
p.login-title{text-align:center;margin:10px 0 20px 0;}
</style>
