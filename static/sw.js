importScripts('/bearle-nuxt/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/bearle-nuxt/_nuxt/01bb591bfe7c71a157ce.js",
    "revision": "eee13c52ea6d926c0ee4c8e038b90da0"
  },
  {
    "url": "/bearle-nuxt/_nuxt/01c336c45ff91f97cbeb.js",
    "revision": "414d122c1c8e9e73c94ad3e104479564"
  },
  {
    "url": "/bearle-nuxt/_nuxt/073f8f04f4c5e35b3bb1.js",
    "revision": "d1f3ca6833125012302559144b1a5b02"
  },
  {
    "url": "/bearle-nuxt/_nuxt/20490eabda046d5eadf6.js",
    "revision": "5716595174611c627ffc4e4a504b2065"
  },
  {
    "url": "/bearle-nuxt/_nuxt/3d7d2e7ebae2d2808378.js",
    "revision": "d852d190a95c2338560e699de08eed48"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4c445783907c3d32d1f7.js",
    "revision": "c7e106f3d9e9ff7ef1e219ea8e6955c4"
  },
  {
    "url": "/bearle-nuxt/_nuxt/4e5da82cc97ca2b83583.js",
    "revision": "049cfb85a31fc4c83762cc5f44a526d4"
  },
  {
    "url": "/bearle-nuxt/_nuxt/50deef8cf74d2b4a01c1.js",
    "revision": "237da4f883206bb81e19cd05b6b3033c"
  },
  {
    "url": "/bearle-nuxt/_nuxt/796f2d38078d1f60643a.js",
    "revision": "c22d7fe5b43a42451e203f1f41528e28"
  },
  {
    "url": "/bearle-nuxt/_nuxt/98ab4c49d53db6e4e0c9.js",
    "revision": "df58df47de0ef10c3e513538dc8f14ea"
  },
  {
    "url": "/bearle-nuxt/_nuxt/ab506958214ad00d76ab.js",
    "revision": "cbeeb7741de69ab4e4520a6c2fe75ec9"
  },
  {
    "url": "/bearle-nuxt/_nuxt/c1581eec69f36ff93726.js",
    "revision": "9dc80f837104d2db01b3f3fc7a0fc8b1"
  },
  {
    "url": "/bearle-nuxt/_nuxt/d50aae101f56595975d0.js",
    "revision": "ef7586c51a9ab2a609a970a434940897"
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





