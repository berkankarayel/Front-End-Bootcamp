let not = 65;


if (not > 50) {
    console.log("Geçtiniz , notunuz: " + not)
} else {
    console.log("Kaldınız,notunuz  : " + not)
}



let yas = Number(prompt("lütfen yaşınızı giriniz : ")) //! tür dönüşümü yaptık
let para = prompt("Lütfen para miktarınız giriniz")

if (yas >= 18 && para >= 3000) {
    alert("Ehliyet sınavına katılabilririsniz")
} else {
    alert("Sınava katılamazssını")
}