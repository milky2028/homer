/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/app.css",
    "revision": "ad05bcd4254ad41c202abbaef773e956"
  },
  {
    "url": "icons/192x192.png",
    "revision": "d6c3ee9fceb3a755d4230f082186d692"
  },
  {
    "url": "icons/512x512.png",
    "revision": "1655471eb30a1d048995e63223074995"
  },
  {
    "url": "img/homer.jpeg",
    "revision": "353b603500be34e797d5f0ac37df94a2"
  },
  {
    "url": "index.html",
    "revision": "e76d630043c0d549b953ecd1e2c73dc8"
  },
  {
    "url": "js/app.js",
    "revision": "6c16fbfa4de85c5ed7b7d11e9942c63b"
  },
  {
    "url": "manifest.json",
    "revision": "985e5b8e49539156991d1802ed5cdde4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
