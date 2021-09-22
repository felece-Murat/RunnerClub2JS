var myRequest = new XMLHttpRequest;
var secondReq = new XMLHttpRequest;
myRequest.open('GET', `http://127.0.0.1:4000/container.json`);
secondReq.open('GET', `http://127.0.0.1:4000/container.json`);

// myRequest.onload = function() {
//     console.log(myRequest.responseText);
// };


//JSON içerisindeki özel bir objeye ulaşmak.=
myRequest.onload = function() {
    //var myData = myRequest.responseText;
    // console.log(myData[0]);  sadece parantezi alır.
    var myData = JSON.parse(myRequest.responseText);
    console.log(myData[0]); //çalışacak.
};
myRequest.send();



var btn = document.getElementById('ajaxSenderBtn');

btn.addEventListener('click', function() { //event listener.
    secondReq.onload = function() {
        var myData = JSON.parse(secondReq.responseText);
        console.log(myData[1]);
    };
    secondReq.send();
});
