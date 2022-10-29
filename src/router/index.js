import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

import Users from "../views/Users/index.vue";
import UserEdit from "../views/Users/edit.vue"
import UserAdd from "../views/Users/create.vue"

import Items from "../views/Products/index.vue";
import salom from "../views/Products/create.vue"
import ItemEdit from "../views/Products/edit.vue"
import ProductItem from "../views/ProductItem.vue";

import Customers from "../views/Customers/index.vue";
import CustomersAdd from "../views/Customers/create.vue";
import CustomersEdit from "../views/Customers/edit.vue";
import CustomersView from "../views/Customers/view.vue";

import Monitor from "../views/Manitor.vue"

import Orders from "../views/Orders/Orders.vue";
import OrdersAdd from "../views/Orders/OrdersAdd.vue";
import OrdersEdit from "../views/Orders/OrdersEdit.vue";
import OrdersView from "../views/Orders/OrdersView.vue";

import Settings from "../views/Settings.vue";
import Profil from "../views/Profil.vue"
import Login from "../views/MainPage/Login.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard, 
    },

    {
      path: "/customers",
      name: "customers",
      component: Customers,  
    },
    {
      path: "/customers/create",
      name: "customers.create",
      component: CustomersAdd,  
    },
    {
      path: "/customers/edit/:id",
      name: "customers.edit",
      component: CustomersEdit,  
    },
    {
      path: "/customers/view/:id",
      name: "customers.view",
      component: CustomersView,  
    },

    // Order Page
    {
      path: "/orders",
      name: "orders",
      component: Orders,  
    },
    {
      path: "/orders/create",
      name: "orders.create",
      component: OrdersAdd,  
    },
    {
      path: "/orders/edit/:id",
      name: "orders.edit",
      component: OrdersEdit,  
    },
    {
      path: "/orders/view/:id",
      name: "orders.view",
      component: OrdersView,  
    },


    {
      path:"/productitem",
      name:"productitem",
      component:ProductItem,
    },
    {
      path: "/",
      name: "home",
      component: Login,  
    },
    {
      path: "/monitor",
      name: "monitor",
      component: Monitor,  
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,  
    },

    // User page
    {
      path: "/users",
      name: "users",
      component: Users,  
    },
    {
      path: "/user/create",
      name: "user.create",
      component: UserAdd,  
    },
    {
      path: "/users/edit/:id",
      name: "users.edit",
      component: UserEdit,  
    },
    
    //
    {
      path: "/items",
      name: "items",
      component: Items,  
    },
    {
      path: "/item/create",
      name: "item.create",
      component: salom,  
    },
    {
      path: "/items/edit/:id",
      name: "items.edit",
      component: ItemEdit,  
    },

    {
      path:"/profil",
      name:"profil",
      component:Profil,
    },
   
    
  ],
});


export default router;