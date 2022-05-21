import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Home from '../views/Homeviews.vue'
import Administracion from '../views/Administracionviews.vue'
import Editar from '../views/Editviews.vue'
import Opiniones from '../views/Opinionviews.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    name: "Homeviews",
    component: Home
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/administracion",
    name: "Administracionviews",
    component: Administracion
  },
  {
    path: "/editar/:id",
    name: "Editviews",
    props: true,
    component: Editar
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/Opiniones",
    name: "Opinionviews",
    component: Opiniones
  },
  {
    path: "/404",
    name: "NotFoundviews",
    component: ()=>import("../views/NotFoundviews.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404"
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
