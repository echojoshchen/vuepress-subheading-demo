import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-de61115a",
    path: "/test/section-2.html",
    component: Vuepress,
    meta: { title: "Section 2" },
  },
  {
    path: "/test/section-2.md",
    redirect: "/test/section-2.html",
  },
]
