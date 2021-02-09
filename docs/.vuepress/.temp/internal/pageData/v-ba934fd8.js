export const data = {
  "key": "v-ba934fd8",
  "path": "/config/",
  "title": "Config",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "foo",
      "slug": "foo",
      "children": []
    },
    {
      "level": 2,
      "title": "bar",
      "slug": "bar",
      "children": []
    }
  ],
  "filePathRelative": "config/README.md",
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
