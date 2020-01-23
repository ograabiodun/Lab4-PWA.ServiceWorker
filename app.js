if  ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('../Lab4-PWA.ServiceWorker/service-worker.js', {scope: '../Lab4-PWA.ServiceWorker/'})
        .then(function(registration) {
            console.log("Service Worker Registered", registration);
        })
        .catch(function(err) {
            console.log("Service Worker Failed to Register", err)
        }) 
}