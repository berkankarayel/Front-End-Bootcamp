//!this'in kullanımı:

// Normal Fonksiyonlarda: Fonksiyon çağrıldığında this, fonksiyonun çağrıldığı nesneye işaret eder.

// Arrow Functionlarda: Arrow fonksiyonlar, this bağlamını üst düzey fonksiyonlarından alır, kendi başlarına this oluşturmazlar. Yani, arrow fonksiyonlar, this'i içinde bulunduğu bağlama (lexical scoping) göre alır.

class Person {
    constructor(name) {
        this.name = name; // 'this' burada, Person sınıfının örneğini temsil eder
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person('Alice');
person1.greet(); // 'Hello, my name is Alice'

//! Super Kullanımı:
// Metodlarda: Türemiş sınıfta, temel sınıfın metodlarını çağırmak için super kullanılır.
// Constructor'da: super() kullanılarak temel sınıfın constructor'ı çağrılabilir. Bu, türemiş sınıfa ait constructor'dan önce yapılmalıdır.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Temel sınıfın constructor'ını çağırır
        this.breed = breed; // Türemiş sınıfa ait yeni özellik
    }

    speak() {
        super.speak(); // Temel sınıfın speak metodunu çağırır
        console.log(`${this.name} barks`);
    }
}



//! super() Constructor Kullanımı:
// super() temel sınıfın constructor'ını çağırır. Bu, türemiş sınıfın constructor'ı içinde yapılması gereken ilk işlemdir. Yani türemiş sınıf, temel sınıfın constructor'ını çağırmadan önce, kendi özelliklerini başlatamaz.

class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type); // Temel sınıfın constructor'ını çağırıyoruz
        this.brand = brand;
    }

    getDetails() {
        return `This is a ${this.brand} ${this.type}`;
    }
}

const myCar = new Car('Car', 'Toyota');
console.log(myCar.getDetails()); // Output: This is a Toyota Car
