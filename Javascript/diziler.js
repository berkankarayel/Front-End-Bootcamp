// Dizi oluşturma 


let sayilar = [1, 2, 3, 4]

sayilar[1] = "mehmet"

console.log(sayilar[1])


// foreach döngsü oluşturma 


let dizi1 = new Array() // dizi oluşturuduk

dizi1[0] = "Beyza"
dizi1[1] = "Ali"


let isimler = ["enes", "yakup", "bilal", "kübra", "ayşenur"]

isimler.forEach(function (isim) {
    console.log(isim)
}
)


let sum = 0;
const numbers = [65, 44, 12, 4]

numbers.forEach(myFunction)

function myFunction(item) {
    sum += item
}