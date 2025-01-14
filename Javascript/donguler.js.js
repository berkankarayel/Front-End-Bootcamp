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
    tp += (rakams * rakams * rakams *)
}

if (Number(sayi == tp)) {
    console.log("armstrong sayıdır")
} else {
    console.log("armstorng sayı değildir.")
}