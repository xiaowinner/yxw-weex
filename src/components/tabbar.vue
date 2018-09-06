<template lang="pug">
    wxc-tab-bar(:tab-titles="tabTitles",
    :tab-styles="tabStyles",
    :duration="durations",
    ref="wxc-tab-bar",
    title-type="icon",
    @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected")
        home-page.item-container
            text 首页
        div.item-container
            text 推荐
        div.item-container
            text 消息
        div.item-container
            text 我的
</template>


<script>
    import {WxcTabBar, Utils} from 'weex-ui';
    import {setTitle} from './_mods/set-nav';
    import Config from './_mods/config';
    import HomePage from './pages/homepage';

    var modal = weex.requireModule('modal');

    export default {
        components: { WxcTabBar, 'home-page': HomePage },
        data() {
            return {
                tabStyles: Config.tabStyles,
                tabTitles: Config.tabTitles,
                durations: Config.duration,
            };
        },
        created() {
            setTitle('TabBar');
            const tabbarHeight = Utils.env.getPageHeight();
            this.tabStyles.height = (tabbarHeight - this.tabStyles.height) + 'px';
        },
        methods: {
            wxcTabBarCurrentTabSelected(e) {
                const index = e.page;
                console.log(index);
            }
        }
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
