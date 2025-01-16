import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
  },
  typescript: true,
  vue: true,
})
