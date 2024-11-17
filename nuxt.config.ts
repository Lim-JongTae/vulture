// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  }, 
  experimental: {
   sharedPrerenderData: false,
   compileTemplate: true,
   resetAsyncDataToUndefined: true,
   templateUtils: true,
   relativeWatchPaths: true,    
   defaults: {
     useAsyncData: {
       deep: true
     }
   }
 },
 
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true,
    timeline: {
      enabled: true
    }
   },
   runtimeConfig: {
    public: {
      apiKey: process.env.FIREBASE_API_KEY,           
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
   },
  modules: [
   '@nuxt/ui',
   '@nuxt/image',
   '@pinia/nuxt',
   'nuxt-mdi',
   '@nuxt/fonts',
   '@nuxtjs/color-mode', 
  ],  
  css: [
    '~/assets/css/global.css', '~/assets/css/tailwind.css',   
  ],
  colorMode: {
    classSuffix: ''
  },  
  plugins: [
    '~/plugins/firebase.client.js'    
  ],
  build: {
    transpile:['@mdi/font'],
  },
  mdi: {
    componentName: 'MdiIcon',
    defaultSize: '1rem'
  },
  
})