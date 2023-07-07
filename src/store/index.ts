import {createStore} from 'vuex'
import axios, {AxiosResponse} from 'axios'

export default createStore({
    state: {
        products: []
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        }
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: 'GET'
            })
                .then((products: AxiosResponse<any>) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products

                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    modules: {}
})
