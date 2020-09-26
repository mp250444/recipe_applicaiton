<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    lazy
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-container fluid grid-list-md>
        <v-layout column align-center>
          <v-flex xs12 sm4 md6 xl6 class="mb-3">
            <h1>{{currentTitle}}</h1>
          </v-flex>

          <v-img
            :src="currentImage"
            aspect-ratio="2"
            max-width="700"
            class="setWidth"
          ></v-img>
        </v-layout>

        <v-container>
          <v-layout justify-center text-xs-center>
            <v-flex xs4 sm3 md2 xl1><h1>30</h1></v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs4 sm3 md2 xl1><h1>12</h1></v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs4 sm3 md2 xl1><h1>256</h1></v-flex>
          </v-layout>

          <v-layout justify-center text-xs-center>
            <v-flex xs4 sm3 md2 xl1><p>minutes</p></v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs4 sm3 md2 xl1><p>ingridients</p></v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs4 sm3 md2 xl1><p>calories</p></v-flex>
          </v-layout>

          <v-layout row wrap justify-center class="mt-3">
            <v-btn color="#793253" class="white--text" @click="scroll">Go to directions</v-btn>
          </v-layout>
        </v-container>

        <v-layout justify-center>
          <v-flex xs12 sm10 md6 xl5>
            <v-divider class="mt-5"></v-divider>
          </v-flex>
        </v-layout>

        <v-layout justify-center mt-5>
          <v-flex xs11 sm10 md6 xl5>
            <h3 class="mb-4">Desrecption</h3>
            <span
              >The perfect snack food for kids is equal parts super crunchy and
              salty, not too spicy, not too bland, bite-size, but also
              consumable by the fistful — all of which is why goldfish and their
              ilk are go-to snacks. Plus: there aren't too many healthy snack
              ideas quite like them. But there’s one (healthier! homemade!)
              snack-time winner waiting in the wings: roasted chickpeas.</span
            >
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>

        <v-layout justify-center>
          <v-flex xs12 sm10 md6 xl5>
            <v-divider class="mt-5"></v-divider>
          </v-flex>
        </v-layout>

        <v-layout row justify-center mt-5>
          <v-flex xs11 sm10 md6 xl5>
            <h3 class="mb-4">Ingredients</h3>
            <p>2 cups <b>chickpeas</b></p>
            <p>2 teaspoons <b>olive oil</b></p>
            <p>3/4 teaspoon <b>kosher salt</b></p>
            <p>1/16 teaspoon <b>smoked paprika</b></p>
            <p>1/16 teaspoon <b>garlic powder</b></p>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs12 sm10 md6 xl5>
            <v-divider class="mt-5"></v-divider>
          </v-flex>
        </v-layout>

        <v-layout justify-center mt-5 >
          <v-flex xs11 sm10 md6 xl5>
            <h3 class="mb-4" id="directions">Directions</h3>
            <b>STEP 1</b>
            <p>Preheat oven to 425º F</p>
            <b>STEP 2</b>
            <p>
              Pat dry chickpeas with a paper towel. They should be completely
              dry (and be sure to remove any loose skins)
            </p>
            <b>STEP 3</b>
            <p>
              Toss chickpeas with olive oil, add seasonings and toss again to
              coat
            </p>
            <b>STEP 4</b>
            <p>Spread chickpeas out in a single layer on a baking sheet</p>
            <b>STEP 5</b>
            <p>
              Bake for 15 minutes, toss well, then bake for another 15 minutes
            </p>
            <b>STEP 6</b>
            <p>
              Let cool before serving. They can be eaten warm or at room
              temperature. Store in an airtight container.
            </p>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-flex xs12 sm10 md6 xl5>
            <v-divider class="mt-5"></v-divider>
          </v-flex>
        </v-layout>

        <v-layout justify-center mt-5>
          <v-flex xs11 sm10 md6 xl5>
            <h3 class="mb-5">Nutrition</h3>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 class="mb-5 data-iterator-align">
            <data-iterator-item></data-iterator-item>
          </v-flex>
        </v-layout>

        <v-layout justify-end mr-3>
          <v-btn
            color="#793253"
            outline
            large
            icon
            top
            fixed
            @click="dialog = false;"
            class="mt-3"
          >
            <v-icon color="#793253">close</v-icon>
          </v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { eventHub } from "../main";
import menuItem from "../components/menu-item.vue";
import dataIterator from "../components/data-iterator-item.vue";

export default {
  data() {
    return {
      dialog: false,
      active: true,
      offsetTop: 0,
      currentImage:"",
      currentTitle:"",
    };
  },
  mounted() {
    eventHub.$on("dialog1", data => {
      this.dialog = data;
     
     
    });

     eventHub.$on("dialog2", data => {
      this.dialog = data;
     
   
    });

    eventHub.$on("getImage", data =>{
       this.currentImage = data[0];
        this.currentTitle = data[1];  
       console.log(data)

    });
    eventHub.$on("send_image_from_favorites", data =>{
       this.currentImage = data[0]; 
       this.currentTitle = data[1]; 
       console.log(data)

    });
  },

  methods: {
    scroll() {

      document.querySelector('#directions').scrollIntoView({ 
        behavior: 'smooth',
        block:'start',
          })

    }
  },

  components: {
    "menu-item": menuItem,
    "data-iterator-item": dataIterator
  }
};
</script>

<style scoped>

.setWidth {
  width: 100%;
  border-radius: 10px;
}
</style>
