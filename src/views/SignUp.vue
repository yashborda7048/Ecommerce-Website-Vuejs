<template>
    <section id="signup">
        <div class="container">
            <img src="../assets/img/logo3.png" alt="logo1">
            <h1>Sign Up</h1>

            <label for="username">User Name</label>
            <input type="text" v-model="v$.username.$model" id="username" placeholder="User Name">
            <div class="input-errors" v-for="(error, index) of v$.username.$errors" :key="index">
                <div class="error-msg">{{ error.$message }}</div>
            </div>

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

            <button @click="submitForm" type="button">Sign Up</button>
            <router-link to="/login" class="link">
                <h4>Login</h4>
            </router-link>
        </div>
    </section>
</template>
  
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import axios from 'axios'
const pass = helpers.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
export default {
    name: 'signup',
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    validations() {
        return {
            username: {
                required: helpers.withMessage('**  Invalid User Name.', required),
                minLength: minLength(3),
                maxLength: maxLength(20)
            },
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
        async submitForm() {
            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (isFormCorrect == true) {
                // actually submit form
                await axios.post('http://localhost:3000/user', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    // handle succes
                    console.log(response.data);
                    localStorage.setItem("Userdata", JSON.stringify(response.data))
                    alert("Account is create.")
                    this.$router.push({ path: '/' })
                }).catch((error) => {
                    // handle error
                    console.log(error);
                })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("Userdata");
        if (user) {
            this.$router.push({ path: '/' })
        }
    }
}
</script>

