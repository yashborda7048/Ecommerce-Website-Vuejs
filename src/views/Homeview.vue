<template>
    <Navbar/>
    <Home/>
    <Brands/>
    <New/>
    <Featured/>
    <Banner/>
    <Clothes/>
    <Footer/>
    
</template>
  
<script>
import Home from "../components/Home.vue";
import Brands from "../components/Brands.vue";
import New from "../components/New.vue";
import Featured from "../components/Featured.vue";
import Banner from "../components/Banner.vue";
import Clothes from "@/components/Clothes.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: 'HomeView',
    components: {
    Home,
    Brands,
    New,
    Featured,
    Banner,
    Clothes,
    Navbar,
    Footer
}
}
</script>


