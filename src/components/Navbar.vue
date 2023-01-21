<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-light py-3">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo1.png" alt="logo1">
            </a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon top-bar"></span>
                <span class="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-3  ms-sm-auto mt-3 align-items-start align-items-sm-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link " aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link " aria-current="page">Shop
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link " aria-current="page">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link " aria-current="page">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact-us" class="nav-link " aria-current="page">Contact Us
                        </router-link>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <i class="fa fa-search"></i>
                        <router-link to="/shoping-cart" class="nav-link p-0" aria-current="page">
                            <i class="fa fa-shopping-cart position-relative"></i>
                            <span :class="count_length == 0 ? 'd-none' : 'd-inline-block'">{{ count_length }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';
export default {
    name: 'Navbar',
    computed: {
        ...mapState(useProductStore, ['count_length']),
    }
}
</script>
 