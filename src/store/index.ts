import { createStore, Commit } from 'vuex'
import axios, { AxiosResponse } from 'axios'

interface Product {
  image: string
  name: string
  price: number
  article: number
  available: boolean
  quantity: number
}

interface State {
  products: Product[]
  cart: Product[]
}

const savedState = localStorage.getItem('storeState')
const initialState: State = savedState
  ? JSON.parse(savedState)
  : {
      products: [],
      cart: [],
    }

export default createStore<State>({
  state: initialState,
  getters: {
    PRODUCTS: (state) => {
      return state.products
    },
    CART: (state) => {
      return state.cart
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products: Product[]) => {
      state.products = products
    },
    SET_CART: (state, product: Product) => {
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map((item) => {
          if (item.article === product.article) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      if (state.cart[index].quantity) {
        state.cart[index].quantity++
      } else {
        state.cart[index].quantity = 1
      }
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity && state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      } else {
        state.cart[index].quantity = 1
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({
      commit,
    }: {
      commit: Commit
    }): Promise<AxiosResponse<Product[]>> {
      return axios
        .get('http://localhost:5000/products')
        .then((response: AxiosResponse<Product[]>) => {
          commit('SET_PRODUCTS_TO_STATE', response.data)
          return response
        })
        .catch((error) => {
          console.log(error)
          throw error
        })
    },
    ADD_TO_CART({ commit }: { commit: Commit }, product: Product) {
      commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({ commit }: { commit: Commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }: { commit: Commit }, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({ commit }: { commit: Commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  modules: {},
  plugins: [
    (store) => {
      store.subscribe((mutation, state) => {
        localStorage.setItem('storeState', JSON.stringify(state))
      })
    },
  ],
})
