<template>
    <Navbar/>
    <section id="blog">
        <div class="container mt-5 pt-5">
            <h3 class=" pt-5">Blogs</h3>
            <hr>
            <div class="row">
                <div class="col-md-6 col-12">
                    <img src="../assets/img/blog/1.jpg" class="img-fluid w-100" alt="1">
                    <h4 class="text-center p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos omnis tempora.</h4>
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/img/blog/2.jpg" class="img-fluid w-100" alt="2">
                    <h4 class="text-center p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos omnis tempora.</h4>
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/img/blog/3.jpg" class="img-fluid w-100" alt="3">
                    <h4 class="text-center p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos omnis tempora.</h4>
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/img/blog/4.jpg" class="img-fluid w-100" alt="4">
                    <h4 class="text-center p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit Quos omnis tempora.</h4>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>
  
<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: "blogview",
    components: { Navbar, Footer }
}
</script>

