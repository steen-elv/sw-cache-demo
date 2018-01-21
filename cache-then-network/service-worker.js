var CACHE = "v1";
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || update(event.request);
            })
        })
    );

    function update(request) {
        console.log("Updating cache with " + request.url);
        console.log(request);

        return caches.open(CACHE).then(function (cache) {
            return fetch(request).then(function (response) {
                return cache.put(request, response.clone()).then(function () {
                    return response;
                });
            });
        });
    }
});