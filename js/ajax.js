var myRequest = new XMLHttpRequest;
var secondReq = new XMLHttpRequest;
myRequest.open('GET', `https://jsonplaceholder.typicode.com/todos/1`);

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

Butona bağlamak.
btn.addEventListener('click', function() { //event listener.
  secondReq.open('GET', `https://jsonplaceholder.typicode.com/todos/1`);
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
  animalP.insertAdjacentHTML('beforeend', string);
}

//----------------------------Ajax prefilter---------------------------

btn.addEventListener('click', function() { //event listener.
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    success: function(result) {
      renderHtml(result) //json.parse halinde atiliyor.
    }
  });
});

//jQuery.ajaxPrefilter()========================================================
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
 // Modify options, control originalOptions, store jqXHR, etc
});
