let sayi = prompt("lÜTFEN BİR SAYI GİRİN")

switch (sayi) {

    case "1":
        console.log("Pazartesi")
        break

    case "2":
        console.log("Salı")
        break;

    case "2":
        console.log("Çarşamba")
        break;

    case "2":
        console.log("Perşembe")
        break;

    case "2":
        console.log("CUMA")
        break;

    case "2":
        console.log("CUMARTESİ")
        break;
    case "2":
        console.log("PAZAR")
        break;

    default:
        console.log("Hatalı işlem")
        break;
}


//! TYT PUAN HESAPLAMA 

let td, ty = 0;
let md, my = 0;
let sd, sy = 0;
let fd, fy = 0

let puan = 0;
let okulpuan = 0;

let yeniSatir = "\r\n"

let metin = "TYT pUAN HESEAPLAMA ALANINA HOŞGELDİNİZ" + yeniSatir +
    "1-) Puan Hesapla " + yeniSatir + "2- Çıkış Yap"

let secim = prompt(metin)

switch (secim) {
    case "1":
        td = Number(prompt("Türkçe doğru sayısı"))
        ty = Number(prompt("Türkçe yanlıs sayısı"))
        md = Number(prompt("Mat doğru sayısı"))
        my = Number(prompt("Mat yanlıs sayısı"))
        sd = Number(prompt("fen  doğru sayısı"))
        sy = Number(prompt("fen yanlıs sayısı"))
        fd = Number(prompt("sos doğru sayısı"))
        fy = Number(prompt(" sos yanlıs sayısı"))
        okulpuan = Number(prompt("okul puanınız giriniz"))

        okulpuan = okulpuan * 0.6
        let dogru = td + md + fd + sd
        let yanlis = ty + my + fy + sy

        puan = ((dogru - yanlis) - (yanlis / 4)) * 3.3
        puan = 100 + okulpuan


        alert("puanınız : " + puan)

        break

    case "2":

        alert("Çıkış yapılıyor....")
        break

    default:
        alert("yanlış işlem seçimi")
        break
}