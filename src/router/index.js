import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from "../router/index/index"
import majorRouter from "../router/major"
import teacherRouter from "../router/teacher"
import guideRouter from "../router/guide"
import newsRouter from "../router/news"
import articleRouter from "../router/article"
import achievementRouter from "../router/achievement"
import messageRouter from "../router/message"
import aboutRouter from "../router/about"

Vue.use(VueRouter)

const routes = [
    indexRouter,
    majorRouter,
    teacherRouter,
    guideRouter,
    newsRouter,
    articleRouter,
    achievementRouter,
    messageRouter,
    aboutRouter,
    {
        path:"/test",
        component:()=>import("../views/about/test.vue")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
