<template>
  <Dialog class="DialogConfirm" :open="open" alignTop>
    <template #default="{ close }">
      <div class="DialogConfirm__Body">
        <h2 class="DialogConfirm__Title">{{ title }}</h2>
        <slot :close="close" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog.vue';

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.DialogConfirm {
  --dialog-bg-color: rgba(0, 0, 0, 0.5);

  padding: calc(var(--space-64) * 2) 0;
}
.DialogConfirm__Title {
  font-size: var(--font-size-24);
  margin-bottom: var(--space-32);
  text-align: center;
}
.DialogConfirm__Body {
  max-width: 600px;
  text-align: center;
  border-radius: var(--border-radius);
  padding: var(--space-64);
  background-color: var(--color-white);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.2);
}
</style>
