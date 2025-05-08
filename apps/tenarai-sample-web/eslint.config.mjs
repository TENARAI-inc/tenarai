// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt()
  // Your custom configs here
  .override('nuxt/vue/rules', {
    rules: {
      // add your rules
      'vue/multi-word-component-names': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/max-attributes-per-line': 0,
      'vue/html-self-closing': 0,
    },
  })
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/quote-props': 0,
      '@stylistic/brace-style': 0,
      '@stylistic/operator-linebreak': 0,
    },
  });
