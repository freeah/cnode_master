<template>
    <div class="tab_item" :style="{width:avialWidth}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        /*data(){
          return {
            avialWidth:'33%'
          }
        }*/
      computed:{
        avialWidth:function(){
          return 100/this.$store.getters.IndexTotal+'%'
        }
      }
    }
</script>

<style>
    .tab_item{float:left;color:#666;text-align:center;line-height:44px;border-bottom:solid 1px #e5e5e5;}
</style>
