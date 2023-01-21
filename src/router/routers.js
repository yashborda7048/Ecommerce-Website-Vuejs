import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomeView',
        path: '/',
        component: () => import("../views/Homeview.vue"),
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import("../views/SignUp.vue"),
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("../views/Login.vue"),
    },
    {
        name: 'ShopView',
        path: '/shop',
        component: () => import("../views/Shopview.vue")
    },
    {
        name: 'BlogView',
        path: '/blog',
        component: () => import("../views/Blogview.vue")
    },
    {
        name: 'ProductDetailsview',
        path: '/ProductDetails/:id',
        component: () => import("../views/ProductDetailsview.vue")
    },
    {
        name: 'Cartview',
        path: '/shoping-cart',
        component: () => import("../views/Cartview.vue")
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: () => import("../views/PageNotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: "nav-link",
})
export default router;
