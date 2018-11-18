importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/3379a44ff77f31fe38b4.js",
    "revision": "d84ba40a4fb283310331e5a8cb4e2660"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4278139c5737e29f3dcb.js",
    "revision": "ba9bb1910e8f5b7bba2c5c351cade546"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4abe00bbfebb2557e534.js",
    "revision": "4989c1a38d9d6bcd512d685bc417d16b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5876e6210aa79de591ea.js",
    "revision": "c6719d586797be0e621f994d3164b82a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/8a0f2d62389ba25ea83b.js",
    "revision": "f28dcfbe61953630dc66bd479f15bb66"
  },
  {
    "url": "/bearle-nuxt/_nuxt/aa67a8128bdc25d65e8b.js",
    "revision": "982fe642f293049eafdccbbc31e713e0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/bd564f45940a61cb00da.js",
    "revision": "61718851dedd8e0a8169984cbe75a912"
  },
  {
    "url": "/bearle-nuxt/_nuxt/bd89ee325b5206b4589c.js",
    "revision": "dd78b1f946a18136f9c855a0155c0f3d"
  },
  {
    "url": "/bearle-nuxt/_nuxt/be84c9e5f6a34ea3cfaa.js",
    "revision": "0ea75c3b1d43b9112b92945c84961820"
  },
  {
    "url": "/bearle-nuxt/_nuxt/e7a8922ae69707e49b21.js",
    "revision": "d468d7c3e938930e4ec597a124359ead"
  },
  {
    "url": "/bearle-nuxt/_nuxt/e8458846cd905a96c186.js",
    "revision": "9d639c6f665467d863bd99dfe54e9724"
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





