<template>
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <h1>SignUp Form hehe</h1>
            <!-- using v-model to save data properties -->
             <label>Email: </label>
                <input type="email" required v-model="email">
                <label>Password: </label>
             <input type="password" required v-model="password">
             <label>Role: </label>
             <!-- select box -->
              <select v-model="role">
                <option value="developer">Developer</option>
                <option value="designer">Web Designer</option>
                <option value="">Select a role</option>
              </select>
              <label>Languages:</label>
                <input type="text" v-model="currentLanguage">
                <input type="password" required v-model="password" @keydown="keyfinder" @keyup.enter.alt="addLanguage">
              <button type="submit">Submit</button>
            <div v-for="lang,index in languages" :key="index+1">
                <p id="para" @click='deleteLang(lang)'>
                    {{ index+1 }}:{{ lang }}
                </p>
            </div>
            <div class="terms">
                <!-- isnt it insane?? you can use v-model on a checkbox and when checked, it can register a boolean value as true -->
                <input type="checkbox" v-model="terms" required>
                <label>Accept Terms and Conditions</label>
            </div>
            <h4>People wanted in your team:</h4>
            <div>
                <input type="checkbox" value="Mario" v-model="names">
                <label>Mario</label>
            </div>
            <div>
                <input type="checkbox" value="Dean" v-model="names">
                <label>Dean</label>
            </div>
            <div>
                <input type="checkbox" value="Luigi" v-model="names">
                <label>Luigi</label>
            </div>
        </form>
        <!-- showing stored information in data function -->
         <div>
            <p>Email:{{ email }}</p>
            <p>Password:{{ password }}</p>
            <p>Role:{{ role }}</p>
            <p>Terms:{{ terms }}</p>
            <p>People:{{ names }}</p>
            <p>Current Language:{{ currentLanguage }}</p>
            <p>Languages:{{ languages }}</p>
         </div>
    </div>
</template>
<script>
    export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms:false,
            names: [],
            currentLanguage: '',
            language: ['something','nothing']
        }
    },
    methods: {
        keyfinder(){
            console.log(event)
        },
        deleteLang(lang){
            this.languages = this.languages.filter (item => item !=lang)
        },
        formSubmit(){
            console.log('The page has refreshed');
            this.email = '',
            this.password = '',
            this.terms = false,
            this.currentLanguage = '',
            this.role = ''
        }, computed:{
            addLanguage(){
                if(!this.languages.includes(this.currentLanguage)){
                    this.languages.push(this.currentLanguage)
                }
            }
        }
    }
}
</script>
<style>
</style>