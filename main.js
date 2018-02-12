

if (window.Worker) { // Check if Browser supports the Worker api.
    // Requires script name as input
    var myWorker = new Worker("addLetter.js");
    var txt = document.getElementById('world').innerHTML;
    myWorker.postMessage(txt.length+1);
    console.log("PRESS")

    myWorker.onmessage = function (e) {
        document.getElementById('world').innerHTML = e.data;
        console.log('Message received from worker');
        addLetter();
    };
}
