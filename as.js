var harfler = [
  ["D", "İ", "K", "E"]
  ["C", "E", "R", "E", "S"],
  ["L", "İ", "M", "O", "S"],
  ["P", "O", "R", "O", "S"],
  ["A", "R", "T", "E", "M", "İ", "S" ],
  ["B", "E", "N", "D", "İ" ,"S "],
  ["A", "T", "A", "L", "A", "N", "T", "E"],
  ["A", "R", "A", "Ş", "T", "I", "R", "M", "A"]
]

var random = Math.floor((Math.random() * (harfler.length - 1)));

var kelime = harfler[random]; // kelime yukarıdan rastgele seçilir
var kutusayisi = new Array(kelime.length);
var yanlis = 0;

// harfe göre çizgi sayisi
for (var i = 0; i < kutusayisi.length; i++) {
  kutusayisi[i] = "_ ";
}

// çizgileri yazar
function printKutusayisi() {
  for (var i = 0; i < kutusayisi.length; i++) {
    var kutu = document.getElementById("kutu");
    var karakter = document.createTextNode(kutusayisi[i]);
    kutu.appendChild(karakter);
  }
}

//yazılan karakter doğru mu değil mi
var Karakter = function() {
  var f = document.tahmin;
  var b = f.elements["s"];
  var harf = b.value; // kullanıcı tarafından yazılan harf
  harf = harf.toUpperCase();
  for (var i = 0; i < kelime.length; i++) {
    if (kelime[i] === harf) {
      kutusayisi[i] = harf + " ";
      var as = true;
    }
    b.value = "";
  }

  //tahmin alanını siler
  var kutu = document.getElementById("kutu");
  kutu.innerHTML = "";
  printKutusayisi();

  // harf tahmini yanlışsa hangman büyür
  if (!as) {
    var harftahmin = document.getElementById("harftahmin");
    var karakter = document.createTextNode(" " + harf);
    harftahmin.appendChild(karakter);
    yanlis++;
    var hangman = document.getElementById("hangman");
    hangman.src = "baslangic" + yanlis + ".jpg";
  }

  //hepsi tahmin edilirse
  var bitti = true;
  for (var i = 0; i < kutusayisi.length; i++) {
    if (kutusayisi[i] === "_ ") {
      bitti = false;
    }
  }
  if (bitti) {
    window.alert("Kazandınız!");
  }

  //6 hak biterse
  if (yanlis === 6) {
    window.alert("Üzgünüz...");
  }
}

function init() {
  printKutusayisi();
}

window.onload = init;