importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b7f839074d032072c0c.js",
    "revision": "d625f25e1a4837feef74dc1e62117f1a"
  },
  {
    "url": "/_nuxt/304e2d0c7d10c941f91a.js",
    "revision": "1bc0e998ff7c829165ae7d63eacdd43b"
  },
  {
    "url": "/_nuxt/38a053b0163d765b1f9e.js",
    "revision": "8544cf8961f76a2be3122143350fe86a"
  },
  {
    "url": "/_nuxt/3aa2279212df8c27a197.js",
    "revision": "593455c0c8b40516da187ca8c6531b8e"
  },
  {
    "url": "/_nuxt/3e6bd1c67bd39129bfe6.js",
    "revision": "caee22e71a515772d952b014287f1a75"
  },
  {
    "url": "/_nuxt/411f8f3f35ac48bc0eec.js",
    "revision": "ce7937d17e9f77b09716d3f6a2ca844b"
  },
  {
    "url": "/_nuxt/4e5dd79c8b74fa0ba66c.js",
    "revision": "edc2d046b3051f082ef3e85ed61f2ccd"
  },
  {
    "url": "/_nuxt/5790d5fe327e822cfb37.js",
    "revision": "a55a24278af55b7af53a1e454d581700"
  },
  {
    "url": "/_nuxt/73c0650177e3a70e41f0.js",
    "revision": "a5f8591f075ecaad445deeeb703392f0"
  },
  {
    "url": "/_nuxt/7b26f6ef472119d84d67.js",
    "revision": "a39f4fbbdfef2dc068155d927c5e3b0e"
  },
  {
    "url": "/_nuxt/aaaa3af82e1c891f06b3.js",
    "revision": "65d26be46508186a644c4b37ac86988e"
  },
  {
    "url": "/_nuxt/b31f498576c67ad7cff9.js",
    "revision": "6f4006062565d976ad36fafdc25fd4da"
  },
  {
    "url": "/_nuxt/c495c1aef60d75c5e444.js",
    "revision": "315505941437482a43fa946c440041aa"
  },
  {
    "url": "/_nuxt/e67ea0dd9898dc25cf9d.js",
    "revision": "b7db14459138008fa69751052d01e197"
  },
  {
    "url": "/_nuxt/fa253e2acd7d0a945c60.js",
    "revision": "4945459dca6c9e0b94be3bee4d09f205"
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





