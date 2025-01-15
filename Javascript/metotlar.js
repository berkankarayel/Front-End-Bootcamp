// PARAMETRESİZ VE GERİYE DEĞER DÖndürmeyen metot tanımlamak

function yazdir() {
    console.log("Berkan")
}


// parametreli metot tanımlamak 

function yazdir(isim, soyisim) {
    console.log(isim + " " + soyisim);
}
yazdir("ahmet", "bas")


function cube(sayi) {
    console.log(sayi * sayi * sayi)
}

cube(5)


let yas = Number(prompt("Yaşınızı giriniz :"))

function kontrolEt(yas) {
    if (yas > 18) {
        console.log("Ehliyet alabilrisiniz")
    } else {
        console.log("Ehliyeti alamazssınız")
    }

}

kontrolEt(yas)


//! Geriye değer döndüren metot tanımlamak


let donenDeger = cube(3)
console.log(donenDeger)

function cube(sayi) {
    let sonuc = sayi * sayi * sayi
    return sonuc
}


// Kelime sayısı bulma uygulaması 


let metin = "fenerbahçe 2024 - 2025 yılı şampiyonudur.0";

let harf = prompt("Harfi giriniz")

let sonuc = bul(harf)


alert("Harf sayısı:" + sonuc)

function bul(harf) {

    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase === harf.toLowerCase()) {
            toplam += 1;
        }
    }
    return toplam;
}



//! Mükemmel sayı Uygulaması 


function PerfectNumber(a) {
    let toplam = 0;
    for (let i = 2; i <= a / 2; i++) {
        if (a % i == 0) {
            toplam += i;
        }
    }

    toplam = 1 + a + toplam;
}

if (toplam == a * 2) {
    alert("Mükemmel sayıdır")
} else {
    alert("Mükemmel sayıa değildir")
}




