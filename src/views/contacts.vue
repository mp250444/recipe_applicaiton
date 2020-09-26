<template>
  <div>
    <div>
      <menu-item></menu-item>
    </div>
   

   <v-layout justify-center mr-5 ml-5 class="seperate">
     <h1>If you want to get in touch with us please fill out the contact form below and submit your request</h1>
   </v-layout>

  <v-container>
   <v-layout mt-5 justify-center row wrap >
     <v-flex sm4 mr-5>
      <v-text-field color="#793253" label="First name" v-model="firstname" :rules="nameRules" :counter="10" required>

      </v-text-field>
     </v-flex>
      
      <v-flex sm4 >
       <v-text-field color="#793253" label="Last name" v-model="lastname" :rules="nameRules" :counter="10" required>
      
      </v-text-field>
     </v-flex>


   </v-layout>  

   <v-layout mt-5 mb-5 justify-center row wrap>
     <v-flex sm4 mr-5>
      <v-text-field color="#793253" label="E-mail address" v-model="email" :rules="emailRules" :counter="10" required> </v-text-field>
     </v-flex>
      
      <v-flex sm4>
       <v-text-field color="#793253" label= "Phone number" v-model="phone"></v-text-field>
     </v-flex>


   </v-layout>

   <v-layout justify-center row wrap>
    <v-flex sm9>
     <v-textarea
          color="#793253"
          v-model="textarea"
          name="input-7-1"
          label="Comment / Question"
          value="Write down any questions or concerns and we will respond as soon as possible."
          hint="Hint text"
        ></v-textarea>

    </v-flex>
   </v-layout>

   <v-layout justify-center row wrap>
     <v-flex sm2 ml-5>
        <v-btn color="#f6f6dd"  large @click=submit>Submit</v-btn>
     </v-flex>

      <v-flex sm2 ml-5>
        <v-btn color="#f6f6dd" large @click=clear>Clear</v-btn>
    </v-flex>
   </v-layout>
   </v-container>
  <footer-item></footer-item>
  </div>
</template>

<script>
import menuItem from "../components/menu-item.vue";
import textItem from "../components/text-item.vue";
import footerItem from "../components/footer-item.vue";
import { eventHub } from "../main";
export default {
  data: () => ({
      valid: false,
      phone:'',
      firstname: '',
      lastname: '',
      textarea:'',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),


  components: {
    "menu-item": menuItem,
    "text-item": textItem,
    "footer-item":footerItem,
  },

  methods: {

     submit:function () {

       if(this.firstname !=="" && this.lastname!=="" & this.email!==""){ 

      alert("Your comment / question has been submited.");
       
            this.cleanUp();
       }

       else {
          alert("Please fill out the required fileds to subit form.")
            this.cleanUp();
          }
     },

     clear:function () {
      this.cleanUp();

     },

     cleanUp:function () {

       this.firstname = "";
       this.lastname= ""
       this.email="";
       this.phone="";
       this.textarea="";
     }
  }
};
</script>

<style>
  .seperate {
    padding-top:200px;
  }
</style>
