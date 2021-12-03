import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/auth";
import User from "../views/user";
import Admin from "../views/admin";
import ErrorPage from "../views/error";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "auth",
    component: Auth,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/*",
    name: "error",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
