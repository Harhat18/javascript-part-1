let ad = "Harun";
let soyad = "Hatib";
let yas = 30;
let sehir = "Aydın";
// let mesaj =
//   "Benim adım " +
//   ad +
//   " ve soyadım " +
//   soyad +
//   ". " +
//   sehir +
//   "'de yaşıyorum." +
//   "Emekliliğe " +
//   (65 - yas) +
//   " yılım kaldı.";
// console.log(mesaj);

// // backtick ` (altgr + ,)
// mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${
//   65 - yas
// } yılım kaldı.`;

// // ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);
