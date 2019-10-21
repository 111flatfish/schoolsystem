import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from "../router/index/index"

Vue.use(VueRouter)

const routes = [
    indexRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
