import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [solid(), eslintPlugin()],
})
