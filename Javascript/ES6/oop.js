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