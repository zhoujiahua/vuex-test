<template>
    <div id="product-list-zreo">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="(item,index) in products" :key="index" >
                姓名：<span>{{item.name}}</span>
                资产：<span>{{item.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ProductListZreo",
    props:["products"],
    data:function(){
        return{
            title:"Product List Zreo (组件传值)"
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
