<template>
  <v-container>
    <v-data-iterator
      :items="items"
      content-tag="v-layout"
      row
      wrap
      class="centered"
      hide-actions
    >
      <template v-slot:item="props">
        <v-layout justify-center>
          <v-flex xs12 sm6 md4 lg3>
            <v-card>
              <v-card-title>
                <h4>{{ props.item.name }}</h4>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>Calories:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.fat
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Calories:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.calories
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Fat:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.fat
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Carbs:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.carbs
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Protein:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.protein
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Sodium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.sodium
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Calcium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.calcium
                  }}</v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>Iron:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.iron
                  }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        }
      ]
    };
  }
};
</script>

<style scoped>
.centered {
  display: block;
  justify-content: center;
}
</style>
