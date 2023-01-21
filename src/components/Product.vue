<template>
    <div v-for="{ Product_main_image, Product_name, Product_price, id } in Product_list" :key="Product_main_image"
        class="product text-center" :class="card_class">
        <img class="img-fluid mb-md-3" :src="get_main_img(Product_main_image)" :alt="Product_main_image">
        <div class="star py-3">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-full"></i>
        </div>
        <h5 class="p-name">{{ Product_name }}</h5>
        <h4 class="p-price">${{ Product_price }}.00</h4>
        <div class="d-flex justify-content-center">
            <Button @click="detail(id)" class="me-2" :class="button_1" :button_text="Details" />
            <Button @click="changeRoute(id)" :button_text="Buy_now" />
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import { mapActions } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';
export default {
    name: "Product",
    data() {
        return {
            button_1: "button_1",
            Buy_now: "Buy Now",
            Details: "Details",
        }
    },
    components: { Button },
    props: {
        card_class: String,
        Product_main_image: Image,
        Product_name: String,
        Product_price: String,
        Product_list: Array,
        id: String
    },
    methods: {
        ...mapActions(useProductStore, ['addtocart']),
        get_main_img(main_image) {
            return require("../assets/img/" + main_image + ".jpg")
        },
        detail(id) {
            this.$router.push({ path: `/ProductDetails/${id}` });
            console.log(id);
        },
        changeRoute(id) {
            let user = localStorage.getItem("Userdata");
            if (user) {
                this.$router.push({ path: '/shoping-cart' });
                console.log(user);
                useProductStore().addtocart(id)
            } else {
                alert("please SignUp account...");
                this.$router.push({ path: '/signup' });
            }
        }
    },
}
</script>