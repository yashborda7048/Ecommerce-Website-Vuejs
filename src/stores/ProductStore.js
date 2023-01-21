import { defineStore } from 'pinia'
import data from '../json/data.json'

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            data: data,
            featured: data.filter((product) => product.category == 'featured'),
            shop: data.filter((product) => product.category == 'shop'),
            cloth: data.filter((product) => product.category == 'cloth'),
            cartProductlist: [],
            currentProduct: [],
        }
    },
    getters: {
        count_length() {
            return this.cartProductlist.length
        },
        subtotalFun() {
            return this.cartProductlist.reduce((acc, item) => acc + item.total * 1, 0);
        },
    },
    actions: {
        getcurrentProduct(id) {
            return this.currentProduct = this.data.filter((product) => product.id == id)
        },
        addtocart(id) {
            return this.cartProductlist.push(this.data.filter((product) => product.id == id)[0]);
        }
    }
})


