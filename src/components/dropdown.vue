<template>
    
    <v-flex xs1>
      
      <div class="text-xs-center">
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small class="white--text"  color="#793253" v-on="on">Sign-in / Sign Up</v-btn> 
          </template>

          <v-list>
            <v-list-tile v-for="(item1,index) in items1" :key="index" :to="{ name: item1.title1 }">
              
            <v-list-tile-title>{{item1.title1}}</v-list-tile-title>
            </v-list-tile>  
          </v-list>  
        </v-menu>   
      </div>
  </v-flex>
 

</template>

<script>
export default {

    data: () => ({
      items1: [
        { title1: 'Sign-In' },
        { title1: 'Sign-Up' },
        
      ]
    })
    
}
</script>
<style>
 

</style>