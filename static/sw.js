importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/091779ab8d3cb18bcb73.js",
    "revision": "0bc10e0e21ef3f95bd2e69b88546fa6a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/1553530f623c0846d18c.js",
    "revision": "42bea00136c9cafb5a373e562a423910"
  },
  {
    "url": "/bearle-nuxt/_nuxt/2dbb718c7ec17c685cf9.js",
    "revision": "199a120b1ae41eee137a54f821fa0f3b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/2f18326e5c1506885006.js",
    "revision": "5a44d01a63101204fa9c87b0e4ece67a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/56015276cb43965417fd.js",
    "revision": "b69a2d9c00777a60a29774da80812e28"
  },
  {
    "url": "/bearle-nuxt/_nuxt/57078eb0bc1f90db7b08.js",
    "revision": "7a2d0e5e4c46372aa3174c793fc0c1e5"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5bdff03cd5eb66068285.js",
    "revision": "56c28c47b56eae6adbcb51d70a17280a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/6106515aec480025bc4b.js",
    "revision": "7f457f3099f5c37604385867f537fae0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/65f2efe3e72d17bd6100.js",
    "revision": "1c90998cd91636bf7bf6891f24448944"
  },
  {
    "url": "/bearle-nuxt/_nuxt/709996b85addb36c1eda.js",
    "revision": "a35ec6c28bc7cb730102425af321057f"
  },
  {
    "url": "/bearle-nuxt/_nuxt/8611821909def376cb3e.js",
    "revision": "87bf331598440140f092f08c8000ccd3"
  },
  {
    "url": "/bearle-nuxt/_nuxt/87c4b8397dded154d41c.js",
    "revision": "5fbb0ee966a13275ed438af0eebde69a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/95ff02e2c59dcdc7ba3e.js",
    "revision": "460ab80114a52372a95d77999cf2cd73"
  },
  {
    "url": "/bearle-nuxt/_nuxt/9b5320e797a605b64f65.js",
    "revision": "380416e17d2b1f4e40a4749c625d1a5a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/a98e5290ebc954f14146.js",
    "revision": "5ea0a8a0911c8e3e3505ddfc4c326a5e"
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





