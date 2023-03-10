// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

const nuxtConfig = defineNuxtConfig({
  modules: ['@nuxt/image-edge', 'nuxt-icons', '@formkit/nuxt'],
  css: ['~/assets/styles/main.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#fcf9f5' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#fcf9f5' },
        { name: 'theme-color', content: '#fcf9f5' },
      ],
    },
  },
})

const additionalConfig = {
  image: {
    cloudinary: {
      baseURL:
        'https://res.cloudinary.com/dyh3pomep/image/upload/spanienferien.eu',
    },
  },
  formkit: {
    configFile: './formkit.config.ts',
  },
}

export default {
  ...nuxtConfig,
  ...additionalConfig,
}
