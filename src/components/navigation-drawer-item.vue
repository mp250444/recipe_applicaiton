<template>
  <div>
    <v-navigation-drawer
      fixed
      v-model="activateDrawer"
      class="hidden-md-and-up"
    >
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.id" @click="">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { eventHub } from "../main";
export default {
  data() {
    return {
      items: [
        { title: "Home", id: 1 },
        { title: "Recepies", id: 2 },
        { title: "Add Recepies", id: 3 },
        { title: "Contact", id: 4 }
      ],
      activateDrawer: false
    };
  },
  methods: {},
  created() {
    eventHub.$on("send-data", data => {
      this.activateDrawer = data;
    });
  }
};
</script>

<style></style>
