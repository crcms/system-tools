<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="app-header">
        <vue-header></vue-header>
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
      <el-footer class="app-footer" style="height: 40px;">
        <vue-footer></vue-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import vueHeader from './components/Includes/Header';
  import vueFooter from './components/Includes/Footer';

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
  padding:0px;
}
.app-footer {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
}
</style>
