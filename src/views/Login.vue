<template>
    <section id="login">
        <div class="container">
            <img src="../assets/img/logo3.png" alt="logo1">
            <h1>Login</h1>

            <label for="email">E-Mail</label>
            <input type="email" v-model="v$.email.$model" id="email" placeholder="Email Address">
            <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <label for="password">Password</label>
            <input type="text" v-model="v$.password.$model" id="password" placeholder="Password">
            <div class="input-errors" v-for="(error, index) of v$.password.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

            <button @click="login" type="button">Login</button>
            <router-link to="/signup" class="link">
                <h4>Sign Up</h4>
            </router-link>
        </div>
    </section>
</template>
  
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import axios from 'axios'
const pass = helpers.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
export default {
    name: 'login',
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations() {
        return {
            email: {
                required: helpers.withMessage('**  Invalid Email.', required),
                email
            },
            password: {
                required: helpers.withMessage('**  Invalid Password.', required),
                pass: helpers.withMessage('**  Must contain at least one number and one uppercase and lowercase letter required.', pass)
            }
        }
    },
    methods: {
        async login() {
            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            console.log(isFormCorrect);
            if (isFormCorrect == true) {
                // actually Login form
                await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
                    .then((response) => {
                        // handle succes
                        if (response.status == 200 && response.data.length > 0) {
                            localStorage.setItem("Userdata", JSON.stringify(response.data[0]))
                            alert("Account is Login.")
                            console.log(response, response.data[0]);
                            this.$router.push({ path: '/' })
                        }
                        else {
                            alert("Type correct email and password....")
                        }
                    }).catch((error) => {
                        // handle error
                        console.log(error);
                        alert("error.....")
                    })
            }
        }
    },
    mounted() {
        // const route = useRoute();
        // this.profile = route.params.name
        let user = localStorage.getItem("Userdata");
        if (user) {
            this.$router.push({ path: '/' })
        }
    }
}
</script>

