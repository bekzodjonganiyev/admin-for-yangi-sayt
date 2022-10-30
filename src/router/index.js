import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

import Announcement from "../views/Announcement/index.vue";
import AnnouncementEdit from "../views/Announcement/edit.vue";
import AnnouncementAdd from "../views/Announcement/create.vue";

import Paper from "../views/paper/index.vue"
import Items from "../views/Products/index.vue";
import salom from "../views/Products/create.vue";
import ItemEdit from "../views/Products/edit.vue";
import ProductItem from "../views/ProductItem.vue";

import Faculties from "../views/Faculties/index.vue";
import FacultiesAdd from "../views/Faculties/create.vue";
import FacultiesEdit from "../views/Faculties/edit.vue";
import FacultiesView from "../views/Faculties/view.vue";

import Monitor from "../views/Manitor.vue";

import Actions from "../views/Actions/Orders.vue";
import ActionsAdd from "../views/Actions/OrdersAdd.vue";
import ActionsEdit from "../views/Actions/OrdersEdit.vue";
import ActionsView from "../views/Actions/OrdersView.vue";

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
      path: "/faculties",
      name: "faculties",
      component: Faculties,
    },
    {
      path: "/faculties/create",
      name: "faculties.create",
      component: FacultiesAdd,
    },
    {
      path: "/faculties/edit/:id",
      name: "faculties.edit",
      component: FacultiesEdit,
    },
    {
      path: "/faculties/view/:id",
      name: "faculties.view",
      component: FacultiesView,
    },

    // Order Page
    {
      path: "/actions",
      name: "actions",
      component: Actions,
    },
    {
      path: "/actions/create",
      name: "actions.create",
      component: ActionsAdd,
    },
    {
      path: "/actions/edit/:id",
      name: "actions.edit",
      component: ActionsEdit,
    },
    {
      path: "/actions/view/:id",
      name: "actions.view",
      component: ActionsView,
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
