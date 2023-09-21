import { defineUserConfig } from 'vuepress'

import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hank X',
  description: "Hank X's Blog",
  theme: recoTheme,
  navbar: [
    { text: 'Home', link: '/', icon: 'reco-home' },
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    { text: 'GitHub', link: 'https://github.com/hankxdev', icon: 'reco-github' }
  ],
})
