importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/1b7f839074d032072c0c.js",
    "revision": "d625f25e1a4837feef74dc1e62117f1a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/25ed312ff59c535f3a16.js",
    "revision": "8e924f982408c619664b74b144275b8e"
  },
  {
    "url": "/bearle-nuxt/_nuxt/38a053b0163d765b1f9e.js",
    "revision": "8544cf8961f76a2be3122143350fe86a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/3aa2279212df8c27a197.js",
    "revision": "593455c0c8b40516da187ca8c6531b8e"
  },
  {
    "url": "/bearle-nuxt/_nuxt/3e6bd1c67bd39129bfe6.js",
    "revision": "caee22e71a515772d952b014287f1a75"
  },
  {
    "url": "/bearle-nuxt/_nuxt/411f8f3f35ac48bc0eec.js",
    "revision": "ce7937d17e9f77b09716d3f6a2ca844b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/43fc1f98158a3b806f32.js",
    "revision": "2cef2a2ed6d9186bfa78082d6f97e803"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5790d5fe327e822cfb37.js",
    "revision": "a55a24278af55b7af53a1e454d581700"
  },
  {
    "url": "/bearle-nuxt/_nuxt/588749c905d69f62e14e.js",
    "revision": "2fd361c7492cebbaf38354996d95a5ef"
  },
  {
    "url": "/bearle-nuxt/_nuxt/73c0650177e3a70e41f0.js",
    "revision": "a5f8591f075ecaad445deeeb703392f0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/7ea07405b8f3731b1fa8.js",
    "revision": "884a9c5072793cff094c8152d472d649"
  },
  {
    "url": "/bearle-nuxt/_nuxt/ab0be2b500473bbb43b6.js",
    "revision": "be16e2f6518c493483656e38425f964b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c16c93eef7f232797bf5.js",
    "revision": "79bf4f216d2c128e318de0c0b3d6a342"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c495c1aef60d75c5e444.js",
    "revision": "315505941437482a43fa946c440041aa"
  },
  {
    "url": "/bearle-nuxt/_nuxt/e67ea0dd9898dc25cf9d.js",
    "revision": "b7db14459138008fa69751052d01e197"
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





