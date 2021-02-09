import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export default [
  {
    name: "v-2cb3924d",
    path: "/test/intro-1.html",
    component: Vuepress,
    meta: { title: "Intro 1" },
  },
  {
    path: "/test/intro-1.md",
    redirect: "/test/intro-1.html",
  },
]
