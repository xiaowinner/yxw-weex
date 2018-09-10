<template lang="pug">
    div.background-container
        waterfall(:column-count="4", show-scrollbar="false", column-width="auto", column-gap="0").waterfall-container
            cell(v-for="(item, index) in items", key="index").detail-item
                div.item-content
                    image(:src="item.src").item-image
</template>

<script>
    export default {
        name: "homeItemsView",
        data () {
            return {
                items: [
                    {name:"a", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"b", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"c", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"d", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"e", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"f", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"g", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                    {name:"h", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"},
                ],
            };
        },
    }
</script>

<style scoped>
    .background-container {
        background: white;
    }
    .waterfall-container {
        width: 100%;
        height: 100%;
    }
    .detail-item {
        width: 100px;
        height: 100px;
    }
    .item-content {
        flex: 1;
    }
    .item-image {
        flex: 1;
    }
</style>