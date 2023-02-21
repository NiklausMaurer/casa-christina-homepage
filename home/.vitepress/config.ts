import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'de-CH',
    title: 'Casa Christina',
    description: 'Ferien in Moraira, Spanien',
    appearance: false,
    themeConfig: {
        nav: [
            { text: 'Anfahrt', link: '/arrival' },
            { text: 'Buchen', link: '/booking' }
        ]
    }
})