<template>
    <section id="featured">
        <div class="container text-center mt-5 pt-5">
            <h3>Our Featured</h3>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="row mx-auto content-fluid">
            <Product :card_class="card_class" :id="id" :Product_main_image="Product_main_image" :Product_name="Product_name"
                :Product_price="Product_price" :Product_list="Product_list" />
        </div>
    </section>

</template>
 
<script>
import Product from './Product.vue';
import { useProductStore } from '@/stores/ProductStore';
const productStore = useProductStore();

export default {
    name: "Featured",
    components: { Product },
    data() {
        return {
            card_class: 'col-lg-3 col-md-6',
            Product_list: productStore.featured,
        }
    }
}
</script>