<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    loading="lazy"
    class="Img"
    :class="klass"
    @load="onLoad"
  />
</template>

<script setup lang="ts">
const klass = ref<Record<string, boolean>>({});
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const onLoad = () => {
  klass.value = {
    '-loaded': true,
  };
};
</script>

<style lang="css" scoped></style>
