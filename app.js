if  ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('../Lab4-PWA.ServiceWorker/service-worker.js', {scope: '../Lab4-PWA.ServiceWorker/'})
        .then(function(registration) {
            console.log("Service Worker Registered");
        })
        .catch(function(err) {
            console.log("Service Worker Failed to Register", err)
        }) 
}

//Function to perform HTTP request
var get = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var result = xhr.responseText
                    result = JSON.parse(result);
                    resolve(result);
                } else {
                    reject(xhr);
                }  
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    });
};


get('https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg')
    .then(function(response) {
        console.log("Success", response);
        document.getElementsByClassName('targetImage')[0].src = response.url;
    })
    .catch(function(err) {
        console.log("Error", err);
    })