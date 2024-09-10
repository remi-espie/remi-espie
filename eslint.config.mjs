import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import solid from 'eslint-plugin-solid/configs/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:jsx-a11y/recommended'
    ),
    {
        files: ['**/*.{ts,tsx}'],

        plugins: {
            '@typescript-eslint': typescriptEslint,
            solid,
            'jsx-a11y': jsxA11Y,
        },

        languageOptions: {
            globals: {
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        rules: {},
    },
]
