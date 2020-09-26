<template>
  <div>
    <menu-item></menu-item>
    
    <carousel-item></carousel-item>
    <div>
      <text-item>Something about food</text-item>
      <text-item-second class="animation">Something else about food
      </text-item-second>
    </div>

    <div>
      <paralax-item class="animation"></paralax-item>
      <text-item-third class="animation"
        >Something else about food
      </text-item-third>
    </div>
    <footer-item></footer-item>
  </div>
</template>

<script type="text/javascript">
import menuItem from "../components/menu-item.vue";
import carouselItem from "../components/carousel-item.vue";
import textItem from "../components/text-item.vue";
import paralaxItem from "../components/paralax-item.vue";
import footerItem from "../components/footer-item.vue";
import textItemSecond from "../components/text-item-second.vue";
import textItemThird from "../components/text-item-third.vue";

export default {
  data() {
    return {
      temporaryElement: null,
      counter: 0,
      currentElementLength: 0
    };
  },
  components: {
    "menu-item": menuItem,
    "carousel-item": carouselItem,
    "text-item": textItem,
    "text-item-second": textItemSecond,
    "text-item-third": textItemThird,
    "paralax-item": paralaxItem,
    "footer-item": footerItem
  }
};
</script>

<style>
.animation {
  position: relative;
}
</style>
