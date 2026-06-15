import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Make color/spacing variables available to every <style lang="scss"> block.
        additionalData: '@import "@/styles/colors";\n@import "@/styles/values";\n',
        // The variable partials still use @import; silence Dart Sass's deprecation noise.
        silenceDeprecations: ['import'],
      },
    },
  },
  test: {
    environment: 'node',
    passWithNoTests: true,
  },
  // vite-ssg options
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
