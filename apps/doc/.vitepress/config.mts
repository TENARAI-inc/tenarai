import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'tenarai-doc',
  description: 'tenarai how to',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'webアプリ一ヶ月制作（Nuxt）', link: '/one-month-develop' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: 'webアプリ一ヶ月制作（Nuxt）',
            link: '/one-month-develop',
            items: [
              {
                text: '第 1 週 基礎とコンポーネント',
                link: '/one-month-develop/week01',
                items: [
                  {
                    text: '基礎項目',
                    link: '/one-month-develop/week01/week01-01',
                  },
                  {
                    text: 'コンポーネント',
                    link: '/one-month-develop/week01/week01-02',
                  },
                ],
              },
              {
                text: '第 2 週 データ取得・送信と型',
                link: '/one-month-develop/week02',
                items: [
                  {
                    text: 'データ取得と送信',
                    link: '/one-month-develop/week02/week02-01',
                  },
                  {
                    text: '型とtypescript',
                    link: '/one-month-develop/week02/week02-02',
                  },
                  {
                    text: 'cssとレスポンシブ',
                    link: '/one-month-develop/week02/week02-03',
                  },
                ],
              },
              {
                text: '第 3 週 unit テストと integration テスト',
                link: '/one-month-develop/week03',
                items: [
                  {
                    text: 'unit テスト',
                    link: '/one-month-develop/week03/week03-01',
                  },
                  {
                    text: 'integration テスト',
                    link: '/one-month-develop/week03/week03-02',
                  },
                ],
              },
              {
                text: '第 4 週 開発の基本手順',
                link: '/one-month-develop/week04',
                items: [
                  {
                    text: '開発の手順',
                    link: '/one-month-develop/week04/week04-01',
                  },
                  {
                    text: 'Tenarai-web への機能追加',
                    link: '/one-month-develop/week04/week04-02',
                  },
                  {
                    text: 'QA(品質保証) について',
                    link: '/one-month-develop/week04/week04-03',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  head: [
    [
      'meta',
      {
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  ],
});
