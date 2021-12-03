import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth";
import Admin from "../views/Admin";
import ErrorPage from "../views/Error";

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
    meta: { layout: "user" },
    component: () => import("../views/User.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: { layout: "admin" },
    component: Admin,
  },
  {
    path: "/*",
    name: "error",
    meta: { layout: "error" },
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
