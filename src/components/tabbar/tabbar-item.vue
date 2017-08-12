<template>
  <div>
    <div class="tabbar_icon">
      <slot name="icon"></slot>
    </div>
    <p>
      <slot name="label"></slot>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import './tabbar.css'
</style>
