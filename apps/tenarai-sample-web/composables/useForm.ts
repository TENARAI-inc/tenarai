import { useForm as useVVForm } from 'vee-validate';

type Prop = {
  validationSchema: object;
  initialValues: object;
};

export const useForm = (prop: Prop) => {
  const ctx = useVVForm({
    validationSchema: prop.validationSchema,
    initialValues: prop.initialValues,
  });

  provide('form', ctx);

  return ctx;
};
