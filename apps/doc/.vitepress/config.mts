import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'tenarai-doc',
  description: 'tenarai how to',
  base: '/tenarai/',
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
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
                    items: [
                      {
                        text: '変数をつかってテキストを表示する ',
                        link: '/one-month-develop/week01/week01-01#変数をつかってテキストを表示する',
                      },
                      {
                        text: '関数',
                        link: '/one-month-develop/week01/week01-01#関数',
                      },
                      {
                        text: '配列',
                        link: '/one-month-develop/week01/week01-01#配列',
                      },
                      {
                        text: 'オブジェクトとjson',
                        link: '/one-month-develop/week01/week01-01#オブジェクトと-json',
                      },
                      {
                        text: '配列とリスト表示',
                        link: '/one-month-develop/week01/week01-01#配列とリスト表示',
                      },
                    ],
                  },
                  {
                    text: 'コンポーネント',
                    link: '/one-month-develop/week01/week01-02',
                    items: [
                      {
                        text: 'シングルファイルコンポーネント ',
                        link: '/one-month-develop/week01/week01-02#シングルファイルコンポーネント',
                      },
                      {
                        text: 'コンポーネントにプロパティをセットする',
                        link: '/one-month-develop/week01/week01-02#コンポーネントにプロパティをセットする',
                      },
                      {
                        text: 'コンポーネントからイベントをもらう',
                        link: '/one-month-develop/week01/week01-02#コンポーネントからイベントをもらう',
                      },
                      {
                        text: '共通関数を用意して使う',
                        link: '/one-month-develop/week01/week01-02#共通関数を用意して使う',
                      },
                    ],
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
                    items: [
                      {
                        text: 'REST api',
                      },
                      {
                        text: 'fetch を利用したデータ取得',
                      },
                      {
                        text: 'http ステータスコード',
                      },
                      {
                        text: '同期処理と非同期処理',
                      },
                      {
                        text: 'プロミスの活用',
                      },
                    ],
                  },
                  {
                    text: '型とtypescript',
                    link: '/one-month-develop/week02/week02-02',
                    items: [
                      {
                        text: 'typescript を使ってみる',
                      },
                      {
                        text: 'vue での typescirpt の利用',
                      },
                      {
                        text: '例',
                      },
                    ],
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
