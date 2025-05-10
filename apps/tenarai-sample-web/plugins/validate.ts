import { configure, defineRule } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin(() => {
  /**
   * defineRule
   */
  defineRule('required', rules.required);
  defineRule('mail', rules.email);
  defineRule('max', rules.max);
  defineRule('min', rules.min);
  defineRule('tel', (value: string) => {
    return /^[0-9][0-9-]+[0-9]$/.test(value);
  });
  defineRule('password', (value: string) => {
    return /^[0-9a-zA-Z]+$/.test(value);
  });

  /**
   * configure
   */
  configure({
    // Generates an English message locale generator
    generateMessage: localize(
      'ja',
      {
        messages: {
          // use double `{{` and `}}` i18next-like curly braces for the interpolated values, instead of the default `{` and `}`
          mail: `{{field}}のフォーマットが不正です`,
          password: `{{field}}のフォーマットが不正です`,
          required: `{{field}}は必須です`,
          max: `最大 0:{{length}} 文字まで入力可能です`,
          min: `0:{{length}} 文字以上で入力してください`,
          tel: `{{field}}のフォーマットが不正です`,
        },
        names: {
          mail: 'メールアドレス',
          sei: '姓',
          mei: '名',
          message: 'メッセージ',
          tel: '電話番号',
          organization: '所属/会社名/団体名',
          toiawase: 'お問い合わせ',
          privacypolicy: 'プライバシーポリシーへの同意',
          password: 'パスワード',
          passwordConfirm: 'パスワード（確認）',
        },
      },

      {
        prefix: '{{',
        suffix: '}}',
      }
    ),
  });
});
