var cacheName = 'v1';
var cacheFiles = [
    '../Lab4-PWA.ServiceWorker',
    '../Lab4-PWA.ServiceWorker/index.html',
    '../Lab4-PWA.ServiceWorker/app.js',
    '../Lab4-PWA.ServiceWorker/service-worker.js'

]


self.addEventListener('install', function(e){
    console.log("[ServiceWorker] Installed")

    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[Service] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener('activate', function(e){
    console.log("[ServiceWorker] Activated")

    e.waitUntil(
        caches.keys().then(function(cachesNames) {
            return Promise.all(cachesNames.map(function(thisCacheName){
                if (thisCacheName !== cacheName) {
                    console.log("[ServiceWorker] Removing Cached Files from", thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})

self.addEventListener('fetch', function(e){
    console.log("[ServiceWorker] Fetching", e.request.url);
})