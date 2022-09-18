// dict, json
let kullaniciA = {
    "ad": "Harun",
    "soyad": "Hatib",
    "yas": 30,
    "adres": {
    "sehir": "Aydın",
    "ilce": "Buharkent" },
    "hobiler": ["sinema","spor"]
}
let kullaniciB = {
    "ad": "Miray",
    "soyad": "Hatib",
    "yas": 2,
    "adres": {
    "sehir": "Aydın",
    "ilce": "Buharkent" },
    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[1].urun_fiyat;

console.log(sonuc);