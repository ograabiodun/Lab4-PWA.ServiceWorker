self.addEventListener('install', function(e){
    console.log("[ServiceWorker] Installed")
})

self.addEventListener('activate', function(e){
    console.log("[ServiceWorker] Activated")
})

ServiceUIFrameContext.addEventListener('fetch', function(e){
    console.log("[ServiceWorker] Fetching", e.request.url);
})