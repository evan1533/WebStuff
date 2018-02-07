var link1 = "http://www.offthegridnews.com/wp-content/uploads/2016/05/st-helens.jpg";
var link2 = "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg";

var i = 0;

function timedCount() {
    i = i + 1;
    if(i%2==0)
        postMessage(link1);
    else
        postMessage(link2);
    setTimeout("timedCount()",500);
}

timedCount();
