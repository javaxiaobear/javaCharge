module.exports = {
  title: 'Java 小熊',
  description: '放弃很容易，但坚持一定很酷！',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: './xiaobear.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/javaCharge/', // 这是部署到github相关的配置
  //页面滚动效果
  smoothScroll: true,
  markdown: {
    lineNumbers: true, // 代码块显示行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },
  themeConfig: {
    //代码复制
    copyCode: {
      showInMobile: true,
    },
    sidebar:{
      // docs文件夹下面的interview文件夹 文档中md文件 书写的位置(命名随意)
      '/interview/': [
        {
          title: 'Java基础',
          collapsed: true,
          sidebarDepth: 4,
          children: [
              ['javaBasics/overview.md','Java概述'],
              ['javaBasics/objectOriented.md','Java面向对象'],
              ['javaBasics/javaSE.md','JavaSE'],
              ['javaBasics/typeOfData.md','Java数据类型'],
              ['javaBasics/exception.md','Java异常'],
              ['javaBasics/collection.md','Java集合'],
              ['javaBasics/multithreading.md','Java多线程'],
              ['javaBasics/io.md','Java IO'],
              ['javaBasics/innerClass.md','Java内部类'],
          ]
        },
        {
          title: 'Java高级',
          collapsed: true,
          sidebarDepth: 4,
          children: [
            ['javaHighLevel/reflection.md','Java反射'],
          ]
        },
        {
          title: 'Java Web',
          collapsed: true,
          sidebarDepth: 4,
          children: []
        },
        {
          title: '数据库',
          collapsed: true,
          sidebarDepth: 4,
          children: []
        },
        {
          title: 'Java开发框架',
          collapsed: true,
          sidebarDepth: 4,
          children: [
            ['javaDevelopmentFramework/spring.md','spring'],
          ]
        },
      ],
    },

    nav:[
      { text: '首页', link: '/' },
      { text: '码不停题', link: '/algorithm/' },
      { text: '面试专栏', link: '/interview/' },
      { text: '学习笔记', link: 'https://yhx1001.github.io/xiaobear_docsify/#/' },
      { text: '关于', link: '/about/' },
    ]
  },
  plugins: [
      //进度条
    ['@vuepress/nprogress'],
      //复制代码
    ["@mr-hope/copy-code"],
      //返回顶部
    ['@vuepress/back-to-top']
    ['@vuepress/medium-zoom',{
      selector: ".page img",
      options: {
        margin: 16,
        background: "transparent",
        scrollOffset: 0
      }
    }]
  ]
};