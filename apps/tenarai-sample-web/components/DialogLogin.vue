<template>
  <Dialog class="DialogLogin" :open="open" alignTop>
    <template #default="{ close }">
      <h2 class="DialogLogin__Title">ログイン</h2>
      <div class="DialogLogin__Body">
        <Form
          v-slot="{ valid, formData }"
          class="Form"
          :form-schema="formSchema"
        >
          <!-- メールアドレス -->
          <FormField :field="['mail', 'password']">
            <FormInput name="mail" label="メールアドレス" />
            <FormInput name="password" label="パスワード" type="password" />
          </FormField>

          <div class="DialogLogin__Bottom">
            <Button
              :label="`ログイン`"
              :disabled="!valid"
              :loading="isLoading"
              color
              @click.prevent.stop="() => submit(formData, close)"
            />
          </div>
        </Form>
      </div>
      <button class="Dialog__Close" @click="close">
        <IconClose />
        close
      </button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog.vue';
import Form from '@/components/form/Form.vue';
import FormField from '@/components/form/FormField.vue';
import FormInput from '@/components/form/FormInput.vue';
import IconClose from '@/components/icons/IconClose.vue';
import { wait } from '@/utils/app';
import type { FormSchema } from '@/types/form';

const emit = defineEmits(['login']);
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});
const isLoading = ref(false);

const formSchema: FormSchema = {
  mail: {
    validation: 'required|mail',
    label: 'メールアドレス ',
  },
  password: {
    validation: 'required|max:50|password',
    label: 'パスワード ',
  },
};

formSchema.mail.value = 'dummy@dummy.com';

const submit = async (_formData: FormData, close: Function) => {
  isLoading.value = true;
  await wait(2000);
  isLoading.value = false;
  emit('login', true);
  close();
};
</script>

<style scoped>
@import '@/assets/css/_vue.css';

.DialogLogin {
  padding: calc(var(--space-64) * 2) 0;
}
.DialogLogin__Title {
  font-size: var(--font-size-28);
  margin-bottom: var(--space-64);
  text-align: center;
}
.Dialog__Body {
  width: 80%;
  max-width: 600px;
  text-align: center;
}
.DialogLogin__Bottom {
  margin-top: var(--space-64);
  text-align: center;
}
.Dialog__Close {
  display: flex;
  align-items: center;
  line-height: 1;

  position: absolute;
  top: var(--space-32);
  left: var(--space-32);
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: var(--font-size-18);
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }

  svg {
    margin-right: var(--space-4);
  }
}

@media (--tablet) {
  .Dialog {
    margin: 0 auto;
  }
}
</style>
