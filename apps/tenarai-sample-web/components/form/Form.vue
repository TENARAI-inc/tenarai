<template>
  <form>
    <slot :errors="errors" :valid="valid" :form-data="formData" />
  </form>
</template>

<script setup lang="ts" generic="T">
import { defineExpose } from 'vue';
import type { PropType } from 'vue';
import type { FormContext } from 'vee-validate';
import type { FormSchema } from '@/types/form';
import { useForm } from '@/composables/useForm';

const props = defineProps({
  formSchema: {
    type: Object as PropType<FormSchema>,
    required: true,
  },
});

/**
 * { key: validation }
 */
const getValidationSchema = (formSchema: FormSchema) => {
  const ret: Record<string, string> = {};
  for (const [key, data] of Object.entries(formSchema)) {
    ret[key] = data.validation;
  }
  return ret;
};

/**
 * { key: value }
 */
const getInitialValues = (formSchema: FormSchema) => {
  const ret: Record<string, string | number | boolean | undefined> = {};
  for (const [key, data] of Object.entries(formSchema)) {
    ret[key] = data.value;
  }
  return ret;
};

const validationSchema = getValidationSchema(props.formSchema);
const initialValues = getInitialValues(props.formSchema);

const form = useForm({
  validationSchema: validationSchema,
  initialValues,
}) as FormContext;

const { errors, values, meta } = form;
const valid = computed(() => {
  return meta.value.valid && meta.value.dirty;
});

/**
 * formSchemaにvalueをセットして返却
 */
const formData = computed(() => {
  const ret: FormSchema = { ...props.formSchema };
  for (const [key] of Object.entries(props.formSchema)) {
    ret[key].value = values[key];
  }
  return ret;
});

defineExpose({
  form,
});
</script>

<style scoped>
@import '@/assets/css/_vue.css';
</style>
