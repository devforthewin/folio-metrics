import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['node_modules/', '.next/', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettierConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      indent: 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
        },
      ],
      'max-len': 'off',
      'comma-dangle': ['warn', 'always-multiline'],
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      'no-trailing-spaces': ['error', { skipBlankLines: false }],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'object-curly-spacing': ['error', 'always'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],
    },
  },
]

export default eslintConfig
