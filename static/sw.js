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
    "url": "/bearle-nuxt/_nuxt/48140da885ff1b624ba8.js",
    "revision": "0f85fa09177c404d90300eb32e0f6c6f"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4d9f26f1d99062ff3495.js",
    "revision": "e9e53b158273c908661ae03448fd81d2"
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
    "url": "/bearle-nuxt/_nuxt/9c9fd88af3630121e2e5.js",
    "revision": "1ad1e287a5b8b44ab65c840705679d68"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c44fddc18f2fac2eeeb2.js",
    "revision": "85df7ce932dc6d3f925eb9f28bd467e8"
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





