//* 1. Template Literals Nedir?

//? Amaç: Daha okunabilir ve esnek bir şekilde metin veya string oluşturmayı sağlar.

//*Özellikleri:

//! Backtick (`) kullanılır.
// Değişkenler ve ifadeler ${} içine yazılarak string içine gömülebilir.
// Çok satırlı string oluşturmayı kolaylaştırır.


//* Değişken İçerme 

const name = "ali";
const age = 25;

const massage = 'Benim adım ${name}, yaşım ${age}.';
console.log(massage); // Benim adım Ali, yaşım 25.


const multiLine = `Bu bir
çok satırlı
string örneğidir.`;
console.log(multiLine);
/* Çıktı:
Bu bir
çok satırlı
string örneğidir.
*/

const greet = (name) => `Merhaba, ${name}!`;
const message = greet("Ahmet");
console.log(message); // Merhaba, Ahmet!


const items = ["Elma", "Armut", "Çilek"];
const list = `Alışveriş Listesi:
${items.map(item => `- ${item}`).join("\n")}`;
console.log(list);
/* Çıktı:
Alışveriş Listesi:
- Elma
- Armut
- Çilek
*/