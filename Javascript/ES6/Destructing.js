let langs = ["c#", "c++", "javascirpt", "python"];

let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];


//! bunun yerine distructing yöntemi ile birşey bulunmuş

[lang1, lang2, lang3, lang4] = langs;

console.log(lang1, lang2, lang3, lang4);




const calculate = (a, b) => {
    const sum = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [sum, cikar, carp, bol];
    return dizi;

}
let [a, b, c, d] = calculate(10, 2);

console.log(a, b, c, d)


//!destructuring (dağıtma):
// nesneleri ve dizileri daha kolay bir şekilde parçalayarak, içindeki verilere erişmeyi sağlayan bir sözdizimidir. Bu özellik, kodu daha okunabilir ve kısa hale getirmek için kullanılır. İki temel kullanım alanı vardır: dizi destructuring ve nesne destructuring. Aşağıda detaylı bir şekilde anlatalım.


//? 1. Dizi Destructuring
// Dizilerdeki verilere erişmek için destructuring kullanarak, belirli indeksleri kolayca değişkenlere atayabilirsiniz.

const numbers = [1, 2, 3];
// Geleneksel yöntem
const bir = numbers[0];
const iki = numbers[1];

// Destructuring yöntemi
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third);  // 3


// 2. Nesne Destructuring:

// Nesnelerin içindeki verilere erişmek için destructuring kullanabilirsiniz. Değişken isimlerini nesnenin anahtar isimleriyle eşleştirir.

const person = {
    name: 'Ali',
    age: 25,
    city: 'Istanbul',
};

// Geleneksel yöntem
const nam1 = person.name1;
const age1 = person.age1;

// Destructuring yöntemi
const { name, age, city } = person;
console.log(name); // 'Ali'
console.log(age);  // 25
console.log(city); // 'Istanbul'

//!Nesne anahtar ismiyle aynı olmayan bir değişken ismi kullanabilirsiniz.

const user = {
    username: 'ahmet123',
    password: '12345',
};

const { username: userName, password: pass } = user;

console.log(userName); // 'ahmet123'
console.log(pass);     // '12345'

const car = {
    brand: 'Toyota',
};

const { brand, model = 'Corolla' } = car;

console.log(brand); // 'Toyota'
console.log(model); // 'Corolla'

const user1 = {
    name: 'Fatma',
    hobbies: ['reading', 'traveling'],
};

const { name2, hobbies: [hobby1, hobby2] } = user1;

console.log(name2);   // 'Fatma'
console.log(hobby1); // 'reading'
console.log(hobby2); // 'traveling'