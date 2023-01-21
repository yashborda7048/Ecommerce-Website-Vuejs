<template>
    <Navbar />
    <section id="featured" class="pt-5">
        <div class="container mt-5 pt-5">
            <h3>Our Products</h3>
            <hr class="mx-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="row mx-auto container">
            <Product :card_class="card_class" :id="id" :Product_main_image="Product_main_image"
                :Product_name="Product_name" :Product_price="Product_price" :Product_list="Product_list" />
        </div>
    </section>
    <Footer/>
</template>
  
<script>
import Product from '../components/Product.vue';
import { useProductStore } from '@/stores/ProductStore';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const productStore = useProductStore();

export default {
    name: 'ShopView',
    components: {
    Product,
    Navbar,
    Footer
},
    data() {
        return {
            card_class: 'col-lg-3 col-md-6',
            Product_list: productStore.shop,
        }
    }
}
</script>


