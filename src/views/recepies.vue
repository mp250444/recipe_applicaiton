<template>
  <div>
    <div>
      <menu-item></menu-item>
    </div>

    <recepie-content></recepie-content>
   
    <dialog-item></dialog-item>

    <footer-item></footer-item>
  </div>
</template>

<script>
import menuItem from "../components/menu-item.vue";
import recepieContent from "../components/recepie-content.vue";
import footerItem from "../components/footer-item.vue";
import dialogItem from "../components/dialog-item.vue";
import pagnationItem from '@/components/pagnation.vue';
import { eventHub } from "../main";
export default {
  data() {
    return {
      temp_array:[],
      page:4,
    };
  },
  components: {
    "menu-item": menuItem,
    "recepie-content": recepieContent,
    "footer-item": footerItem,
    "dialog-item": dialogItem,
    "pagnation-item":pagnationItem
  },

  methods: {
     sending() {
      
        
     }
  },
  mounted () {
     eventHub.$on('favoritesA', data=> {
            
           this.temp_array = data;
          //  console.log(this.temp_array) 
          eventHub.$emit('fav', this.temp_array)          
      })
     
     
              
  },
 
};
</script>

<style>
.nja {
  position: relative;
  display: block;
  width: 200px;
  height: 50px;
}

.fade-item {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-leave-active {
  position: absolute;
}

.hoverOverCards:hover {
  box-shadow: 0px 0px 30px grey;
}
</style>
