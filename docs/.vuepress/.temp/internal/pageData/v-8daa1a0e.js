export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://v1.vuepress.vuejs.org/hero.png",
    "tagline": null,
    "actionText": "Quick Start →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "Feature 1 Title",
        "details": "Feature 1 Description"
      },
      {
        "title": "Feature 2 Title",
        "details": "Feature 2 Description"
      },
      {
        "title": "Feature 3 Title",
        "details": "Feature 3 Description"
      }
    ],
    "footer": "Made by  with ❤️"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "contributors": [
      {
        "name": "Joshua Chen",
        "email": "jlchen@bethel.jw.org",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
