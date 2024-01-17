import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index";
import Header from "./components/HeadCom";
import FoodRecipe from "./pages/FoodRecipe";
import NewFoodRecipe from "./pages/NewFoodRecipe";
import Home from "./pages/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/foodRecipe',
      name: 'foodRecipe',
      component: FoodRecipe
    },
    {
      path: '/newFoodRecipe',
      name: 'newFoodRecipe',
      component: NewFoodRecipe
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
