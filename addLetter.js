    document.getElementById("BOD").addEventListener("keypress", insertLetter)


    var texty = "What the swag did you just fucking yolo about me, you little wayne? I'll have you know I graduated top of my class in the SwagFags, and I've been involved in numerous Obey Records , and I have over 300 confirmed Swaggers. I am trained in wearing snapbacks and I'm the top poser in the entire Swagfag Army. You are nothing to me but just another No swag. I will swag you the fuck out with swagger the likes of which has never been seen before on this Earth, mark my fucking hashtags. You think you can get away with not taking pictures in the mirror over the Internet? Think again, fucker. As we speak I am contacting my mom, she has alot of swag, and your ratchet ass is being traced right now so you better prepare for the yolo, nikka. The yolo that wipes out the pathetic little thing you call your swag. You're fucking dead, nikka. I can swag anywhere, anytime, and I can swag in over seven hundred ways, and that's just with my baggy skinny jeans. Not only am I extensively trained in having plugs and snake bites, but I have access to the entire Hollister store. and I will use it to its full swaggness to wipe your miserable swag off the face of tumblr, you little Non trend follower. I will swag yolo all over you and you will swag in it. You're fucking dead, nikka."

    var pushText = ""

    function insertLetter() {
        /*if(i%2==0)
            postMessage(link1);
        else
            postMessage(link2);*/
        pushText += ("" + texty.charAt(pushText.length))
        document.getElementById("world").innerHTML = pushText;
        $.ajax({
            type: "POST",
            url: "~/pythoncode.py",
            data: {
                param: text
            }
        }).done(function (o) {
            // do something
        });
    }
