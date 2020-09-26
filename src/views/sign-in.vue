<template>

<div align="center">
    <v-form>
      <h1 class="mt-5">Sign In</h1>
      <v-container>
        
             <v-flex xs6 sm6 md6 lg4 xl4>
              
              <v-text-field
                  color="#793253"
                  v-model="email"
                  :rules="emailRules"
                  :counter="20"
                  label="E-mail"
                 required
              ></v-text-field>

            </v-flex> 
        
             
            <v-flex xs6 sm6 md6 lg4 xl4>
               <v-text-field
               color="#793253"
               v-model="password"
               :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]"
               :type="show1 ? 'text' : 'password'"
               name="input-pass"
               label="Enter your password"
               hint="At least 8 characters"
               counter
               @click:append="show1 = !show1"
               ></v-text-field>
            </v-flex>

            <v-flex xs12 mt-4>
              <v-btn color="#793253" class="white--text" @click="signIn">Submit</v-btn>
            </v-flex>
            
            <v-flex mt-4>
               <p>If you don't have an account click here to create one <v-btn flat color="#793253" :to="{ name: 'Sign-Up' }">SignUp</v-btn></p>
            </v-flex>
       
      </v-container>  
      
    </v-form>

        <v-layout justify-center>
        <div class="modal" v-show="modal"> 
          <v-progress-circular class="alignVertical" :size="70" color="#793253" :width="7" indeterminate></v-progress-circular>
        </div> 
        </v-layout>

   </div>

      

</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { eventHub } from "../main";

    export default {
     data: () => ({
      valid: false,
      modal:false,
      firstname: '',
      lastname: '',
      show1:false,
      password:"",
      nameRules: [
        v => !! v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],

      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
    }),

    methods: {
      signIn() {
          
          let email = this.email;
          let pass = this.password;
          let modal = document.querySelector('.modal');
          this.modal = true;
          firebase.auth().signInWithEmailAndPassword(email, pass).then(credentials=> {
           modal.style.display = 'none';
            //  console.log(credentials.user.uid)
             
             this.route();
          }).catch(function(error) {
        
            var errorMessage = error.message;
            alert(errorMessage)
            modal.style.display = 'none';
            // ...
          });
      },

      route() {
        this.$router.push('/home-one');
      }
    },
        
    }
</script>

<style scoped>

 .boundForm {

     margin: 0 auto;
 }

 .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(8, 8, 8); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
 }

 .alignVertical {

     margin: 20rem auto;
 }

</style>
