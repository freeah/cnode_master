<template>
    <button class="c_btn" :class="classes" v-text="btn_text"></button>
</template>

<script>
    export default {
        props:{
            btn_text:String,
            classes:Object
        }
    }
</script>

<style>
.c_btn{display:block;width:100%;background:none;outline:0;text-align:center;color:#fff;border:none;padding:7px 0;}
.c_btn_default{background:#ccc;}
.c_btn_primery{background:#04BE02;}
</style>
