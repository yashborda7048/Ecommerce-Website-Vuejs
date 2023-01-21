<template>
    <div class="container">
        <router-link to="/" class="nav-link " aria-current="page">Shoping - Cart</router-link>
        <br>
        <h1>404 Error 😔</h1>
    </div>
</template>
  
<script>
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100vh;
    max-height: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.nav-link {
    display: block;
    color: coral;
    font-size: 25px;
    font-weight: 500;
    transition: 0.3s ease;
}

.nav-link:hover {
    color: coral;
    text-decoration: underline;
}
</style>
