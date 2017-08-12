<template>
    <div class="form-group">
        <label v-show="label_show" v-text="label_text"></label>
        <div class="form-control">
            <select v-model="currentSel" v-on:change="updata">
                <option value="">请选择</option>
                <option v-for="option in select_data">{{option.value}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            currentSel:null
          }
        },
        props:{
          select_data:Array,
          label_show:Boolean,
          label_text:String
        },
        methods:{
          updata:function(){
            //console.log(this.currentSel);
            this.$emit('input',this.currentSel)
          }
        }
    }
</script>

<style>
  .form-group{display:flex;display:-webkit-flex;padding:12px 0;border-bottom:solid 1px #eee;}
  .form-group .form-control{flex:1;-webkit-flex:1;-webkit-box-flex:1;}
  .form-group label{margin:0 10px 0 0;}
  .form-group .form-control select{padding:5px 0;border:none;width:100%;}
  .form-group .form-control select:focus{outline:0;}
</style>
