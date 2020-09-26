<template>

  
  <v-footer dark class="mt-5" id="f">
    <v-card class="flex" color="#793253" flat tile>
      <v-card-title>
        <strong  class="subheading colorFooterText">connect with us on social networks!</strong>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
          <v-icon size="24" color="#f7f7c8">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions  class="justify-center">
       <p class="colorFooterText"> &trade;2019 — </p>&nbsp; <strong class="subheading colorFooterText">All rights are reserved by Marko Protic</strong>
      </v-card-actions>
    </v-card>
  </v-footer>




</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
   
 
   
  }),

  

// https://travishorn.com/getting-browser-width-height-16ef95a9e444
  
};
</script>

<style>
 #f{
  
 position: relative;
 bottom: -52px;
 width: 100%;

 }

.colorFooterText{

   color:#f7f7c8; 
}


</style>
