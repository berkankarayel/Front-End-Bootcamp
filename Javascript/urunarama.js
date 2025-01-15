let urun1 = {

    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat: 6.219

}

let urun2 = {

    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475

}

let urun3 = {

    isim: "Lenovo V15",
    kategori: "Teknoloji",
    fiyat: 10.999

}

let urun4 = {

    isim: "Lenovo V14",
    kategori: "Teknoloji",
    fiyat: 4.399

}

let urun5 = {

    isim: "Lenovo Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510

}

let urunler = [urun1, urun2, urun3, urun4, urun5]
let filtreliUurnler = []
let KullaniciUrunIsmi = prompt("Bir ürün ismi giriniz")

getFiltreliUurnler(urunler)
yazdir(filtreliUurnler)



function getFiltreliUurnler(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(KullaniciUrunIsmi.toUpperCase(), 0))
            filtreliUurnler.push(urun)
    })
}

function yazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("--------------------------------")
        console.log("|" + urun.isim + " |" + urun.fiyat + "|" + urun.kategori)
    })
}