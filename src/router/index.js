import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/auth";
import User from "../views/user";
import Admin from "../views/admin";
import ErrorPage from "../views/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
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
    name: "404",
    component: ErrorPage,
  },
  /*{
    path: "/",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue"),
  },*/
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
