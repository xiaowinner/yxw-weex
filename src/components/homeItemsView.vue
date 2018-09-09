<template lang="pug">
    div.background-container
        //div.waterfall-container
        waterfall(:column-count="2", show-scrollbar="false", v-for="(item, index) in items", key="index", column-width="auto", column-gap="0").waterfall-container
            div(v-for="(item, index) in items", key="index").detail-item
                text a
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
                    {name:"i", src:"http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg"}
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
        padding: 16px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .detail-item {
        width: 50px;
        height: 50px;
    }
</style>