<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                title-type="icon"
                @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container"><text>首页</text></div>
    <div class="item-container"><text>特别推荐</text></div>
    <div class="item-container"><text>消息中心</text></div>
    <div class="item-container"><text>我的主页</text></div>              
    </wxc-tab-bar>
</template>


<script>
import { WxcTabBar, Utils } from 'weex-ui';
import { setTitle } from '../_mods/set-nav';
import Config from '../tab-bar/config';

var modal = weex.requireModule('modal');

export default {
  components: { WxcTabBar },
  data() {
    return {
      tabStyles: Config.tabStyles,
      tabTitles: Config.tabTitles
    };
  },
  created () {
      setTitle('TabBar');
  },
};
</script>



<style>
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}
.bar-item {
  flex: 1;
}
.bar-text {
  color: #666;
  text-align: center;
  font-size: 22px;
}
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  align-items: center;
  justify-content: center;
}
</style>
