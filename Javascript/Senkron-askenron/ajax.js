// AJAX Nedir?
// AJAX, web sayfası ile sunucu arasında asenkron veri alışverişi yapmayı sağlar. Bu, sayfa yenilenmeden yeni verilerin yüklenmesi ve eski verilerin güncellenmesi anlamına gelir. AJAX, temelde XMLHttpRequest veya Fetch API kullanılarak gerçekleştirilir. JSON ve XML veri formatları ile çalışabilir.


// aJAX Nasıl Çalışır?
// AJAX, temel olarak şu şekilde çalışır:

// Bir işlem başlatılır: Kullanıcı bir butona tıklar veya sayfa yüklendikten sonra bir işlem başlatılır.
// Veri istenir: JavaScript kullanılarak sunucudan veri talep edilir (genellikle JSON formatında).
// Sunucu işlem yapar ve veri döner: Sunucu veriyi işler ve istemciye geri gönderir.
// Sayfa güncellenir: JavaScript, dönen veriyi kullanarak sayfadaki içeriği günceller.


//?1. Basit AJAX Örneği: XMLHttpRequest Kullanarak Veri Alma


function prepareurl(url, id) {
    if (id == null) {
        return url;
    }
    return `${url}$postId=${id}`
}


function getComments(url, id) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 20) {
            console.log(xhr.responseText)
        }
    })

    xhr.open("GET", newURL)
    xhr.send();

}


getComments("https://jsonplaceholder.typicode.com/comments", null)
