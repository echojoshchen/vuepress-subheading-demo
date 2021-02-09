export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Vuepress Docs Boilerplate",
  "description": "",
  "head": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ]
  ],
  "locales": {},
  "themeConfig": {
    "repo": "",
    "editLinks": false,
    "editLinkText": "",
    "lastUpdated": false,
    "sidebar": [
      {
        "text": "Config",
        "link": "/config/"
      },
      {
        "isGroup": true,
        "text": "Test",
        "children": [
          "/test/intro-1.md",
          "/test/intro-2.md",
          {
            "isGroup": true,
            "text": "Sections",
            "children": [
              {
                "isGroup": true,
                "text": "Section 1",
                "link": "/test/section-1.md",
                "children": [
                  "/test/section-1-1.md",
                  "/test/section-1-2.md"
                ]
              },
              {
                "isGroup": true,
                "text": "Section 2",
                "link": "/test/section-2.md",
                "children": [
                  "/test/section-2-1.md",
                  "/test/section-2-2.md"
                ]
              }
            ]
          }
        ]
      }
    ],
    "locales": {
      "/": {
        "selectLanguageName": "English",
        "danger": "WARNING"
      }
    },
    "navbar": [],
    "logo": null,
    "selectLanguageText": "Languages",
    "selectLanguageAriaLabel": "Select language",
    "editLink": true,
    "lastUpdatedText": "Last Updated",
    "contributors": true,
    "contributorsText": "Contributors",
    "notFound": [
      "There's nothing here.",
      "How did we get here?",
      "That's a Four-Oh-Four.",
      "Looks like we've got some broken links."
    ],
    "backToHome": "Take me home",
    "openInNewWindow": "open in new window"
  }
}
