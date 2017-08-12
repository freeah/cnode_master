<template>
  <div class="form-group">
    <label v-show="label_show" v-text="label_text"></label>
    <div class="form-control">
      <textarea :placeholder='placeholder' v-model="currentarea" v-on:input="updata"></textarea>.
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          currentarea:''
        }
      },
      props:{
        label_show:Boolean,
        label_text:String,
        placeholder:String
      },
      methods:{
        updata:function(){
          this.$emit('input',this.currentarea);
        }
      }
    }
</script>

<style>
  .form-group{display:flex;display:-webkit-flex;padding:12px 0;border-bottom:solid 1px #eee;}
  .form-group:last-child{border-bottom:0;}
  .form-group .form-control{flex:1;-webkit-flex:1;-webkit-box-flex:1;}
  .form-group label{margin:0 10px 0 0;}
  .form-group .form-control textarea{padding:5px 0;border:none;width:100%;height:500px;resize:none;}
  .form-group .form-control textarea:focus{outline:0;}
</style>
