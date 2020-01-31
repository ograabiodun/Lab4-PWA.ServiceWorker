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


get('https://https://pixabay.com/en/blossom-bloom-flower-195893/api/?key=15014345-5ed027ae166a17d51ad35e76d&q=yellow+flowers&id=195893&image_type=photo&pretty=true')
    .then(function(response) {
        console.log("Success", response);
        document.getElementsByClassName("targetImage") = response.url;
    })
    .catch(function(err) {
        console.log("Error", err);
    })