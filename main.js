var result = document.querySelector('#backImg');

if (window.Worker) { // Check if Browser supports the Worker api.
    // Requires script name as input
    var myWorker = new Worker("image_worker.js");

    myWorker.onmessage = function (e) {
        result.src = e.data;
        console.log('Message received from worker');
    };
}
