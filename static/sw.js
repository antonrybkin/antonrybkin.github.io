importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/002958f2d06a8a282238.js",
    "revision": "c0c5d7565f5ad5b770a3d64a11659938"
  },
  {
    "url": "/bearle-nuxt/_nuxt/0eb454488f53894f2cf3.js",
    "revision": "207c9dcbc630b15698e237fb5572a021"
  },
  {
    "url": "/bearle-nuxt/_nuxt/11730e1ca2174d18990a.js",
    "revision": "e9de8a3ad30551f80b4820760b839015"
  },
  {
    "url": "/bearle-nuxt/_nuxt/185d4417c123c83e43a5.js",
    "revision": "1961762dceb8df140561ba8bdf79b7f6"
  },
  {
    "url": "/bearle-nuxt/_nuxt/19e81ef790cc1aa47934.js",
    "revision": "ff84092c56e320386f4038866918fcf5"
  },
  {
    "url": "/bearle-nuxt/_nuxt/3ebea7e4731a5739d168.js",
    "revision": "5518aa79cdc40210638eda32bb0692e0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/401f808aa38fa167b66f.js",
    "revision": "09a6683d69cb688cc904671a264850bc"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5546ca6853281d9cccd3.js",
    "revision": "6e725b239a09890207c3b75237667dd0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/86310b7d187caf6a281a.js",
    "revision": "3ddcb0b084a5f291147f72d5c072fe08"
  },
  {
    "url": "/bearle-nuxt/_nuxt/a154a99e2e7eae20a3f8.js",
    "revision": "5a540377969e73aa8f559e95fbb1eed5"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c626c246963c454a2759.js",
    "revision": "2fa9cc235261ba6f26cde017800c9959"
  },
  {
    "url": "/bearle-nuxt/_nuxt/f350ff4cb7eba09195f1.js",
    "revision": "6561e559ba708ada80787d2b579ecb56"
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





