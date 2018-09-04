<template>
    <wxc-tab-bar :tab-titles = "tabTitles"
                 :tab-styles = "tabStyles"
                title-type = "icon"
                @wxcTabBarCurrentTabSelected = "wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><text>首页</text></div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>                
    </wxc-tab-bar>
</template>


<script>
    import { WxcTabBar, Utils } from 'weex-ui';
    // import Config from './config';

    var modal = weex.requireModule('modal');
    export default {
        computed: {

        },
        data () {
            return {
                // tabStyles: Config.tabStyles,
            }
        },
        // created () {
        //     const tabPageHeight = Utils.env.getPageHeight();
        //     const { tabStyles = this };
        //     this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
        // }
    }
</script>



<style>
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
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
        color:#666;
        text-align: center;
        font-size: 22px;
    }
</style>
