// Static kavramı, nesne yönelimli programlamada (OOP) sınıf düzeyinde özellikler ve metodlar tanımlamak için kullanılır.
// Normalde, bir sınıfın her örneği (nesnesi) kendi özelliklerine sahiptir. Ancak static anahtar kelimesi, bir özelliği veya metodu sınıfın kendisine ait yapar ve sınıfın örneğinden bağımsız olarak erişilebilir hale getirir.

// static Özellikler: static anahtar kelimesi ile tanımlanan özellikler, nesneye değil sınıfa ait olur. Bu özellikler, nesne oluşturulmadan da kullanılabilir.
// Static Metodlar: static anahtar kelimesi ile tanımlanan metodlar da nesneye değil, sınıfa aittir. Bu metodlara, sınıfın örneği olmadan doğrudan sınıf üzerinden erişilebilir.


class Counter {
    // Static özellik
    static count = 0;

    // Static metot
    static increment() {
        this.count++;
        console.log(`Count: ${this.count}`);
    }

    // Nesneye ait metot
    decrement() {
        this.count--;
        console.log(`Count: ${this.count}`);
    }
}

// Static metot çağrısı, nesne oluşturmaya gerek yok
Counter.increment();  // Count: 1
Counter.increment();  // Count: 2

// Nesne oluşturulunca normal metot çağrılabilir
const counter1 = new Counter();
counter1.decrement();  // Count: 1

// Static özelliğe doğrudan sınıf üzerinden erişilebilir
console.log(Counter.count);  // 1