importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0fc3397fd0c5360f846f.js",
    "revision": "39266023a8723dd05c4ae1e9d297e36d"
  },
  {
    "url": "/_nuxt/1d002070609515cffdd7.js",
    "revision": "0bd5746627628d5aaf39714b70ca3df6"
  },
  {
    "url": "/_nuxt/4abe00bbfebb2557e534.js",
    "revision": "4989c1a38d9d6bcd512d685bc417d16b"
  },
  {
    "url": "/_nuxt/4c4c249b794471f9119a.js",
    "revision": "a1059afee197858b5706f7ccb5afb3a4"
  },
  {
    "url": "/_nuxt/8a0f2d62389ba25ea83b.js",
    "revision": "f28dcfbe61953630dc66bd479f15bb66"
  },
  {
    "url": "/_nuxt/bd564f45940a61cb00da.js",
    "revision": "61718851dedd8e0a8169984cbe75a912"
  },
  {
    "url": "/_nuxt/bd89ee325b5206b4589c.js",
    "revision": "dd78b1f946a18136f9c855a0155c0f3d"
  },
  {
    "url": "/_nuxt/be84c9e5f6a34ea3cfaa.js",
    "revision": "0ea75c3b1d43b9112b92945c84961820"
  },
  {
    "url": "/_nuxt/dccc005130a7209aca30.js",
    "revision": "b82ed048df1b1ee8ed2b0bd397ce5f21"
  },
  {
    "url": "/_nuxt/e8458846cd905a96c186.js",
    "revision": "9d639c6f665467d863bd99dfe54e9724"
  },
  {
    "url": "/_nuxt/f1433244fe9f44139581.js",
    "revision": "3640f8147e5dd363c677a756483392a2"
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





