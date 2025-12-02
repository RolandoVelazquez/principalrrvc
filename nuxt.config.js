export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RRVC',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'description', content: 'rrvc.dev es el sitio personal de Rolando Velazquez, disfruta tu estancia.' },

      // Itemprop
      { itemprop: 'name', content: 'rrvc.dev' },
      { itemprop: 'description', content: 'rrvc.dev es el sitio personal de Rolando Velazquez, disfruta tu estancia.' },
      { itemprop: 'image', content: 'https://rrvc.dev/meta-images/rrvc.dev.jpg' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'rrvc.dev por rolando velazquez' },
      { name: 'twitter:description', content: 'rrvc.dev es el sitio personal de Rolando Velazquez, disfruta tu estancia.' },
      { name: 'twitter:image', content: 'https://rrvc.dev/meta-images/rrvc.dev-small.jpg' },

      // Open Graph general (Facebook, Pinterest & Google+)
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rrvc.dev' },
      { property: 'og:title', content: 'rrvc.dev por rolando velazquez' },
      { property: 'og:description', content: 'rrvc.dev es el sitio personal de Rolando Velazquez, disfruta tu estancia.' },
      { property: 'og:image', content: 'https://rrvc.dev/meta-images/rrvc.dev.jpg' },
      { property: 'og:site_name', content: 'rrvc.dev' },

      // <!-- Open Graph - Article -->
      { name: 'article:author', content: 'Rolando Rangel Velazquez Chi' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3e3e3e',
      },
      {
        rel: 'manifest',
        href: '/icons/site.webmanifest',
      },
      // Fonts
      {
        rel: 'preconnect',
        hreg: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        hreg: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        hreg: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        crossorigin: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/normalize.scss',
    '~/assets/scss/containers.scss',
    '~/assets/scss/main.scss'
  ],

  /**
   * $breakpoints: (
   * 'phone': 320px,
   * 'tablet': 768px,
   * 'desktop': 1024px
   * ) !default;
   */
  styleResources: {
    scss: ['include-media/dist/_include-media.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-TQDP6RW',
    enabled: true
  },

  publicRuntimeConfig: {
    gtm: {
      id: 'GTM-TQDP6RW',
      enabled: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // SiteMap
  sitemap: {
    sitemap: {
      hostname: 'https://rrvc.dev',
      gzip: true,
    },
  },

  // Robots.txt
  robots: {
    'user-agent': '*',
    sitemap: 'https://rrvc.dev/sitemap.xml',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
