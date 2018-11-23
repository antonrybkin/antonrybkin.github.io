importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/08fc3226d4c32b710cf8.js",
    "revision": "0d03565ee7372555149f0f67ef3161a0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/11a225c57c41e899651b.js",
    "revision": "79a34a2e7ebb4ec291122481902591a8"
  },
  {
    "url": "/bearle-nuxt/_nuxt/2a98d4efed70f630aaab.js",
    "revision": "fe6af6e09f5798b5a9286f8887b46427"
  },
  {
    "url": "/bearle-nuxt/_nuxt/589d63d3d42bc0b3f461.js",
    "revision": "c74e64e52658b97f71b16f8c80a05530"
  },
  {
    "url": "/bearle-nuxt/_nuxt/5dfd3ed05f5e921966f9.js",
    "revision": "05bc69299b28e2a17da7758b7a55aed2"
  },
  {
    "url": "/bearle-nuxt/_nuxt/6a0ad3b4874c671f9258.js",
    "revision": "dca8da9c57bacef66cfd6e672782b02c"
  },
  {
    "url": "/bearle-nuxt/_nuxt/6f8569c850cedaf15e8d.js",
    "revision": "326256e53256ca8ed1def3db53bcd020"
  },
  {
    "url": "/bearle-nuxt/_nuxt/8c6aee16ebeaf4d7c79a.js",
    "revision": "7ccdeb3b6d289298e5f0547bdd541291"
  },
  {
    "url": "/bearle-nuxt/_nuxt/a8d190590eecf1a0b6f5.js",
    "revision": "336bc4c76afef2986475c5c667423c83"
  },
  {
    "url": "/bearle-nuxt/_nuxt/ad3b87da9518d16c2e65.js",
    "revision": "d88300c2acb046900faaa9d77c3c4ebc"
  },
  {
    "url": "/bearle-nuxt/_nuxt/ba3a8f79e467ee3aa6cf.js",
    "revision": "9043d2f452b57e359d81985478db6720"
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





