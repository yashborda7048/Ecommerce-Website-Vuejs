<template>
    <Navbar/>
    <section id="ProductDetailsview" class="my-5 py-5">
        <div class="container">
            <ProductDetails />
            <!-- <Featured /> -->
        </div>
    </section>
    <Footer/>
</template>
  
<script>
// import Featured from '@/components/Featured.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import ProductDetails from '@/components/ProductDetails.vue';

export default {
    name: 'ProductDetailsview',
    components: {
    ProductDetails,
    Navbar,
    Footer
}
}
</script>

<style scoped>

</style>
