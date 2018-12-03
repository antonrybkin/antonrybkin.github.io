importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/073f8f04f4c5e35b3bb1.js",
    "revision": "d1f3ca6833125012302559144b1a5b02"
  },
  {
    "url": "/bearle-nuxt/_nuxt/09d6cd46dc935e48c844.js",
    "revision": "c074005423c89976e34c0feedd886530"
  },
  {
    "url": "/bearle-nuxt/_nuxt/1a7f2528e1ffa0a00f3a.js",
    "revision": "af5328f995870b098cfe3f3e8e756d68"
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
    "url": "/bearle-nuxt/_nuxt/48077928277d2c86433c.js",
    "revision": "f9963ca63e762e84197b94069a78bb72"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4c445783907c3d32d1f7.js",
    "revision": "c7e106f3d9e9ff7ef1e219ea8e6955c4"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5a4dbd14c49740e761bc.js",
    "revision": "3511cf74487177515846acbe1e515cc6"
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
    "url": "/bearle-nuxt/_nuxt/c1581eec69f36ff93726.js",
    "revision": "9dc80f837104d2db01b3f3fc7a0fc8b1"
  },
  {
    "url": "/bearle-nuxt/_nuxt/eed7033286f74c8a498e.js",
    "revision": "5942e8192918e60c3b4f903989862614"
  },
  {
    "url": "/bearle-nuxt/_nuxt/fe524db060a84d2b9a85.js",
    "revision": "18410620900e04f1ad1a8f5ab2eaeba4"
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





