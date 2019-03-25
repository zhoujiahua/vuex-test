<template>
  <div id="app">
    <div class="main">
      <div class="content">
        <product-list-zreo :products="products" ></product-list-zreo>
        <product-list-one ></product-list-one>
        <product-list-two ></product-list-two>
        <product-list-three ></product-list-three>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListZreo from "./components/ProductListZreo"
import ProductListOne from "./components/ProductListOne"
import ProductListTwo from "./components/ProductListTwo"
import ProductListThree from "./components/ProductListThree"
export default {
  name: "app",
  data() {
    return {
      products: [
        { name: "马云", price: "100" },
        { name: "马化腾", price: "70" },
        { name: "马明哲", price: "50" },
        { name: "马可波罗", price: "10" }
      ]
    };
  },
  components:{
    "product-list-zreo":ProductListZreo,
    "product-list-one":ProductListOne,
    "product-list-two":ProductListTwo,
    "product-list-three":ProductListThree
  }
};
</script>

<style lang="scss">
  body{
    ol,ul{
      list-style: none;
    }
     .main{
        .content{
            width: 1200px;
            margin: 0 auto;
        }
     }
  }

</style>
