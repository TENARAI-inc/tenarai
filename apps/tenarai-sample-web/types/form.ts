export type FormItem = {
  label: string;
  value: string | number | boolean;
};

export type KeyValue = {
  label: string;
  disp: string | number | boolean | undefined;
};

export type FormSchema = Record<
  string,
  { validation: string; label: string; value?: string | boolean }
>;

export enum FormViewType {
  INPUT = 'INPUT',
  CONFIRM = 'CONFIRM',
  DONE = 'DONE',
}
