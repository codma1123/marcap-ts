// 첫번째 버전
import VueRouter from "vue-router";
import Home from '@/pages/Home.vue'
import Trans from '@/pages/Trans.vue'
import Change from '@/pages/Change.vue'
import Detail from '@/pages/Detail.vue'
import Rank from '@/pages/Rank.vue'

// 두번째 버전 
import HomeV2 from '@/v2/pages/HomeV2.vue'
import DetailV2 from '@/v2/pages/DetailV2.vue'
import RankV2 from '@/v2/pages/RankV2.vue'

import goTo from "vuetify/lib/services/goto";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/trans",
  //   name: "Trans",
  //   component: Trans
  // },
  // {
  //   path: "/change",
  //   name: "change",
  //   component: Change
  // },
  // {
  //   path: "/detail/:code",
  //   name: "detail",
  //   component: Detail
  // },
  // {
  //   path: "/rank",
  //   name: "rank",
  //   component: Rank
  // },
  {
    path: "/",
    name: "home",
    component: HomeV2
  },
  {
    path: "/detail/:title",
    name: "detail",
    component: DetailV2
  },
  {
    path: "/rank",
    name: "rank",
    component: RankV2
  }
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    setTimeout(() => {
      let scrollTo = 0
      if (to.hash) {
        scrollTo = to.hash
      } else if (savedPosition) {
        scrollTo = savedPosition.y
      }
      return goTo(scrollTo)
    }, 10)
  },
  routes
})

export default router