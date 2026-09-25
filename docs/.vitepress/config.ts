import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'MU-UI Pro',
  description: '基于 Vue 3 的 PC 端组件库',
  lang: 'zh-CN',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  },

  markdown: {
    config(md) {
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const raw = fence(tokens, idx, options, env, self);
        const token = tokens[idx];
        const lang = token.info?.trim().split(/\s+/)[0] || '';
        return `<CollapseCode lang="${lang}">\n${raw}\n</CollapseCode>`;
      };
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theme' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Cell 单元格', link: '/components/cell' },
            { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
            { text: 'Icon 图标', link: '/components/icon' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/yeWei92/mu-ui-pro-vue3' }],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 ty-mt'
    }
  }
});
