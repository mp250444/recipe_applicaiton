<template>
  <v-app>
    <div id="app" app>
      <transition name="router-anim">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </v-app>
</template>

<script type="text/javascript">
import { eventHub } from "./main";
export default {
  data() {
    return {
      temporaryElement: null,
      counter: 0,
      currentElementLength: 0
    };
    //:key="$route.fullPath"
  },
  methods: {

    // scroll spy 
    handleScroll: function() {
      var elementArray = document.querySelectorAll(".animation");
      this.currentElementLength = elementArray.length;

      for (var i = 0; i < elementArray.length; i += 1) {
        var element = elementArray[i].getBoundingClientRect();
        var elementOffset = elementArray[i].offsetTop - element.height - 200;

        if (
          window.scrollY >= elementOffset &&
          window.scrollY <= elementOffset + element.height
        ) {
          this.temporaryElement = elementArray[i];
          eventHub.$emit("send1", this.temporaryElement);
        }
      }
    }
  },

  created: function() {
    window.addEventListener("scroll", this.handleScroll);
   
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.animation {
  position: relative;
}

.router-anim-enter-active {
  animation: coming 0.5s ease;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 0.5s ease;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}



</style>
