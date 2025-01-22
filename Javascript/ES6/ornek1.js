//! Bir students adlı bir dizi oluştur. Her öğrenci bir nesne olacak ve şu özellikleri içerecek:

// id: Öğrenci kimlik numarası (ör. 1, 2, 3...)
// name: Öğrenci adı (ör. "Ali", "Ayşe")
// scores: Öğrencinin sınav puanları (ör. [85, 90, 78])


// öğrenci dizisi 

const students = [
    { id: 1, name: "ali", scores: [85, 90, 78] },
    { id: 2, name: "ayşe", scores: [92, 88, 95] },
    { id: 3, name: "mehmet", scores: [76, 84, 80] }
]

//! Yeni öğrenci ekle: Yeni bir öğrenci nesnesini students dizisine ekleyen bir addStudent fonksiyonu yaz.

// yeni bir öğrenci ekleme fonksiyonu 

const addStudent = (id, name, score) => {
    students.push({ id, name, scores })

}

//* tüm öğrencilerin isimlerini getir:
//  Tüm öğrencilerin isimlerini bir liste olarak döndüren bir getStudentNames fonksiyonu yaz.

const getStudentNames = () => students.map(({ name }) => name);


// 3. Öğrencilerin ortalamalarını hesaplayan fonksiyon

// 3. Öğrencilerin ortalamalarını hesaplayan fonksiyon
const calculateAverages = () =>
    students.map(({ name, scores }) => ({
        name,
        average: (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2),
    }));

// 4. Set kullanarak benzersiz ders adları oluşturma
const subjects = new Set(["Math", "Physics", "Chemistry", "Biology"]);

// 5. Rapor oluşturma (Template Literals ile)
const generateReport = () => {
    const averages = calculateAverages();
    return averages.map(({ name, average }) => `Adı: ${name}, Ortalama: ${average}`).join("\n");
};

// 6. Test işlemleri
addStudent(4, "Zeynep", [88, 91, 86]); // Yeni öğrenci ekle
console.log("Öğrenci İsimleri:", getStudentNames()); // İsimleri getir
console.log("Ortalama Raporu:\n", generateReport()); // Rapor oluştur
console.log("Benzersiz Dersler:", [...subjects]); // Spread ile Set içeriğini göster