<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const og = {
  title: 'Tenarai Sample Web',
  description:
    'Tenarai Sample Webは、TenaraiのサンプルWebサイトです。Nuxt3を使用して作成されています。',
  image: 'https://sc-aegis.netlify.app/imgs/og/main.png',
  imageWidth: '2500',
  imageHeight: '1330',
  url: 'https://tenarai-sample-web.vercel.app',
  siteName: 'Tenarai Sample Web',
  type: 'website',
};

useHead({
  title: og.title,
  meta: [
    { name: 'title', content: og.title },
    { name: 'description', content: og.description },
    { property: 'og:image', content: og.image },
    { property: 'og:image:width', content: og.imageWidth },
    { property: 'og:image:height', content: og.imageHeight },
    { property: 'og:url', content: og.url },
    { property: 'og:site_name', content: og.siteName },
    { property: 'og:type', content: og.type },
    // 開発用
    { name: 'robots', content: 'noindex, nofollow' },
  ],
  link: [{ rel: 'canonical', href: 'https://tenarai-sample-web.vercel.app' }],
});
</script>
