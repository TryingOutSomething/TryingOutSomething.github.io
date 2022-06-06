export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jan Owyeong',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        property: 'og:description',
        content: 'A portfolio website to showcase software projects that I developed on my own and collaborated with others.'
      },
      {
        content: 'website',
        property: 'og:type'
      },
      {
        content: 'https://tryingoutsomething.github.io/',
        property: 'og:url'
      },
      {
        content: 'Jan Owyeong Guo Yong\'s Portfolio Website',
        property: 'og:title'
      },
      {
        content: 'https://tryingoutsomething.github.io/meta_image.jpg',
        property: 'og:image'
      },
      {
        content: 'Portfolio Website',
        property: 'og:image:alt'
      },
      {
        content: 'summary_large_page',
        property: 'twitter:card'
      },
      {
        content: 'https://tryingoutsomething.github.io/',
        property: 'twitter:url'
      },
      {
        name: 'description',
        property: 'twitter:description',
        content: 'A portfolio website to showcase software projects that I developed on my own and collaborated with others.'
      },
      {
        content: 'Jan Owyeong Guo Yong\'s Portfolio Website',
        property: 'twitter:title'
      },
      {
        content: 'https://tryingoutsomething.github.io/meta_image.jpg',
        property: 'twitter:image'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/scroll.css', '~/assets/styles/hero.css'],

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-material-design-icons', mode: 'client' },
    '~/plugins/v-viewer.js',
    '~/plugins/project-list.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Poppins: {
        wght: [300, 400, 500, 600, 700]
      }
    },
    display: 'swap'
  }
};
