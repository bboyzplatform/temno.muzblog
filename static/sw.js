importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "temnomusic-pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.056f698de89a844059d2.js",
    "revision": "fdac1ca62c22500af82b7f1ce8770c44"
  },
  {
    "url": "/_nuxt/layouts_default.4c34a1b62e23a5cf0bd7.js",
    "revision": "40f5049f2b3ec9d281a9f2335ae4ebd9"
  },
  {
    "url": "/_nuxt/layouts_default(initial).8ed1b89e920f3c0ff19f.js",
    "revision": "2b8fe819d100761e122b4661f4c11115"
  },
  {
    "url": "/_nuxt/manifest.4b5ab7753b194a6efb02.js",
    "revision": "97dc2b6e2301aaf4cab8d64eedf137f2"
  },
  {
    "url": "/_nuxt/pages_index.ad1ee1205336abda857e.js",
    "revision": "091c889c9c138f5759b49c8652d82bd2"
  },
  {
    "url": "/_nuxt/pages_initial.0e2e8ca40b31b6728d30.js",
    "revision": "e74329386ae425458ad3273143e1d34e"
  },
  {
    "url": "/_nuxt/vendor.38d23698b46db72007e9.js",
    "revision": "e763e9fac6786db981f7229a6c07f44b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

