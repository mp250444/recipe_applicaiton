<template>
    <div class="text-xs-center">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn small  color="white" v-on="on">Sign-out</v-btn> 
        </template>

         <v-list>
          <v-list-tile v-for="(item,index) in items" :key="index">
            
          <v-list-tile-title>{{item.title1}}</v-list-tile-title>
          </v-list-tile>  
        </v-list>   
      </v-menu>   
    </div>
</template>

<script>
export default {

    data: () => ({
      items: [
        { title1: 'Sign-out' },
      ]
    })
    
}
</script>
<style>

</style>