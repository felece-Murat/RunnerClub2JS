//-----------------------------------------------------------------Yeni nesne oluşturmak
function araba(model, renk, git) { //bu bir prototip
    this.model = model;
    this.renk = renk;
    this.git = function myFunc() { //veriş şeklin yanlış çünkü yukarıda verdiğin şeyi görmezden gelecek.
        return this.renk; // TODO: Gösterrr.
    }
    this.gitmek = function() {
        return this.renk + " " + this.model;
    }
}

var corsa = new araba(2010, "kırmızı", "mavi"); //bunlar ise nesneler.

var mini = new araba(2011, "beyaz");

function prototype() {
    yazdir(mini.model);
    alert(corsa.git())
}

//-------------------------------------------------------Nesnye yeni özellikler eklemek.

corsa.marka = "Opel";

console.log(corsa.marka);
console.log(mini.marka);

//----------------------------------------------------Nesnye fonksiyon eklemek

mini.stop = function stop() {
    console.log(`mini stopped`);
}

mini.stop(); //butona da eklenebiliyor.

//--------------------------------------------------prototipe ozellik eklemek ise zor

araba.marka = `araba`;
console.log(mini.marka); //undefined


//---------------------------------------------------prototipe özellik nasıl sonradan eklenir?

araba.prototype.sürat = 123;

console.log(corsa.sürat);
console.log(mini.sürat);

araba.prototype.fiyat;

console.log(corsa.fiyat); //undefined

//------------------------------------------------prototipe method ekleme

araba.prototype.dön = function() {
    return "dönüyor"
}

console.log(corsa.dön());

// bu şekilde eklemek çok önerilen bişey değil.


function yazdir(yazdir) {
    $('#prParagraph').html(yazdir);
}
