import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from "../router/index/index"
import majorRouter from "../router/major"

Vue.use(VueRouter)

const routes = [
    indexRouter,
    majorRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
