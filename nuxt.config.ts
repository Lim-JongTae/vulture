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
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false
  //   }
  // },

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
  head: {
    title: '%s - 울산독수리',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },     
      { 
        hid: 'description',
        name: 'description', 
        content: '울산독수리 보호및 녹색에너지 교육활동' 
      },
      { 
        hid: 'og:title',
        property:'og:title',
        content: '함께해요~~울산독수리 보호및 생물다양성 지킴이활동' 
      },
      { 
        hid: 'og:description',
        property:'og:description',
        content: '기후변화협약대응, 생물다양성, 지속가능한개발목표(SDGs)' 
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'pbulic/og.jpg',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://울산독수리.com',
      },
    ]  
  }
})