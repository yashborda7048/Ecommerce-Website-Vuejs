<template>
    <div v-for="{ Product_main_image, category, small_image_1, small_image_2, small_image_3, small_image_4, Product_name, Product_price, id } in Product_list"
        :key="Product_name" class="row mt-5 ProductDetails">
        <div class="col-lg-5 col-12">
            <!-- <img class="img-fluid w-100 mb-md-3" id="main_img" :src="get_main_img(Product_main_image)" alt=""> -->
            <img v-if="small_img === 1" class="img-fluid w-100 mb-md-3" id="main_img" :src="get_img(small_image_1)"
                alt="">
            <img v-else-if="small_img === 2" class="img-fluid w-100 mb-md-3" id="main_img" :src="get_img(small_image_2)"
                alt="">
            <img v-else-if="small_img === 3" class="img-fluid w-100 mb-md-3" id="main_img" :src="get_img(small_image_3)"
                alt="">
            <img v-else-if="small_img === 4" class="img-fluid w-100 mb-md-3" id="main_img" :src="get_img(small_image_4)"
                alt="">
            <img v-else class="img-fluid w-100 mb-md-3" id="main_img" :src="get_img(Product_main_image)" alt="">
            <div class="small-img-group">
                <div class="small-img-col">
                    <img @click="small_img = 1" :src="get_img(small_image_1)" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img @click="small_img = 2" :src="get_img(small_image_2)" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img @click="small_img = 3" :src="get_img(small_image_3)" class="small-img" alt="">
                </div>
                <div class="small-img-col">
                    <img @click="small_img = 4" :src="get_img(small_image_4)" class="small-img" alt="">
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-12 px-3">
            <h6 class="mb-4">Category / {{ category }}</h6>
            <h3 class="mb-3">{{ Product_name }}</h3>
            <h2 class="mb-3">${{ Product_price }}.00</h2>
            <select class="my-3">
                <option value="">Select Size</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>
            <div class="d-flex align-items-baseline">
                <input type="number" max="5" min="1" value="1">
                <Buttton @click="changeRoute(id)" class="mb-5" :class="button_1" :button_text="button_text" />
            </div>
            <h4>Product Details </h4>
            <div class="details ">
                <p>Care Instructions: Machine Wash</p>
                <p>Fit Type: Regular Fit</p>
                <p>Fabric Composition : 100% Cotton</p>
                <p>Premium Super combed cotton jersey fabric is soft & comfortable for all day wear due to its good
                    absorbency & breathability</p>
                <p>Crew neck with rib trim for neck finishing</p>
                <p>Authentic USPA Graphic print at the centre front</p>
                <p>Tagless label at the inside back of the garment for all day comfort</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import Buttton from './Button.vue';
import { mapActions } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';
export default {
    name: "ProductDetails",
    data() {
        return {
            small_img: '',
            button_text: "Add To Cart",
            button_1: "button_1",
            Product_list: useProductStore().getcurrentProduct(this.$route.params.id),
            router_id: this.$route.params.id
        }
    },
    components: { Buttton },
    methods: {
        ...mapActions(useProductStore, ['getcurrentProduct', 'addtocart']),
        get_img(image) {
            return require("../assets/img/" + image + ".jpg")
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
        },
    },
}
</script>