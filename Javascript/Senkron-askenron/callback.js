// callback nedir ? 

function getName() {
    setTimeout(() => {
        console.log("berkan")
    }, 1000);

}

function getSurname() {

    setTimeout(() => {
        consolelog("karayel")
    }, 500);

}

getName()
getSurname()


//? 2. Callback ile Asenkron Yapıyı Yönetmek

function uzunSurenIslem(callback) {
    console.log("Uzun süren işlem başladı...");
    setTimeout(() => {
        console.log("Uzun süren işlem tamamlandı!");
        callback(); // İşlem tamamlanınca callback çalışır
    }, 2000);
}

function tamamlandiktanSonra() {
    console.log("Bu işlem uzun süren işlemden sonra yapılır.");
}

uzunSurenIslem(tamamlandiktanSonra);

