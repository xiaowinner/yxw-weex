<template>
  <div class = "app-wrapper">
      <router-view class="r-box"></router-view>
      <tab-bar></tab-bar>
  </div>
</template>

<script>
    var modal = weex.requireModule('modal');
    import tabBar from './components/tabbar.vue';
    export default {
      data () {
        return {

        }
      },
      components: {
        'tab-bar': tabBar
      },
    }
</script>


<style>
    .app-wrapper{
        background-color: #f4f4f4;
    }
    .r-box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
