import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

import Announcement from "../views/Announcement/index.vue";
import AnnouncementEdit from "../views/Announcement/edit.vue";
import AnnouncementAdd from "../views/Announcement/create.vue";
import AnnouncementView from "../views/Announcement/view.vue"

import Paper from "../views/paper/index.vue"
import Items from "../views/Products/index.vue";
import salom from "../views/Products/create.vue";
import ItemEdit from "../views/Products/edit.vue";
import ProductItem from "../views/ProductItem.vue";

import Customers from "../views/Customers/index.vue";
import CustomersAdd from "../views/Customers/create.vue";
import CustomersEdit from "../views/Customers/edit.vue";
import CustomersView from "../views/Customers/view.vue";

import Monitor from "../views/Manitor.vue";

import Orders from "../views/Orders/Orders.vue";
import OrdersAdd from "../views/Orders/OrdersAdd.vue";
import OrdersEdit from "../views/Orders/OrdersEdit.vue";
import OrdersView from "../views/Orders/OrdersView.vue";

import Settings from "../views/Settings.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/MainPage/Login.vue";

import News from "../views/News/index.vue";
import NewsCreate from "../views/News/create.vue";
import NewsEdit from "../views/News/edit.vue";

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
      path: "/productitem",
      name: "productitem",
      component: ProductItem,
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

    // Announcement page
    {
      path: "/users",
      name: "users",
      component: Announcement,
    },
    {
      path: "/user/create",
      name: "user.create",
      component: AnnouncementAdd,
    },
    {
      path: "/user/view/:id",
      name: "user.view",
      component: AnnouncementView,
    },
    {
      path: "/users/edit/:id",
      name: "users.edit",
      component: AnnouncementEdit,
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
      path: "/profil",
      name: "profil",
      component: Profil,
    },
    // paper
    {
      path: "/paper",
      name: "paper",
      component: Paper,
    },

    // NEWS
    {
      path: "/news",
      name: "news",
      component: News,
    },

    {
      path: "/news/create",
      name: "news.create",
      component: NewsCreate,
    },

    {
      path: "/news/edit",
      name: "news.edit",
      component: NewsEdit,
    },
  ],
});

export default router;
