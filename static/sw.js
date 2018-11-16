importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/002958f2d06a8a282238.js",
    "revision": "c0c5d7565f5ad5b770a3d64a11659938"
  },
  {
    "url": "/_nuxt/0ab699c45543aaa424c5.js",
    "revision": "37076e7602545c9aee6467ceee707064"
  },
  {
    "url": "/_nuxt/0eb454488f53894f2cf3.js",
    "revision": "207c9dcbc630b15698e237fb5572a021"
  },
  {
    "url": "/_nuxt/11730e1ca2174d18990a.js",
    "revision": "e9de8a3ad30551f80b4820760b839015"
  },
  {
    "url": "/_nuxt/185d4417c123c83e43a5.js",
    "revision": "1961762dceb8df140561ba8bdf79b7f6"
  },
  {
    "url": "/_nuxt/19e81ef790cc1aa47934.js",
    "revision": "ff84092c56e320386f4038866918fcf5"
  },
  {
    "url": "/_nuxt/401f808aa38fa167b66f.js",
    "revision": "09a6683d69cb688cc904671a264850bc"
  },
  {
    "url": "/_nuxt/48d05dc6483d8d57adbd.js",
    "revision": "fe0defd62db19a5852d4f20673fa4cab"
  },
  {
    "url": "/_nuxt/593f1ee8b62dc05a2274.js",
    "revision": "ae69bf4e46994a6d9502d64829a28a4a"
  },
  {
    "url": "/_nuxt/ae68440f0653df26202c.js",
    "revision": "e38347eaad577f88145c68db0c7ec9a2"
  },
  {
    "url": "/_nuxt/f349af1f0c59b157316d.js",
    "revision": "4d613700831d1ac0ec18a5d4a2018e04"
  },
  {
    "url": "/_nuxt/fe0d53a411193da144a0.js",
    "revision": "948b074ae548312e061b42b5ca8b91e5"
  }
], {
  "cacheId": "Bearle",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





