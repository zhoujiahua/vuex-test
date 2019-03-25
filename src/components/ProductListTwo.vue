<template>
    <div class="product-list-one">
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
        name:"ProductListOne",
        data(){
            return{
                title:"Product List Two (菜鸟写法)"
            }
        },
        computed:{
            saleProducts(){
                var statePro = this.$store.state.products.map(d => {
                    return {
                        name:"**"+d.name+"**",
                        price:d.price / 2
                    }
                })

                return statePro
            }
        }
    }
</script>

<style lang="sass" scoped >

</style>
