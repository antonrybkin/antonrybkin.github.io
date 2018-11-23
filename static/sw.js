importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10ccbc3ef6642433f144.js",
    "revision": "35669b89eadac5014faa12da504cd9fd"
  },
  {
    "url": "/_nuxt/312359007d9936ba47f9.js",
    "revision": "c1f8ff1d0b9d68bb7421c4091f81cfb0"
  },
  {
    "url": "/_nuxt/489c0355ee9df6209dec.js",
    "revision": "820d958b6422d069d40c66e880d350b3"
  },
  {
    "url": "/_nuxt/54c0c51da874119836f3.js",
    "revision": "b04074ce017605b9f5d2ef47d15559c8"
  },
  {
    "url": "/_nuxt/682522778d0d39c280d4.js",
    "revision": "4f313b716cef413a095b18b51ba37dec"
  },
  {
    "url": "/_nuxt/6c2077ff99f6cf932fc8.js",
    "revision": "9b2b17fcb1663dd7e32c72fe02ca334b"
  },
  {
    "url": "/_nuxt/6ea259b53c564b461218.js",
    "revision": "88590caacc6e8ff2fcf584616a62f306"
  },
  {
    "url": "/_nuxt/8d874cb1b560b527e8af.js",
    "revision": "4a72fd4000eb31033a934b77c045a3bd"
  },
  {
    "url": "/_nuxt/99b4ad98f6f4a4f209e6.js",
    "revision": "913b80c981d71599a5f99eec3e70da4d"
  },
  {
    "url": "/_nuxt/a4bd8c235dfb720eb927.js",
    "revision": "06c151c38e02cad9c28502c9a0b33879"
  },
  {
    "url": "/_nuxt/df0412b4c02a8f497140.js",
    "revision": "25c44a02068fed59beecd9a98ea7fa37"
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





