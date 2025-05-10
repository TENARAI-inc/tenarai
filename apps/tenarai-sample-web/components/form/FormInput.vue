<template>
  <div
    class="Input"
    :class="{ '-optional': props.optional, '-hasError': hasError }"
  >
    <label :for="inputId" class="Label">
      {{ props.label }}
      <span v-if="props.optional" class="Optional">（任意）</span>
    </label>

    <p v-if="props.textarea">
      <textarea
        :id="inputId"
        v-model="value"
        :type="props.type"
        :placeholder="myPlaceholder"
      />
    </p>
    <p v-else>
      <input
        :id="inputId"
        v-model="value"
        :type="props.type"
        :placeholder="myPlaceholder"
      />
    </p>
    <!-- ErrorMessage -->
    <!-- <p v-if="errorMessage" class="ErrorMessage">{{ errorMessage }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  optional: {
    type: Boolean,
    default: false,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
});

const { value, meta } = useField(props.name, (value: string) => !!value);

const myPlaceholder = props.placeholder || props.label || '';
const inputId = computed(() => `form-item-${props.name}`);
const hasError = computed(() => meta.dirty && !meta.valid);
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.Input {
  --input-shadow: rgba(255, 200, 0, 0.2);

  width: 100%;

  &.-optional {
    input {
      /* box-shadow: none; */
      background-color: #f4f4f4;
    }
  }
  &.-hasError {
    input,
    textarea {
      box-shadow: 0 0 2px 2px var(--input-shadow);
      border: solid 1px var(--color-alert);
    }
  }
}

.Label {
  display: inline-block;
  font-size: 18px;
  padding: 0 0 calc(var(--unit) * 1.5);
}

input,
textarea {
  border: solid 1px #ccc;
  border-radius: 6px;
  padding: calc(var(--unit) * 1) calc(var(--unit) * 1.5);
  width: 100%;
  font-size: 16px;
  background-color: var(--color-input-bg);
  /* box-shadow: 0 0 2px 2px var(--input-shadow); */

  &:focus {
    outline: none;
  }
}

.Optional {
  font-size: 12px;
  color: #999;
}
</style>
