<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import vueHeader from './components/Includes/Header';
  export default {
    name: 'basic-tools',
    components:{
        vueHeader
    }
  }
</script>

<style>
  /* CSS */
</style>
