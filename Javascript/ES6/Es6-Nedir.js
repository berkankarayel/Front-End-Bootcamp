//! EcmaScript Nedir :


// Javascirptin üzerine eklenmiş bir standarttır.
// bütün tarayıcılarda çalışması için bir standart olşmuştur.


//? Arrow Function : 


function yazdir() {
    console.log("Merhaba")
}

yazdir()

// yukarıdaki kodu arrow function olarak yazdık.
// function kullanmıyoruz. 
// => ok işaratei ile bunu tanımlıyoruz.


const yazdir = () => {
    console.log("Merhaba")
}
yazdir()


// parametreli arrow function 

const deneme = (firstName, lastname) => {
    console.log("Merhaba", firstName, lastname)
}

let a = 5;
console.log(5)
console.log("Enes")

deneme("berkan", "karayel")


// tek satır işlem yapıyorsak kıvırcıkları silebilirz
// tek parametreli işlem yapıyorsak parantezleri kaldırabilriz

const deneme2 = firstIsim => console.log("merhaba", firstIsim)

deneme2("Babako")


document.addEventListener("click", () => {
    // buraya kodları yazılacak
})

