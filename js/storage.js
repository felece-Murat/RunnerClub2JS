function StorageSetFunc(){
    localStorage.setItem('isim','murat');
    sessionStorage.setItem('soyisim','yilmaz');
    console.log("setted");
}

function StoragegetFunc() {
    console.log("local storage " + localStorage.getItem(localStorage.key(0)));
    console.log("session storage " + sessionStorage.getItem('soyisim'))
}

function clearStorage() {
    sessionStorage.clear();
}
