// Async/Await, Promise'lerin üzerine kurulmuş bir yapıdır. Promise'leri kullanmayı daha kolay ve senkronmuş gibi gösterir.
// Kodunuzu daha temiz, okunabilir ve anlaşılır hale getirir.
// await, bir işlemin tamamlanmasını bekler, böylece kod daha doğal bir akış içinde yazılabilir.




function yemekHazirla() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Yemek hazır! Afiyet olsun.");
        }, 2000); // Yemek hazırlama 2 saniye sürsün
    });
}

// Async/Await ile kullanımı
async function yemekSureci() {
    console.log("Yemek hazırlanıyor...");
    const sonuc = await yemekHazirla(); // YemekHazirla'nın bitmesini bekler
    console.log(sonuc); // Yemek hazır mesajını yazdırır
}

yemekSureci();









function cayHazirla() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Çay hazır!");
        }, 2000);
    });
}

function kahveHazirla() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Kahve hazır!");
        }, 1500);
    });
}

async function mutfakIslemleri() {
    console.log("Mutfak işleri başladı...");

    const cay = await cayHazirla(); // Çay hazırlanmasını bekler
    console.log(cay);

    const kahve = await kahveHazirla(); // Kahve hazırlanmasını bekler
    console.log(kahve);

    console.log("Mutfak işleri tamamlandı!");
}

mutfakIslemleri();
