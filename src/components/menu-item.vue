<template>
  <div>
    <v-toolbar app fixed color="#f6f6dd">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="activateDrawer = true"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5">Recepie Oazis</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down"  :key="item.id" v-for="item in items"> 
        <v-btn flat :to="{ name: item.title }" exact>{{
          item.title
        }}</v-btn>
        
      </v-toolbar-items>
    
      <dropdown v-if="userLogged==false" class="hidden-sm-and-down"></dropdown>
      <v-btn small v-else class="hidden-sm-and-down white--text" color="#793253"  @click="signOut">Sign out</v-btn>
      <span class="ml-5 font-weight-large title" v-if="userLogged">Welcome {{fullname}} </span> 
    </v-toolbar>
    

    <v-navigation-drawer
      fixed
      v-model="activateDrawer"
      class="hidden-md-and-up"
    >
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.id" :to ="{name: item.title}">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <div class="alignLeft">
      <dropdown v-if="userLogged ==false"></dropdown>
      <v-btn small color="grey lighten-2" v-else @click="signOut">Sign out</v-btn>
     

        </div>
      </v-list>  
    </v-navigation-drawer>
    
  </div>
</template>

<script>
import { eventHub } from "../main";
import dropdown from '@/components/dropdown.vue';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
   
  data() {
    return {
      drawer: false,
      userLogged:false,
      fullname:'',
      items: [
        { title: "Home", id: 1 },
        { title: "Recepies", id: 2 },
        { title: "Favorites", id: 3 },
        { title: "Contact", id: 4 },
        
      ],
      activateDrawer: false,
      setActiveClass:true,
    };
  },
  methods: {
    // if user signs out
     signOut() {
       
        firebase.auth().signOut()
        this.userLogged = false;
        this.$router.push('/');   
     },

  },

  

  mounted () {
    // if a webpage is reloaded and user is still logged on check
    firebase.auth().onAuthStateChanged(user => {
       
       if(user !== null) {

          this.userLogged = true;
          this.fullname = user.displayName;
       }

       else {

          this.userLogged = false;
       }
       
    }) 
  },

  components: {
    "Dropdown":dropdown,
  },
};
</script>

<style scoped>
  .alignLeft {
     float: left;
  }
.class1{
  background-color: aquamarine;
}
</style>
