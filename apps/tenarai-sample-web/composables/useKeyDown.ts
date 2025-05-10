type Prop = {
  onEscape?: () => void;
};

export const useKeyDown = (prop: Prop) => {
  const isOpen = ref(false);
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (prop.onEscape) prop.onEscape();
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', onKeyDown);
  });
  onUnmounted(() => {
    document.removeEventListener('keydown', onKeyDown);
  });

  return { isOpen, onKeyDown };
};
