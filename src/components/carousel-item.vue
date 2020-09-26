<template>
  <v-carousel class="pos" height="850" interval="3000">
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "../images/7-min.jpg"
        },
        {
          src: "../images/21-min.jpg"
        },
        {
          src: "../images/33-min.jpg"
        },
        {
          src: "../images/15 copy2-min.jpg"
        },
        {
          src: "../images/17-min.jpg"
        },
        {
          src: "../images/22-min.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
