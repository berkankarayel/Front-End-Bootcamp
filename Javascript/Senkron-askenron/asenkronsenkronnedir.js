// Senkron (Synchronous)
// İşlemler sırayla gerçekleştirilir, yani bir işlem bitmeden diğeri başlamaz.
// Bloklayıcıdır; uzun süren bir işlem diğer işlemleri durdurur.



// Asenkron (Asynchronous)
// İşlemler hemen sırayla değil, belirli bir zaman sonra ya da başka bir koşul gerçekleştiğinde yürütülür.
// Bloklayıcı değildir; uzun süren işlemler arka planda çalışırken diğer işlemler devam eder.



/*
    Bilinmesi Gerenekler 

    1-) JAVASCİRPT SENKRON ÇALIŞAN BİR PROGRAMA DİLİDİR.
    2-) Javascirpt bazı durumlar asenkron çalışır ; 

        1-) Timigin
        2-) Event
        3-) Http İstekleri
    

*/


/*
    AŞağıda bir asenkron problem senaryosu oluştruduk. iki fonskiyonda asenkron olduğu için aynı anda çalışır bu yüzden çalışmaz.
*/

const users = [
    {
        userId: 5,
        post: "Enes Post 1"
    },
    {
        userId: 5,
        post: "Enes post 2"
    },
    {
        userId: 5,
        post: "Enes post 3"
    },
    {
        userId: 6,
        post: "ALİ post 1"
    },
    {
        userId: 7,
        post: "Enes post 1"
    }
]

// USER id 
// post 

function getUserId() {
    setTimeout(() => {
        // servise gittik ve cevabı aldık

        return 5;
    }, 1000);
}

function getPostUserId(userId) {
    setTimeout(() => {
        users.forEach((user) => {
            if (user == userId) {
                console.log(user.post)
            }
        })
    }, 500);
}


let userId = getUserId();

getPostUserId(userId);