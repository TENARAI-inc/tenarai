<template>
  <div class="loader"></div>
</template>

<style lang="css" scoped>
  .loader {
    --border-width: 2px;
    --color1: transparent;
    --color2: #666;

    border: var(--border-width) solid var(--color2);
    border-radius: 50%;
    border-top: var(--border-width) solid var(--color1);
    border-bottom: var(--border-width) solid var(--color1);
    width: var(--loading-size);
    height: var(--loading-size);
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
