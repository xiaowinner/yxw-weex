<template lang="pug">
    div.background-container
        list.content-container
            wxc-cell(v-for="data,index in listData" key="index").cell-container
                text ddd
</template>

<script>
    import { WxcCell } from 'weex-ui';
    export default {
        name: "homeHorizontalView",
        data() {
            return {
                listData:[
                    {title:"aaaa" },
                    {title:"aaaa"},
                    {title:"aaaa"},
                    {title:"aaaa"},
                    {title:"aaaa"},
                    {title:"aaaa"},
                ]
            }
        },
        comments: {
            WxcCell
        }
    }
</script>

<style scoped>
    .background-container {
        background: white;
    }
    .content-container {
        width: 100%;
        height: 100%;
    }
    .cell-container {
        width: 30%;
        height: 100%;
    }
</style>