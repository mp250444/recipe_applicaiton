import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { gsap } from "gsap";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as firebase from "firebase/app";


Vue.use(Vuetify, {
  iconfont: "mdi"
});
export let eventHub = new Vue();

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAhwEG3gnVktXssS9oM3Tp7S8utRBd8GIo",
  authDomain: "recepieappproject.firebaseapp.com",
  databaseURL: "https://recepieappproject.firebaseio.com",
  projectId: "recepieappproject",
  storageBucket: "recepieappproject.appspot.com",
  messagingSenderId: "979237165566",
  appId: "1:979237165566:web:541b7266511c1b37e088af"
};
firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
