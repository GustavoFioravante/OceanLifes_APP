import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
      },
    },
    plugins: {
      react: pluginReact,
    },
    extends: ['eslint:recommended', 'plugin:react/jsx-runtime'],
    settings: {
      react: {
        version: '17.0',
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
