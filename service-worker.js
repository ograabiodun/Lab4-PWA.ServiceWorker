var cacheName = 'v2';
var cacheFiles = [
    '../Lab4-PWA.ServiceWorker/',
    '../Lab4-PWA.ServiceWorker/index.html',
    '../Lab4-PWA.ServiceWorker/app.js ',
    '../Lab4-PWA.ServiceWorker/service-worker.js',
    '../Lab4-PWA.ServiceWorker/manifest.json',
    '../Lab4-PWA.ServiceWorker/data/img/a-snake.jpg'
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
    e.respondWith(
        cashes.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
    // console.log("[ServiceWorker] Fetching", e.request.url);

    // e.respondWith(
    //     caches.match(e.request).then(function(response) {
    //         if ( response) {
    //             console.log("[ServiceWorker] Found in cache", e.request.url);
    //             return response;
    //         }

    //         return fetch(e.request);
    //     })
    // )
});