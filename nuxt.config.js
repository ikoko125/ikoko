export default {
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ikoko',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '深淵' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'いここページ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ikoko.jp' },
      { hid: 'og:image', property: 'og:image', content: '/image/06X.png' },
       { name: 'twitter:card', content: 'summary' },
       { name: 'twitter:site', content: '@Twitter' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel:true,
    cache: true,
    hardSource: true,
    extend(config, { isDev }) {
      if (!isDev) {
        config.output.publicPath = './_nuxt/'
      }

    },
    transpile: [
      'three'
    ], 
    babel: {
      babelrc: false,
      compact: false
    }
  },
  router: {
    base: '/'
  },
  extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          // globalスタイル
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'initial',
            enforce: true
          },
          // components配下のスタイル
          components: {
            name: 'components',
            test: /app\/components/,
            chunks: 'all',
            enforce: true
          },
        }
      }
    },
}
