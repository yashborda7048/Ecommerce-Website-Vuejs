<template>
    <Navbar />
    <section id="cart" class="pt-5">
        <div class="container pt-5 mt-5">
            <h3>Shopping Cart</h3>
            <hr class="hr">
        </div>
        <div id="cart-container" class="container pb-3 my-5">
            <table>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="({ Product_main_image, total, Product_name, Product_price, id }, index) in Product_list"
                        :key="Product_name">
                        <td>
                            <i @click="removecartproduct(index)" class="fa fa-trash" style="font-size:24px"></i>
                        </td>
                        <td>
                            <img :src="get_img(Product_main_image)" :alt="Product_main_image">
                        </td>
                        <td>
                            <h5>{{ Product_name }} {{ id }}</h5>
                        </td>
                        <td>
                            <h5>${{ Product_price }}.00</h5>
                        </td>
                        <td>
                            <select @change="quantity(id, index)" :id='"myselect" + id'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </td>
                        <td>
                            <h5>${{ total }}.00</h5>
                        </td>
                    </tr>
                    <tr :class="Product_list == 0 ? '' : 'd-none'">
                        <td colspan="6">
                            please purchase the product <br>
                            <router-link to="/shop">Shop</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="card-bottom" class="container">
            <div class="row">
                <div class="coupon col-md-6 col-12 mb-4">
                    <div>
                        <h5>COUPON</h5>
                        <label class="d-block" for="coupon_code">
                            <p>Enter your coupon code if you have one. (#CODE30)</p>
                        </label>
                        <div class="d-flex flex-column flex-lg-row justify-content-between">
                            <input type="text" placeholder="Coupon Code" id="coupon_code">
                            <Button class="me-3" :button_text="Apply_coupon" />
                        </div>
                    </div>
                </div>
                <div class="total col-md-6 col-12 mb-4">
                    <div>
                        <h5>CART TOTAL</h5>
                        <div class="d-flex justify-content-between">
                            <h6>Subtotal</h6>
                            <p>${{ subtotal }}.00</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6>Shipping</h6>
                            <p>$10.00</p>
                        </div>
                        <hr class="second-hr">
                        <div class="d-flex justify-content-between">
                            <h6>Total</h6>
                            <p>${{ subtotal + 10 }}.00</p>
                        </div>
                        <div class="d-flex justify-content-end">
                            <Button class="me-3" :button_text="process_to_checkout" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
  
<script>
import Button from '@/components/Button.vue';
import { mapState } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Cartview",
    components: { Button, Navbar, Footer },
    data() {
        return {
            Apply_coupon: "APPLY COUPON",
            process_to_checkout: "PROCESS TO CHECKOUT",
            Product_list: useProductStore().cartProductlist,
            subtotal: useProductStore().subtotalFun
        }
    },
    methods: {
        get_img(image) {
            return require("../assets/img/" + image + ".jpg");
        },
        quantity(id, index) {
            console.log("index", index);
            this.Product_list.map(function (product) {
                if (product.id == id) {

                    for (let i = 0; i <= index; i++) {
                        if (i == index) {
                            var x = document.getElementsByTagName("select")[index].value;
                            product.quantity = x;
                            product.total = product.Product_price * product.quantity
                        }
                    }
                }
            });
            this.subtotal = useProductStore().subtotalFun;
            console.log(useProductStore().subtotalFun);
        },
        removecartproduct(index) {
            this.Product_list.splice(index, 1);
            this.subtotal = useProductStore().subtotalFun;
        }
    },
    computed: {
        ...mapState(useProductStore, ['subtotalFun'])
    },
}
</script>

