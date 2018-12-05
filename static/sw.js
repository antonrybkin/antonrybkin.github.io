importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/01c336c45ff91f97cbeb.js",
    "revision": "414d122c1c8e9e73c94ad3e104479564"
  },
  {
    "url": "/bearle-nuxt/_nuxt/073f8f04f4c5e35b3bb1.js",
    "revision": "d1f3ca6833125012302559144b1a5b02"
  },
  {
    "url": "/bearle-nuxt/_nuxt/0abc4e22439cc0405e4b.js",
    "revision": "dcfcf4d9eaebe50ce462f257380db4e5"
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
    "url": "/bearle-nuxt/_nuxt/5fbc64a52462f20042ac.js",
    "revision": "03a820b5b95a3bf18c6a8ba93b7f4970"
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
    "url": "/bearle-nuxt/_nuxt/989fcb32e0b62068815c.js",
    "revision": "a637f111dbb465f2f722f90a0dbae2cc"
  },
  {
    "url": "/bearle-nuxt/_nuxt/a958825bbd9ff9120686.js",
    "revision": "4141588ffbc105b967d0e6b1f5f8402f"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c1581eec69f36ff93726.js",
    "revision": "9dc80f837104d2db01b3f3fc7a0fc8b1"
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





