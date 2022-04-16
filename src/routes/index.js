import VueRouter from "vue-router";
import Home from '@/pages/Home.vue'
import Trans from '@/pages/Trans.vue'
import Change from '@/pages/Change.vue'
import Detail from '@/pages/Detail.vue'

import goTo from "vuetify/lib/services/goto";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/trans",
    name: "Trans",
    component: Trans
  },
  {
    path: "/change",
    name: "change",
    component: Change
  },
  {
    path: "/detail/:code",
    name: "detail",
    component: Detail
  },
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes
})

export default router