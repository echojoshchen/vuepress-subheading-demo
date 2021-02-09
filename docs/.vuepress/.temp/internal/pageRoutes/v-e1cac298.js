import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-e1cac298",
    path: "/test/section-1.html",
    component: Vuepress,
    meta: { title: "Section 1" },
  },
  {
    path: "/test/section-1.md",
    redirect: "/test/section-1.html",
  },
]
