<template>
  <button
    :disabled="props.disabled"
    class="Button"
    :class="{
      '-color': props.color,
      '-disabled': props.disabled,
      '-secondary': props.secondary,
      '-loading': props.loading,
    }"
    @click.stop="$event"
  >
    <Loading v-if="loading" class="Button__Loading" />
    <template v-else>
      {{ props.label }}
    </template>
  </button>
</template>

<script setup lang="ts">
import Loading from '@/components/Loading.vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.Button {
  --loading-size: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--button-width);
  height: var(--button-height);
  color: var(--color-dark);
  background-color: white;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--border-radius);
  border: solid 1px var(--color-gray);
  cursor: pointer;
  line-height: 1;

  &.-color {
    color: var(--color-action);
    border: solid 1px var(--color-action);
  }
  &.-disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &.-secondary {
    border: solid 1px var(--color-base);
    color: var(--color-base);
    background-color: white;
  }
  &.-loading {
    pointer-events: none;
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }
  &:hover {
    opacity: 0.9;
  }
}

.Button__Loading {
  margin-left: auto;
  margin-right: auto;
}
</style>
