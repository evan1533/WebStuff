
/*
if (window.Worker) { // Check if Browser supports the Worker api.
    // Requires script name as input
    var myWorker = new Worker("worker.js");
    var txt = document.getElementById('world').innerHTML;
    myWorker.postMessage(txt.length+1);

    myWorker.onmessage = function (e) {
        document.getElementById('world').innerHTML = e.data;
        console.log('Message received from worker');
        addLetter();
    };
}*/

var i = 0;
timedCount()
function timedCount()
{
    i = i + 1;
    document.getElementById("world").innerHTML = i;
    setTimeout("timedCount()",50);
}