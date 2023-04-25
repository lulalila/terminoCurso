import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - final',
    title: 'final',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyCmBbWswckWLOawPnp5O6mQnfeWVor50Pc",
    authDomain: "proyecto-final-cf888.firebaseapp.com",
    databaseURL: "https://proyecto-final-cf888-default-rtdb.firebaseio.com",
    projectId: "proyecto-final-cf888",
    storageBucket: "proyecto-final-cf888.appspot.com",
    messagingSenderId: "167259502169",
    appId: "1:167259502169:web:7a4a5c2bc07188a5cae348"
    },
    services: {
      auth: {
        // it is recommended to configure either a mutation or action but you can set both
        initialize: {
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'onAuthStateChangedAction'
        }
      } 
    }
  },
    
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
     baseURL: 'https://proyecto-final-cf888-default-rtdb.firebaseio.com/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: 'vuetify.options.js'    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
