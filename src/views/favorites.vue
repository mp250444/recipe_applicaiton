<template>
 <div>
  <menu-item></menu-item>
   <dialog-item></dialog-item>
     <v-container>  
      <v-layout row wrap class="mt-5">
          <v-flex xs6 sm3 md2 xl1>
          <v-checkbox label="Breakfast" color="#793253" value="breakfast" v-model="meal_type_array"></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2 xl1> 
          <v-checkbox label="Lunch" color="#793253" value="lunch" v-model="meal_type_array"></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2 xl1>
          <v-checkbox label="Dinner" color="#793253" value="dinner" v-model="meal_type_array"></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2 xl1>
          <v-checkbox label="Dessert" color="#793253" value="dessert" v-model="meal_type_array"></v-checkbox>
          </v-flex>         
       </v-layout>

        <v-flex xs10 sm8 md6 xl5>
            <v-text-field label="Search" outline  v-model="search_recepies"></v-text-field>
        </v-flex>
    </v-container>

    

   <v-container>
      <v-layout row wrap> 
      <transition-group name="fade" tag="div">
        <v-flex d-inline-block xs12 sm12 md6 xl4 v-for="(recepie,index) in computed_recepie_list" :key="recepie.id" class="pa-3 fade-item">
       
          <v-card class="hoverOverCards">
            <v-img :src="recepie.img"
          aspect-ratio="2"></v-img>

          <v-card-title primary-title>
            <h3 class="headline mb-0">{{recepie.title}}</h3>
          </v-card-title>
          
          <v-card-text>
          <p><b>Preparation: </b>{{recepie.preparation}}</p>
            <p class="text-xs-right"><b>Time: </b>{{recepie.time}}</p>
        <v-rating class="text-xs-right" hover color="brown darken-1" v-model="recepie.rating"></v-rating>
          </v-card-text>

          <v-card-actions>
           <v-btn flat outline color="brown darken-1" @click="openDialog(index)">See Full Recepie</v-btn>
           <v-btn flat icon class="likes" :color="recepie.color"   @click="changeIconColor(recepie,index)">
             <v-icon>favorite</v-icon>
           </v-btn>
          </v-card-actions>
          </v-card>
      
        </v-flex>
        </transition-group>
      </v-layout>
     </v-container>
   

    <footer-item></footer-item>


     
        <div class="modal text-xs-center" v-show="modal"> 
          <v-progress-circular class="alignVertical" :size="70" color="#793253" :width="7" indeterminate></v-progress-circular>
        </div> 
    
   </div>
 
  
</template>

<script>
import menuItem from "../components/menu-item.vue";
import dialogItem from "../components/dialog-item.vue";
import footerItem from "../components/footer-item.vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import { eventHub } from "../main";
export default {
  data() {
    return {
      favorites:[],
      meal_type_array:[],
      search_recepies:"",
      dialogChange1:false,
      currentId:"",
      modal:false,
    }
  },
 

  methods: {

    
      openDialog:function (index) {
         let shareObj ={}
         
          this.dialogChange1 = true;
          eventHub.$emit('dialog2',this.dialogChange1)
          shareObj[0] = this.favorites[index].img;
          shareObj[1] = this.favorites[index].title;
          eventHub.$emit('send_image_from_favorites',shareObj);
         
          
     },
      changeIconColor:function (recepie,index){      
          recepie.like = false;
          this.favorites.splice(index,1)
          window.localStorage.setItem(this.currentId, JSON.stringify(this.favorites));
         
          },
    
          },

  mounted() {
  
  
    this.modal = true;

      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
           this.currentId = firebase.auth().currentUser.uid;
           var t = JSON.parse(window.localStorage.getItem(this.currentId));
           this.favorites = t; 
           this.modal = false;
        } else {
          this.currentId = "";
         this.modal = false;
        }
      });
     
      
   },


  computed: {

      computed_recepie_list:function () {
      
        
            let search_titles = this.search_recepies; // get a local reference of search_recepies because filter function has it's own scope..
            let meal_type=""; // meal_type string that we make using the checkbox to filter trough the recepies
            let result=""; // the result of our filtering
        
            if(this.favorites ==null){

               this.favorites = [];
            }
          // console.log(this.recepies)
       
              for(let i = 0; i<this.meal_type_array.length;i++){ // going trough the array of checked checkboxes
                    if(i===0){ // if i=0 adding string to a meal_type

                         meal_type+=this.meal_type_array[i];   
                     }
                    else {        // // else adding '|' and  string to a meal_type so we can make a regular expresion that supports all fitered values        
                       
                       meal_type+="|" + this.meal_type_array[i];
                 }
              }
              
               result = new RegExp(meal_type, "g"); // making a regular expresion of a variable
         
           
             return this.favorites.filter((recepie)=> { // using a filter finction and recepies array
             
               
                return recepie.title.toLowerCase().match(search_titles.toLowerCase()) && recepie.type.toLowerCase().match(result); // matching the title from each recepie with the title typed in he search bar and also matching the checkbox values that are true(checked)
                
          })

       
          
        },   
  },

  components: {
    "menu-item": menuItem,
    "dialog-item":dialogItem,
    "footer-item":footerItem,
  }
};
</script>

<style scoped>
   
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
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
 }

 .alignVertical {

     margin: 20rem auto;
 }



</style>

