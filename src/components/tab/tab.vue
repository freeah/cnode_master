<template>
    <div class="tab">
        <slot></slot>
        <div class="tab_line" :style="styleObject"></div>
    </div>
</template>

<script>
    export default {
        computed:{
            styleObject:function(){
                return {
                    width:this.avialWidth,
                    left:this.leftline
                }
            },
            leftline:function(){
                //console.log(this.$store.getters.TabIndex*(100/3));
                return this.$store.getters.TabIndex*(100/this.$store.getters.IndexTotal)+'%';
            },
            avialWidth:function(){
              return 100/this.$store.getters.IndexTotal+'%'
          }
        }
    }
</script>

<style>
    .tab{overflow:hidden;position:relative;}
    .tab .tab_line{height:1px;background:#04BE02;clear:both;position:absolute;bottom:0;}
</style>
