let secilenyol = prompt("lütfen gitmek isteidğiniz yolu seçiniz")

if (secilenyol == 1) {
    alert("Seçilen yol " + secilenyol + ".yoldur")
} else if (secilenyol == 2) {
    alert("Seçilen yol 2dir")
} else if (secilenyol == 3) {
    alert("Seçilen yol 3 dür")
} else {
    alert("Lütfen geçerli bir yol seçiniz")
}



//! Örn :  adını tckn alın   adı:boş geçilemez tckn : 11 haneli olmak zorunda



let isim = prompt("adınızı : ")
let tck = prompt("tcklimki no : ")

function KontrolEt(isim, tck) {
    if (ad != "") {
        if (tck.length == 11) {
            console.log("İsim ve tck doğru girildi")
        } else {
            console.log("Tc kiml no hatalı")
        }
    } else {
        console.log("İsminizi doğru giriniz")
    }
}




//! Benzin istasyonu uygulaması 

// Dizel : 24.53 
// benzin : 22.25
// lpg : 11.1

// yakıt tipi ve lite alıp tutarı hesapla 


let dizel = 24.53, benzin = 22.25, lpg = 11.1
const newLine = "\r\n"

const yakitMetni = "1- Dizel" + newLine +
    "2-Benzin" + newLine + "3- Lpg" + newLine + "Yakıt türünü seçiniz"


let yakitTipi = prompt(yakitMetni)
let yakitLitre = Number(prompt("Yakit litresini girin"))
let bakiye = Number(prompt("bAKİYENİZİ GİRNİZ"))

if (yakitTipi == "1") {


    let odenecekTutar = dizel * yakitLitre
    if (odenecekTutar < bakiye) {
        alert("İşlem başarılı kalan paranız :" + (bakiye - odenecekTutar))
    } else {
        alert("Bakiyeniz yetersiz")
    }
} else if (yakitTipi == "2") {
    let odenecekTutar = benzin * yakitLitre
    if (odenecekTutar < bakiye) {
        alert("İşlem başarılı kalan paranız :" + (bakiye - odenecekTutar))
    } else {
        alert("Bakiyeniz yetersiz")
    }

} else if (yakitTipi == "3") {

    let odenecekTutar = lpg * yakitLitre
    if (odenecekTutar < bakiye) {
        alert("İşlem başarılı kalan paranız :" + (bakiye - odenecekTutar))
    } else {
        alert("Bakiyeniz yetersiz")
    }

} else {
    alert("Lütfen geçerli yakıt tipi seçin")
}