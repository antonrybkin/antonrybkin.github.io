importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/073f8f04f4c5e35b3bb1.js",
    "revision": "d1f3ca6833125012302559144b1a5b02"
  },
  {
    "url": "/bearle-nuxt/_nuxt/1a7f2528e1ffa0a00f3a.js",
    "revision": "af5328f995870b098cfe3f3e8e756d68"
  },
  {
    "url": "/bearle-nuxt/_nuxt/20ff595b7530c7f2bf20.js",
    "revision": "e6c42ca8c9785eb813a186e3eb411f3b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/2d741e25428c3c0c6aa2.js",
    "revision": "2ff7ba05f25ef1d8eeb63fde6f570ef1"
  },
  {
    "url": "/bearle-nuxt/_nuxt/3f49b9a4791f6181dbcf.js",
    "revision": "66edf39247b327768243689a825cf9f1"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4c445783907c3d32d1f7.js",
    "revision": "c7e106f3d9e9ff7ef1e219ea8e6955c4"
  },
  {
    "url": "/bearle-nuxt/_nuxt/65598895d4e85a12a77a.js",
    "revision": "13ab9d75426eb637f2844c7e5f7fc738"
  },
  {
    "url": "/bearle-nuxt/_nuxt/71f255381904bb4fe78d.js",
    "revision": "0426bcc43759283198f40f08f65bb08d"
  },
  {
    "url": "/bearle-nuxt/_nuxt/7a25b44664ec71f5ee71.js",
    "revision": "8d7c19a6af597fd9a82f4758053dbdd2"
  },
  {
    "url": "/bearle-nuxt/_nuxt/b328ac9b98bdceb99ca2.js",
    "revision": "30b6d7b5583216d3c8a2dbd3c9b7895c"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c1581eec69f36ff93726.js",
    "revision": "9dc80f837104d2db01b3f3fc7a0fc8b1"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c2338787761796a0e0df.js",
    "revision": "1273b033e204a44a39352c95c26fdaf3"
  },
  {
    "url": "/bearle-nuxt/_nuxt/eed7033286f74c8a498e.js",
    "revision": "5942e8192918e60c3b4f903989862614"
  }
], {
  "cacheId": "Bearle",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/bearle-nuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/bearle-nuxt/.*'), workbox.strategies.networkFirst({}), 'GET')





