importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "temnomusic-pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.47c67bd2a36378551898.js",
    "revision": "90d117707fa11962d6effaaa5134c70c"
  },
  {
    "url": "/_nuxt/layouts_default.070b89e9b25d865890a9.js",
    "revision": "5d9e7ba79295e83e352ff90bbb46b3c4"
  },
  {
    "url": "/_nuxt/layouts_default(initial).b8bc468e7253be1398b1.js",
    "revision": "140b39ce3a05693ebc367e55e4b637de"
  },
  {
    "url": "/_nuxt/manifest.7e8d6d020c55ab111f92.js",
    "revision": "ef660fd126b88739f8fec0501b49c545"
  },
  {
    "url": "/_nuxt/pages_index.365aa993873c88552632.js",
    "revision": "8ace47aacee22d35e935d6a2a21b6d20"
  },
  {
    "url": "/_nuxt/pages_initial.e083aed486d4e5560f78.js",
    "revision": "2f3bb374c9816faf19b8bd2613ca8e12"
  },
  {
    "url": "/_nuxt/vendor.d179f1210f5fcfad208f.js",
    "revision": "27467416bd3ad62ff575a2444fac56e3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

