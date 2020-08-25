import colors from 'vuetify/es5/util/colors'

require('dotenv').config()

export default {
  server: {
    host: process.env.NUXT_HOST, // default: localhost
    port: process.env.NUXT_PORT, // default: 80
  },

  mode: 'universal',

  components: false,
  /**
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /**
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /**
   ** Global CSS
   */
  css: [],
  /**
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /**
   ** Extend router
   */
  router: {},
  /**
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /**
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc : https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://github.com/microcipcip/cookie-universal
    'cookie-universal-nuxt',
  ],
  /**
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#242424',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /**
   ** Apollo configuration
   */
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },
  /**
   ** Proxy configuration
   */
  proxy: [process.env.APOLLO_HTTP_END_POINT],
  /**
   ** Shared style resources
   */
  styleResources: {
    scss: ['./assets/vuetify.override.scss'],
  },
  /**
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['lodash-es', /^vuetify/],
    extend(config, ctx) {},
  },
}
