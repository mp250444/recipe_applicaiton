<template>
  <v-container class="contain1" id="er">
    <v-layout row>
      <v-flex xs12 sm10 md6 xl6 class="p1">
        <h2><slot></slot></h2>
        <blockquote class="blockquote text-sm-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Ipsum
        </blockquote>
      </v-flex>
      <v-flex xs12 sm10 md6 xl6 class="p2">
        <h2><slot></slot></h2>
        <blockquote class="blockquote text-sm-left">
          Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem
        </blockquote>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script type="text/javascript">
import { eventHub } from "../main";
import { gsap } from "gsap";
export default {
  data() {
    return {
      currentElement: null
    };
  },
  computed: {
    animate: function() {
      gsap.to("#er", 0.6, { opacity: 1 });
      gsap.from(".p1", 0.6, { y: -400, opacity: 0 });
      gsap.from(".p2", 0.6, { y: 400, opacity: 0 });
    }
  },
  mounted() {
    eventHub.$on("send1", data => {
      this.currentElement = data;
      if (this.currentElement == this.$el) {
        this.animate;
      }
    });
  }
};
</script>
<style>
.contain1 {
  position: relative;
  max-width: 1600px;
  line-height: 2;
  opacity: 0;
}
</style>
