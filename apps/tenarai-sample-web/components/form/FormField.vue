<template>
  <fieldset :class="{ '-full': props.full, '-break': props.break }">
    <legend v-if="props.title">
      {{ props.title }}
      <slot name="headerOption" />
    </legend>

    <div class="Fields">
      <slot />
    </div>

    <div v-if="fields.length > 0" class="Errors">
      <ErrorMessage
        v-for="f in fields"
        :key="`eror-${f}`"
        :name="f"
        as="p"
        class="Errors__Message"
      />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  field: {
    type: [String, Array],
    required: true,
  },
  full: {
    type: Boolean,
    default: false,
  },
  break: {
    type: Boolean,
    default: false,
  },
});

const fields = Array.isArray(props.field)
  ? (props.field as string[])
  : ([props.field] as string[]);
</script>

<style scoped>
@import '@/assets/css/_vue.css';

fieldset {
  padding: var(--space-16) 0 0;
  &.-full {
    .Fields > * {
      flex-grow: 1;
    }
  }
  &.-break {
    .Fields {
      display: block;
    }
    .Fields > * + * {
      margin-left: 0;
    }
  }
}

legend {
  display: inline-block;
  font-size: var(--space-18);
  padding: var(--space-16) 0 0;
}

.Fields {
  display: flex;
}

.Fields > * + * {
  margin-left: var(--space-24);
}

.Errors {
  padding: var(--space-8) 0 0;
}

.Errors__Message {
  color: var(--color-alert);
}
</style>
