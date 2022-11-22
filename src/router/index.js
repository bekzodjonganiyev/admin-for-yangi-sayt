import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

import Announcement from "../views/Announcement/index.vue";
import AnnouncementEdit from "../views/Announcement/edit.vue";
import AnnouncementAdd from "../views/Announcement/create.vue";
import AnnouncementView from "../views/Announcement/view.vue"

import Paper from "../views/paper/index.vue"

import Items from "../views/Kafedralar/index.vue";
import salom from "../views/Kafedralar/create.vue";
import ItemEdit from "../views/Kafedralar/edit.vue";
import ProductItem from "../views/ProductItem.vue";

import Customers from "../views/Faculties/index.vue";
import CustomersAdd from "../views/Faculties/create.vue";
import CustomersEdit from "../views/Faculties/edit.vue";
import CustomersView from "../views/Faculties/view.vue";

import Orders from "../views/Activities/Orders.vue";
import OrdersAdd from "../views/Activities/OrdersAdd.vue";
import OrdersEdit from "../views/Activities/OrdersEdit.vue";
import OrdersView from "../views/Activities/OrdersView.vue";

import Departments from "../views/Departments/index.vue"
import DepartmentsAdd from "../views/Departments/create.vue"
import DepartmentsEdit from "../views/Departments/edit.vue"
import DepartmentsView from "../views/Departments/view.vue"

import Syllabus from "../views/Syllabus/index.vue"
import SyllabusAdd from "../views/Syllabus/create.vue"

import Settings from "../views/Settings.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/MainPage/Login.vue";

import News from "../views/News/index.vue";
import NewsCreate from "../views/News/create.vue";
import NewsEdit from "../views/News/edit.vue";
import NewsView from "../views/News/view.vue"

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
      component: Dashboard,
    },
    {
      path: "/departments",
      name: "departments",
      component: Departments,
    },

    {
      path: "/departments/create",
      name: "departments.create",
      component: DepartmentsAdd,
    },

    {
      path: "/departments/edit/:id",
      name: "departments.edit",
      component: DepartmentsEdit,
    },

    {
      path: "/departments/view/:id",
      name: "departments.view",
      component: DepartmentsView,
    },

    {
      path: "/syllabus",
      name:"syllabus",
      component:Syllabus
    },

    {
      path:"/syllabus/create",
      name:"syllabus.create",
      component:SyllabusAdd
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
      path: "/users/create",
      name: "users.create",
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
      path: "/news/edit/:id",
      name: "news.edit",
      component: NewsEdit,
    },
    {
      path: "/news/view/:id",
      name: "news.view",
      component: NewsView,
    },
  ],
});

export default router;
