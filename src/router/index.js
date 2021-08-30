import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostDetails from "../views/PostDetails.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PostList,
  },
  {
    path: "/posts/:id",
    name: "PostDetails",
    props:true,
    component: PostDetails,
  },
  {
    path: "/about",
    name: "About",   
    component:About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
