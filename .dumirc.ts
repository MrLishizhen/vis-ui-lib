import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',//配置输出路径
  favicons:['/favicon.png'],//配置ico
  themeConfig: {
    name: '',
    logo:"/favicon.png",//配置logo
    footer:false,//页脚
    prefersColor:{ default: 'auto' ,switch:false },
    nav:[
      { title: '组件', link: '/components' }
    ],
  },

});
