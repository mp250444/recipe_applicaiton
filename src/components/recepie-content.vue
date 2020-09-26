<template>
<div>
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
        <v-flex d-inline-block xs12 sm12 md6 xl4 v-for="(recepie, index) in computed_recepie_list" :key="recepie.id" class="pa-3 fade-item">
       
          <v-card class="hoverOverCards">
            <v-img :src="recepie.img" aspect-ratio="2"></v-img>

           

          <v-card-title primary-title>
            <h3 class="headline mb-0">{{recepie.title}}</h3>
          </v-card-title>
          
          <v-card-text>
          <p><b>Preparation: </b>{{recepie.preparation}}</p>
            <p class="text-xs-right"><b>Time: </b>{{recepie.time}}</p>
        <v-rating class="text-xs-right" hover color="#793253" v-model="recepie.rating"></v-rating>
          </v-card-text>

          <v-card-actions>
           <v-btn flat outline color="#793253" @click.stop="openDialog(recepie,index)">See Full Recepie</v-btn>
           <v-btn flat icon class="likes" :color="recepie.color"   @click="changeIconColor(recepie ,index)">
             <v-icon>favorite</v-icon>
           </v-btn>
          </v-card-actions>
          </v-card>
      
        </v-flex>
        </transition-group>
      </v-layout>
     </v-container>

      <div class="text-xs-center">
    <v-pagination
      color="#793253"
      v-model="page"
      :length="2"
    
    ></v-pagination>
  </div>

       
        <div class="modal text-xs-center" v-show="modal"> 
          <v-progress-circular class="alignVertical" :size="70" color="#793253" :width="7" indeterminate></v-progress-circular>
        </div> 
       
   
   </div>
</template>

<script>
import { eventHub } from "../main";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { setTimeout } from 'timers';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      db:firebase.firestore(),
      meal_type_array:[],
      search_recepies:"",
      dialogChange:false,
      favorites_array:[],
      recepies:[],
      pagnation_recepies:[], 
      currentId:"",
      modal:false,
      page:1,
      chooseArray:[]
        
    };
  },

   mounted() {

    this.modal =true; 
    let storage = [];
    // get current user if there is one
     firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
        // if user is signned in get user iD and local Storage connected to that unique ID.
        // Set Favorites array and storage with data from Local Storage
          this.currentId = firebase.auth().currentUser.uid;
          storage = JSON.parse(window.localStorage.getItem(this.currentId));
          this.favorites_array = (storage) ? storage : [];
        // else nobody has siggeed in   
        } else {
          this.currentId = "";

        }
      });
    // get data from firebase
    let docRef = this.db.collection("recipes").doc("recipes-ID");
 
        docRef.get().then((doc) => {
            if (doc.exists) {
             
              this.recepies = doc.data().recipe;
              this.modal = false;
              if(Array.isArray(storage)){
                compare_arryas(this.recepies)
  
              }
              
              this.setPagnationMethod(this,this.page)
            } else {
                 this.modal = false;
                console.log("No such document!");
            }

            
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        
 // depending on a users favorites change the original recepise array likes to different color
      function compare_arryas(r) {
          
          for (let i = 0; i<storage.length; i++){
              // console.log( r[storage[i].id]);
              r[storage[i].id].like = true;
              r[storage[i].id].color = '#793253';
              
             
          }
       }

       

  },

   watch: {
        // watch val change
       page:function(val) {

         if(val) {
            this.setPagnationMethod(this,this.page)
         }
       } 
      
   },

  
  methods: {

     setPagnationMethod:function (thisObject,pagnationPage) {
         thisObject.pagnation_recepies = [];
         let upperRange = pagnationPage * 6;
         let  lowerRange = (pagnationPage * 6) - 6;
         let k = lowerRange; 
      
        for(k; k < upperRange; k++) {

           thisObject.pagnation_recepies.push(thisObject.recepies[k]);
           
           console.log(k)
           if(k== thisObject.recepies.length) {
             return k;
           }
        }
        
     },

  // open dialog and send nececery files
     openDialog:function (recepie,index) {
          let recepieID = (this.chooseArray.length < this.recepies.length)?index : recepie.id; 
          let shareObj = {};
          this.dialogChange = true;
          console.log(recepie)
          console.log(this.chooseArray)
          shareObj[0] = this.chooseArray[recepieID].img;
          shareObj[1] = this.chooseArray[recepieID].title;
          eventHub.$emit('getImage',shareObj)
          eventHub.$emit('dialog1',this.dialogChange)
          
          
     },

     //cchange color on  like item
      changeIconColor:function (recepie,index){
        const previousUserId = this.currentId;
         recepie.like = !recepie.like;
         recepie.color = (recepie.like == false) ? '#e3a0bf':'#793253'; 
        
         
         
       // if recepie is liked add it to favorites array
         if(recepie.like){
             this.favorites_array.push(recepie)
            //  console.log(this.favorites_array) 
         }

         // if an element is removed from the list find it and remove it from favorites array
         else {
             
            for(let i = 0; i < this.favorites_array.length; i++) {
                
                 if(this.favorites_array[i].title == recepie.title) {
                     
                    this.favorites_array.splice(i,1)
                    // console.log(this.favorites_array)
                   
                 }
            } 
   
         } 
            // after all that set local storage
           window.localStorage.setItem(this.currentId, JSON.stringify(this.favorites_array));
            
            },

          
          },
    
  computed: {

    
      computed_recepie_list:function () {
      
        
            let search_titles = this.search_recepies; // get a local reference of search_recepies because filter function has it's own scope..
            let meal_type=""; // meal_type string that we make using the checkbox to filter trough the recepies
            let result=""; // the result of our filtering
            // let chooseArray = [];

        
       
              for(let i = 0; i<this.meal_type_array.length;i++){ // going trough the array of checked checkboxes
                    if(i===0){ // if i=0 adding string to a meal_type
                         console.log(meal_type)
                         meal_type+=this.meal_type_array[i];   
                     }
                    else {        // // else adding '|' and  string to a meal_type to make a regular expresion that supports all fitered values        
                        
                        console.log(meal_type)
                       meal_type+="|" + this.meal_type_array[i];
                 }
              }
              
              result = new RegExp(meal_type, "g"); // making a regular expresion of a variable
             
             if(search_titles == "" && this.meal_type_array.length ==0) {
                this.chooseArray = this.pagnation_recepies;
                // console.log(this.meal_type_array.length)
                // console.log(this.chooseArray)
             }
             else {
                this.chooseArray = this.recepies;
                
             }
               
           
             return this.chooseArray.filter((recepie)=> { // using a filter function and recepies array
             
              //  console.log(recepie.img)
                return recepie.title.toLowerCase().match(search_titles.toLowerCase()) && recepie.type.toLowerCase().match(result); // matching the title from each recepie with the title typed in he search bar and also matching the checkbox values that are true(checked)
                
          })
          
          
        },
    
  },

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
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
 }

 .alignVertical {

     margin: 20rem auto;
 }

</style>

