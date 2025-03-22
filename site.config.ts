import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'Dream\'s Blog',
  url: '/',
  author: {
    avatar: 'https://avatars.githubusercontent.com/u/157796080?s=400&u=9b574f2e258b53ee18186d693ca4100575dd7591&v=4',
    name: '清梦',
  },
  search: {
    enable: true,
    type: 'fuse',
  },
  description: 'Dream\'s Notes',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-material-symbols-rss-feed-rounded',
      color: 'orange',
    },
    {
      name: '85256952',
      link: '--',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/QIngMengK',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=293486586',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/mao-mao-47-99-46',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1784222941?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'qingmeng063@gmail.com',
      icon: 'i-material-symbols-attach-email',
      color: '#8E71C1',
    },
    {
      name: 'Hairy',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],
  statistics: { enable: true },
  comment: { enable: true },
})
