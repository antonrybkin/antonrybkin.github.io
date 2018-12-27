importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/0039764651e5117de8e8.js",
    "revision": "a1a96a5dca18478886f2cc1a1bedef44"
  },
  {
    "url": "/bearle-nuxt/_nuxt/091779ab8d3cb18bcb73.js",
    "revision": "0bc10e0e21ef3f95bd2e69b88546fa6a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/31828ec8095b1f75229e.js",
    "revision": "1fc758be516449aa6d55889891b288d7"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4b5f185d460a17728a4e.js",
    "revision": "abc500a0ebbd9a3b6d9e7f8038634878"
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
    "url": "/bearle-nuxt/_nuxt/95ff02e2c59dcdc7ba3e.js",
    "revision": "460ab80114a52372a95d77999cf2cd73"
  },
  {
    "url": "/bearle-nuxt/_nuxt/9f25e2d0a399ee8d4c07.js",
    "revision": "5a44d01a63101204fa9c87b0e4ece67a"
  },
  {
    "url": "/bearle-nuxt/_nuxt/a98e5290ebc954f14146.js",
    "revision": "5ea0a8a0911c8e3e3505ddfc4c326a5e"
  },
  {
    "url": "/bearle-nuxt/_nuxt/ae046d0f38689d8c9fed.js",
    "revision": "530d3c8a6415886d6400497515d14106"
  },
  {
    "url": "/bearle-nuxt/_nuxt/f5d5d256ab69a4cc8e54.js",
    "revision": "331e5c7321e0ce3438eb9194f6573da3"
  },
  {
    "url": "/bearle-nuxt/_nuxt/f9ba799a339dc3ca453e.js",
    "revision": "5ed934a759571caf5dafddb67c816d6f"
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





