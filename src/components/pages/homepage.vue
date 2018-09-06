<template lang="pug">
    list.list-container
        wxc-cell(:title="title.name + index",
                v-for="(title, index) in titles",
                key="index").cell-container
            div(v-if="title.identifier === 'banner'").bannerCell-container
                slider(interval="3000", auto-play="true").slider-container
                    div(v-for="banner in bannerList").banner-frame
                        image(:src="banner.src" resize="cover").image-frame
</template>

<script>
    import { Utils, WxcCell } from 'weex-ui';

    export default {
        data () {
            return {
                titles: [
                    {name:'轮播&item', identifier:"banner"},
                    {name:'横向Collection', identifier:"collection"},
                    {name:'吸附分类header', identifier:"header"},
                    {name:'文章Cell', identifier:"detail"},
                ],
                bannerList: [
                    {src: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                    {src: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                    {src: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                ],
            };
        },
        components: {
            WxcCell,
        },
    };
</script>

<style>
    .list-container {
        height: 100%;
        width: 750px;
        margin: 0;
    }
    .cell-container {
        width: 750px;
        margin: 0;
        height: 100px;
        background: white;
    }
    .bannerCell-container {
        width: 750px;
        margin: 0;
        height: 300px;
        background: white;
    }
    .slider-container {
        width: 750px;
        height: 100%;
    }
    .banner-frame {
        width: 750px;
        height: 100%;
        background: black;
    }
    .image-frame {
        width: 750px;
        height: 100%;
    }
</style>