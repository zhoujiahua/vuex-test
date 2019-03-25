<template>
    <div class="product-list-two">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="(item,index) in products " :key="index" >
                姓名：<span>{{item.name}}</span>
                资产：<span>{{item.price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"ProductListOne",
        data(){
            return{
                title:"Product List One (vuex)"
            }
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        }
    }
</script>

<style lang="sass" scoped >

</style>
