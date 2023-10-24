// sw.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('haechi').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style-mobile.css',
          '/main.js',
          '/ads.js',
          '/cocos2d-js-min.js',
          '/src/extraSettings.js',
          '/src/project.js',
          '/src/settings.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  