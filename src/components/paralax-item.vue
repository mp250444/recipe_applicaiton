<template>
  <div id="paralax">
    <v-parallax height="600" src="../images/36-min.jpg">
      <v-layout align-center justify-center row wrap>
        <v-flex xs9 sm6 md4 lg2 xl2  class="myClass1">
          <v-btn color="#f6f6dd" large to="/views/favorites">Search your Favorite recepies</v-btn>
        </v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
import { eventHub } from "../main";
import { gsap } from "gsap";
export default {
  data() {
    return {
      currentElement: null
    };
  },

  computed: {
    //animation settings
    animate: function() {
      gsap.to(this.$el, 0.7, { opacity: 1, delay: 0.4 });
      gsap.from(".myClass1", 0.5, { x: -1200, opacity: 0, delay: 1 });
      // TweenMax.from(".myClass2", 0.5, { x: +1200, opacity: 0, delay: 0.9 });
    }
  },
  mounted() {
    // notifyng the conponent that the element is in range of the scroll
    eventHub.$on("send1", data => {
      this.currentElement = data;
      if (this.currentElement == this.$el) {
        this.animate;
      }
    });
  }
};
</script>

<style scoped>
#paralax {
  opacity: 0;
  max-height: 700;
}
</style>
