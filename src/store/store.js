import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [{
        name: "马云",
        price: "100"
      },
      {
        name: "马化腾",
        price: "70"
      },
      {
        name: "马明哲",
        price: "50"
      },
      {
        name: "马可波罗",
        price: "10"
      }
    ]
  },
  getters: {
    saleProduct(state) {
      var statePro = state.products.map(d => {
        return {
          name: "**" + d.name + "**",
          price: d.price / 2
        }
      })
      return statePro;
    }
  }
})
