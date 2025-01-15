// 1 den 10 a kadar olan sayıları yazdırma 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// 1 den 10 a kadar çiftleri yazıdr 


for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}


// while döngüsü 

let sayac = 1

while (sayac <= 10) {
    console.log(sayac)
    sayac++;
}


let deger = 1;

while (true) {
    console.log(deger);
    if (deger == 7) {
        break;
    }
    sayac++;
}


//! Uygulama 1 Asal sayı bulma uygulaması 


let sayi = Number(prompt("Lütfen sayı giriniz"));
let sonuc = true

for (let i = 2; i < Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        sonuc = false
        break

    }

}

if (sonuc) {
    alert("sayı asal")
} else {
    alert("sayı asal değil")
}



//! Armstrong sayı uygulaması 

//? örnek oalrak 153 = 1*1*1 5*5*5 3*3*3 

let rakam = prompt("Lütfen sayı griiniz")

let tp = 0;

for (let i = 0; i < rakam.length; i++) {
    let rakams = rakam.charAt(i)
    tp += (rakams * rakams * rakams)
}

if (Number(sayi == tp)) {
    console.log("armstrong sayıdır")
} else {
    console.log("armstorng sayı değildir.")
}


//? Örnek:  10 luk sayıyı 2 lik  tabana çevirme 

convertDecimalToBinary(25)

function convertDecimalToBinary(Number) {
    let binary = ""
    while (true) {
        binary += (Number % 2).toString();
        Number = Math.floor(Number / 2)
        if (Number == 1) {
            binary += 1;
            break
        }

    }

    let result = reverse(binary)
    console.log("Sonuç :" + result)

}


function reverse(binary) {
    let reversBinary = ""
    for (let i = binary.length - 1; i >= 0; i--) {
        reversBinary += binary.charAt(i)
    }

    return reversBinary;
}




//! 2lik saıyı 10 luk sayıya çevirme  

console.log(Math.pow(2, 3)) // 2 üzeri 3 yapar

function convertBinaryToDecimal(binary) {

    let toplam = 0;
    let us = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        toplam += Number(binary.charAt(i)) * Math.pow(2, us)
        us++;
    }

    console.log("sonuc: " + toplam)

}
let binary = "1011"
convertBinaryToDecimal(binary)






