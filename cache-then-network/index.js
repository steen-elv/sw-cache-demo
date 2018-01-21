if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(function (registration) {
        "use strict";
        if (!registration || !navigator.serviceWorker.controller) {
            navigator.serviceWorker.register('service-worker.js')
            // navigator.serviceWorker.register('service-worker.js', {scope: '/'})
                .then(function (reg) {
                    // registration worked
                    console.log('Registration succeeded. Scope is ' + reg.scope);
                    console.log('Reloading page');
                    window.location.reload();
                }).catch(function (error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });
        } else {
            console.log('DEBUG: client is under the control of service worker');
        }

    })
}
