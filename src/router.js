import Vue from "vue";
import Router from "vue-router";
// import App from "./App.vue";
import Recepies from "./views/recepies.vue";
import Home from './views/home.vue'
import Favorites from "./views/favorites.vue";
import Contacts from "./views/contacts.vue";
// import menuItem from "./components/menu-item.vue";
import signIn from './views/sign-in.vue';
import signUp from './views/sign-up.vue';
Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      alias: '/home-one'
    },
    {
      path: "/recepies",
      name: "Recepies",
      component: Recepies,

    },
    {
      path: "/favorites",
      name: "Favorites",
      component: Favorites
    },
    {
      path: "/contacts",
      name: "Contact",
      component: Contacts
    },
    {
     path:"/views/sign-in",
     name: "Sign-In",
     component:signIn
    },

    {
      path:"/views/sign-up",
      name: "Sign-Up",
      component:signUp
  } 
  ]
});
