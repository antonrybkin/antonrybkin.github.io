importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/020508fec230c29209be.js",
    "revision": "7a6715517cea15a31bab08e51594f868"
  },
  {
    "url": "/bearle-nuxt/_nuxt/07e25c9e2899eb485a60.js",
    "revision": "71ed0fb29ec2510fd48f4c42249f3463"
  },
  {
    "url": "/bearle-nuxt/_nuxt/091779ab8d3cb18bcb73.js",
    "revision": "0bc10e0e21ef3f95bd2e69b88546fa6a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/357ef6c86b9035611643.js",
    "revision": "278965867ad8a5df72a4fb56e1c0d77e"
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
    "url": "/bearle-nuxt/_nuxt/ab6c69fba16f314e4ef5.js",
    "revision": "f99efc02e28347dc955b34b62eff85c0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/d6333b9bad5992203d6f.js",
    "revision": "09a4e0f65070b5b538be3ab9a7dc5f4b"
  },
  {
    "url": "/bearle-nuxt/_nuxt/e48bbb7227e0311d84b2.js",
    "revision": "31292e7c22a969b958310da2e11ee336"
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





