<template>
    <div class="flex-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.flex-item{-webkit-flex:1;-webkit-box-flex:1;margin:0 10px 0 0;}
.flex-item:nth-child(2){margin:0;}
</style>
