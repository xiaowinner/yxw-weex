<template lang="pug">
    list.list-container
        wxc-cell(:title="title.name + index",
                :style="customCellStyle",
                v-for="(title, index) in titles",
                key="index").cell-container
            div(v-if="title.identifier === 'banner'").banner-container
                slider(interval="3000", auto-play="true").slider-container
                    div(v-for="banner in bannerList").banner-frame
                        image(:src="banner.image" resize="cover").image-frame
                div.items-container
                    items-view.items-background
            <!--div(v-if="title.identifier === 'collection'").horizontalView-container-->
                <!--horizontal-view.horizontalView-detail-->
</template>

<script>
    import { Utils, WxcCell, WxcGridSelect } from 'weex-ui';
    import ItemsView from '../homeItemsView';
    import HorizontalView from '../homeHorizontalView';

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
                    {image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                    {image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                    {image: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3816603155,2712346840&fm=173&app=25&f=JPEG?w=640&h=385&s=98B6029A0CB6E1C2460F59810300F0A8"},
                ],
                customCellStyle: {
                    width: "750px",
                    margin: "0",
                    minHeight: "100px",
                    background: "white",
                    paddingLeft: "0",
                    paddingRight: "0"
                }
            };
        },
        components: {
            WxcCell,
            ItemsView,
            HorizontalView
        },
        mounted: {

        }
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
        min-height: 100px;
        background: white;
        padding-left: 0;
        padding-right: 0;
    }

    /*
      顶部轮播和Items样式
     */
    .banner-container {
        width: 750px;
        margin: 0;
        height: 300px;
        background: white;
    }
    .slider-container {
        width: 750px;
        height: 260px;
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
    .items-container {
        width: 750px;
        margin-top: -130px;
        background: none;
    }
    .items-background {
        width: 700px;
        margin-left: 25px;
        margin-right: 25px;
        height: 280px;
        background: white;
    }

    /*
    顶部轮播和Items样式
    */
    .horizontalView-container {
        width: 750px;
        height: 200px;
    }
    .horizontalView-detail {
        width: 100%;
        height: 100%;
    }
</style>