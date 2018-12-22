importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/0b4015d4c125d1864813.js",
    "revision": "bebbfa0dcbaabfd68149bf534269820a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/1b7f839074d032072c0c.js",
    "revision": "d625f25e1a4837feef74dc1e62117f1a"
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
    "url": "/bearle-nuxt/_nuxt/3d49b071176bf0bd2015.js",
    "revision": "61795eed89828d05b7732a8b3a1538b3"
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
    "url": "/bearle-nuxt/_nuxt/469642cdf06755439872.js",
    "revision": "69cc7ac65140b67201035b26ade60c74"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5790d5fe327e822cfb37.js",
    "revision": "a55a24278af55b7af53a1e454d581700"
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
    "url": "/bearle-nuxt/_nuxt/81e3eede4550b9dc45dc.js",
    "revision": "8be87891db7f079a79b6568b5643555b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/9fcc3ea661518c3fdaf7.js",
    "revision": "f569bec33819d482592ce6a13b49ef36"
  },
  {
    "url": "/bearle-nuxt/_nuxt/b67d279c3479e29a72ae.js",
    "revision": "2c7cf4ea7a7a69750e358d0df1d19920"
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





