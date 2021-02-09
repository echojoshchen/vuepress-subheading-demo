const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    sidebar: [
      // SidebarItem
      {
        text: 'Config',
        link: '/config/',
      },
      // SidebarGroup
      {
        isGroup: true,
        text: 'Test',
        children: [
          '/test/intro-1.md',
          '/test/intro-2.md',
          {
            isGroup: true,
            text: 'Sections',
            children: [
              {
                isGroup: true,
                text: 'Section 1',
                link: '/test/section-1.md',
                children: [
                    '/test/section-1-1.md',
                    '/test/section-1-2.md'
                ]
              },
              {
                isGroup: true,
                text: 'Section 2',
                link: `/test/section-2.md`,
                children: [
                    '/test/section-2-1.md',
                    '/test/section-2-2.md',
                ]
              }
            ]
          },
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  ]
}
