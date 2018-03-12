<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="app-header">
        <vue-header></vue-header>
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import vueHeader from './components/includes/header/header';
  import vueFooter from './components/includes/footer/footer';

  export default {
    name: 'basic-tools',
    components:{
        vueHeader,vueFooter
    }
  }
</script>

<style>
.app-header,.app-footer {
  background: #222233;
}
.app-main {
  padding:0px!important;
}
.app-footer {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  /*position: absolute;
  bottom: 0px;
  display: block;*/
}
</style>
