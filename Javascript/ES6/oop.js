//**  OOP (Nesne Yönelimli Programlama) Nedir?
//!  OOP, yazılım geliştirme paradigmasıdır ve gerçek dünyadaki nesneleri ve onların özelliklerini yazılıma aktarmayı amaçlar. OOP'nin temel bileşenleri şunlardır:

// Sınıf tanımlaa 

class Car {
    // yapıcı metot (constructor)

    constructor(marka, model, year) {
        this.make = marka;
        this.model = model;
        this.year = year;
    }


    displayInfo() {
        return '${this.year} ${this.make} ${this.model}';
    }
}

const myCar = new Car("Toyota", "Corolla", 2021);

// nesneye ait metot kullanma 

console.log(myCar.displayInfo());



// Kitap sınıfı oluşturuluyor
class Book {
    // Yapıcı metot (constructor)
    constructor(title, author, pages) {
        this.title = title;   // Kitap adı
        this.author = author; // Kitap yazarı
        this.pages = pages;   // Kitap sayfa sayısı
    }

    // Kitap bilgilerini döndüren metod
    displayInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

// Kitap nesnesi oluşturma
const myBook = new Book("JavaScript: The Good Parts", "Douglas Crockford", 176);

// Kitap bilgilerini yazdırma
console.log(myBook.displayInfo());  // JavaScript: The Good Parts by Douglas Crockford, 176 pages