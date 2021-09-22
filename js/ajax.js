var myRequest = new XMLHttpRequest;
var secondReq = new XMLHttpRequest;
myRequest.open('GET', `http://127.0.0.1:4000/container.json`);

// myRequest.onload = function() {
//     console.log(myRequest.responseText);
// };

// JSON içerisindeki özel bir objeye ulaşmak.
myRequest.onload = function() {
  // var myData = myRequest.responseText;
  // console.log(myData[0]);  sadece parantezi alır.
  var myData = JSON.parse(myRequest.responseText);
  console.log(myData[0]); //çalışacak.
};
myRequest.send();


var btn = document.getElementById('ajaxSenderBtn');

// Butona bağlamak.
btn.addEventListener('click', function() { //event listener.
  secondReq.open('GET', `http://127.0.0.1:3000/container.json`);
  secondReq.onload = function() {
    var myData = JSON.parse(secondReq.responseText);
    renderHtml(myData)
  };

  //Error hadnling.
  secondReq.onerror = function () {
    console.log("error.");
  }
  secondReq.send();

  //btn.style.display = 'none';
});

function renderHtml(data) {
  var string = "";
  for (var i = 0; i < data.length; i++) {
    string += "<p>" + data[i].name + "</p>"
  }
  animalP.insertAdjacentHTML('beforeend' , string);
}
