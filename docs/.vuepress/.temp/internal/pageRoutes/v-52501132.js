import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-52501132",
    path: "/test/sections.html",
    component: Vuepress,
    meta: { title: "Sections" },
  },
  {
    path: "/test/sections.md",
    redirect: "/test/sections.html",
  },
]
