// nheritance (Kalıtım) kavramı, nesne yönelimli programlamada (OOP) kullanılan önemli bir özelliktir.
//  Bu kavram, bir sınıfın başka bir sınıftan özellik ve metotları devralmasını sağlar. Bu sayede kod tekrarını önleriz ve daha temiz, daha yönetilebilir bir kod yapısı elde ederiz. 
// Bir sınıf, başka bir sınıfın özelliklerini ve metotlarını miras alarak, o sınıfın tüm işlevselliklerini devralır.

//? Inheritance (Kalıtım) Nedir?

//! Base Class (Temel Sınıf): 
// kalıtım veren sınıf. Diğer sınıfların özelliklerini ve metotlarını sağladığı sınıftır.

//! Derived Class (Türemiş Sınıf): 
// Kalıtım alan  sınıf. Temel sınıftan özellikleri ve metotları miras alır, ancak kendi özel özelliklerini de ekleyebilir.

class ParentClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class ChildClass extends ParentClass {
    constructor(name, age) {
        super(name);  // Parent class constructor'ını çağırır
        this.age = age;
    }

    introduce() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

const child = new ChildClass('John', 25);
child.greet(); // Hello, my name is John
child.introduce(); // I am John and I am 25 years old


class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const animal = new Animal();
animal.speak(); // Animal speaks

const dog = new Dog();
dog.speak(); // Dog barks