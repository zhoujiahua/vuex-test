<template>
    <div class="product-list-three">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="(item,index) in saleProducts" :key="index" >
                姓名：<span>{{item.name}}</span>
                资产：<span>{{item.price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"ProductListThree",
        data(){
            return{
                title:"Product List Three (高级写法)"
            }
        },
        computed:{
            saleProducts(){
                return this.$store.getters.saleProduct;
            }
        }
    }
</script>

<style lang="sass" scoped >

</style>
