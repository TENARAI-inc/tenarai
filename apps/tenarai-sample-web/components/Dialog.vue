<template>
  <Transition name="fade">
    <dialog
      v-if="openFlg"
      class="Dialog"
      :class="{ '-alert': alert, '-alignTop': alignTop }"
      open
    >
      <div class="Dialog__Body">
        <slot :close="close" />
      </div>
    </dialog>
  </Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { addHtmlClass, removeHtmlClass } from '@/utils/app';
import { useKeyDown } from '@/composables/useKeyDown';

const emit = defineEmits(['close']);
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  alert: {
    type: Boolean,
    default: false,
  },
  alignTop: {
    type: Boolean,
    default: false,
  },
});
const openFlg = ref(false);
const close = () => {
  emit('close');
};

useKeyDown({
  onEscape: () => {
    close();
  },
});

watch(props, (p) => {
  openFlg.value = p.open;
  if (openFlg.value) {
    addHtmlClass('-noscroll');
  } else {
    removeHtmlClass('-noscroll');
  }
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.Dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-dialog);
  width: 100svw;
  height: 100svh;
  background-color: var(--dialog-bg-color);

  border: none;

  &.-alert {
    background-color: rgba(0, 0, 0, 0.4);

    .ButtonClose {
      display: none;
    }
  }
  &.-alignTop {
    align-items: flex-start;
  }
}
.Dialog__Head {
  margin-bottom: calc(var(--unit) * 1);
}
.Dialog__Body {
  width: 80%;
  max-width: 600px;
}
.ButtonClose {
  background-color: transparent;
}

@media (--tablet) {
  .Dialog {
    margin: 0 auto;
  }
}
</style>
