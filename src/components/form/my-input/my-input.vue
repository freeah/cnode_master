<template>
    <div class="form-group">
        <label v-show="label_show" v-text="label_text"></label>
        <div class="form-control">
            <input type="text" :placeholder='placeholder' v-model="currentInput" v-on:input="updata" :class="{focuss:isfocus}">
        </div>
        <div class="form-icon" v-show="icon_show" @click="icon_click">
            <i class="icon-remove"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            currentInput:''
            //icon_show:false
          }
        },
        props:{
          label_show:Boolean,
          label_text:String,
          placeholder:String,
          isfocus:Boolean
        },
      computed:{
        icon_show:function(){
          if(this.currentInput!=""){
              return true;
          }else {
              return false;
          }
        }
      },
      methods:{
        icon_click:function(){
          this.currentInput=""
        },
        updata:function(){
          this.$emit('input',this.currentInput);  //父组件绑上v-model   可以触发
        }
      }
    }
</script>

<style>
  .form-group{display:flex;display:-webkit-flex;padding:12px 0;border-bottom:solid 1px #eee;}
  .form-group .form-control{flex:1;-webkit-flex:1;-webkit-box-flex:1;}
  .form-group label{margin:0 10px 0 0;}
  .form-group .form-control input{padding:5px 0;border:none;width:100%;}
  .form-group .form-control input:focus{outline:0;}
  .form-group .form-control input.focuss{border:solid 1px red;}
</style>
