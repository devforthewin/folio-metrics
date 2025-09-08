import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      "max-len": "off",
      'comma-dangle': ['warn', 'always-multiline'],
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      // 'no-unused-vars': 'warn',
      // 'no-console': 'warn',
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      indent: ['warn', 2],
      'no-trailing-spaces': ['error', { skipBlankLines: false }],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'object-curly-spacing': ['error', 'always'],

      'jsx-quotes': ['warn', 'prefer-double'],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],
    },
  },
];

export default eslintConfig;
