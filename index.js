// Method JavaScipt 

// 1. 
// Method   : Array join()
// Kegunaan : Untuk menggabungkan array menjadi sebuah string,
// ketika tidak memiliki parameter akan dipisahkan dengan koma,
// parameter pertama akan menjadi delimeter setiap array yang digabung.
// Contoh Penggunaan : 
const arr = ['Apel', 'Jambu', 'Mangga']
console.log(arr.join())
// Expected Output  : Apel, Jambu, Mangga


// 2.
// Method   : push()
// Kegunaan : Method push adalah untuk memasukan satu atau lebih data baru
//              di akhir sebuah array.
// Contoh Penggunaaan   : 
const x = ['Senin', 'Selasa', 'Rabu']
x.push('Kamis')
console.log(x)
// Expected Output : ['Senin', 'Selasa', 'Rabu', 'Kamis']


// 3.
// Method   : pop() 
// Kegunaan : Method pop kebalikan dari method push, 
//              Method pop digunakan untuk menghapus data terakhir dari sebuah array
//              Method pop tidak perlu menggunakan argumen
// Contoh Kegunaan  : 
const a = [1,2,3,4,5]
a.pop()
console.log(a)
// Expected Output : [1,2,3,4]
// Pertanyaan   : Apakah bisa menghapus secara spesifik pada index kebarapanya?, saya coba namun error


// 4.
// Method   : unshift()
// Kegunaan : Sama seperti push, namun memasukan data diawal array, bukan diakhir array
// Contoh Kegunaan  : 
const b = [1,2,3,4,5]
b.unshift(0)
console.log(b)
// Expected Output : [0,1,2,3,4,5]

// 5.
// Method   : shift()
// Kegunaan : Menghapus data pertama dari sebuah array, kebalikan dari unshift
// Contoh Kegunaan  : 
const c = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
c.shift()
console.log(c)
// Expected Output : ['Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']


// 6.
// Method   : includes
// Kegunaan : untuk cek data, apakah didalam array terdapat data tersebut atau tidak
// Contoh Kegunaan : 
const d = ['Merah', 'Kuning', 'Hijau']
console.log(d.includes('Merah'))
// Expected Output : true


// 7.
// Method   : indexOf
// Kegunaan : Digunakan untuk mencari letak sebuah item dalam array.
//            Jika item yang dicari ada di dalam array, 
//            Maka akan mereturn index dari item,
//            Sebaliknya maka akan return -1.
// Contoh Kegunaan  : 
const e = ['sapi','harimau','kerbau']
console.log(e.indexOf('sapi'))
console.log(e.indexOf('Sapi'))
// Expedted Output  : 
//  0
// -1


// 8.
// Method   : concat
// Kegunaan : digunakan untuk menggabungkan 2 atau lebih array.
// Contoh Kegunaan  : 
const f = [1,2,3,4,5]
const f1 = ['selamat', 'siang']
const f2 = ['ibu', 'bapa']

const fgabung = f.concat(f1,f2)
console.log(fgabung)
// Expected Output : [1,2,3,4,5,'selamat','siang','ibu','bapa']


// 9.
// Method   : slice
// kegunaan : digunakan untuk mengambil data array
//            sintax nya yaitu array.slice(start, end)
// Contoh Kegunaan : 
const g = ['aku', 'lapar', 'tapi', 'mager']
console.log(g.slice(0,1))
// Expected Output : ['aku']


// 10. 
// Method   : splice
// Kegunaan : digunakan untuk menambah,menghapus,dan mereplace item ke sebuah array
//            jawaban atas pertanyaan saya yang diatas method ini lebih fleksibel karena bisa bebas mengganti
//            dari index ke berapa.
// Sintax   : array.splice(index , berapaBanyak, item1, ..., itemX)
// Contoh Kegunaan  : 

const h = ['kambing', 'jangkrik', 'anjing']

// ---- Mereplace Data ----
h.splice(0,1,'kucing') //Menghapus 1 data di index 0 dengan data 'kucing'
console.log(h) // Output ['kucing', 'jangkrik', 'anjing']

// ---- Menambahkan Data ----
h.splice(3,0,'tokek') //Menambahkan data di index 3 dengan data 'tokek'
console.log(h) // Output ['kucing', 'jangkrik', 'anjing', 'tokek']

// ---- Menghapus Data ----
h.splice(2,1) // Menghapus 1 data di index 2
console.log(h) // Output ['kucing', 'jangkrik', 'tokek']


// 11.
// Method   : sort
// Kegunaan : digunakan untuk mengurutkan item sebuah data array
//            Secara default sort akan mengurutkan secara alphabetic dan ascending.
//            maka dibutuhkan sebuah parameter di function pada sebuah method sort.
// Contoh kegunaan : 

// --- Kecil ke Besar ---
const i = [15, 1, 7, 16, 10, 27]
console.log(i.sort(function(a,b){ //anggap a kecil, b besar
return a-b // kecil ke besar
})) // Output [1, 7, 10, 15, 16, 27]

// --- Besar ke Kecil ---
const j = [15, 1, 7, 16, 10, 27]
console.log(j.sort(function(a,b){ //anggap a kecil, b besar
return b-a // besar ke kecil
})) // Output [27, 16, 15, 10, 7, 1]


// 12.
// Method   : toString()
// Kegunaan : Mengubah data array ke dalam tipe data string.
// Contoh Kegunaan : 
const k = [1,2,3,4,5]
console.log(k) // Output [1,2,3,4,5]
console.log(k.toString()) // Output 1,2,3,4,5


// 13.
// Method   : toUpperCase()
// Kegunaan : Mengubah string menjadi huruf kapital semua
// Contoh Kegunaan  : 
var l = "Hallo Rizal, Welcome to JavaScript!"
console.log(l.toUpperCase())
// Expected Output : HALLO RIZAL, WELCOME TO JAVASCRIPT!

// 14. 
// Method   : getFullYear()
// Kegunaan : Mengambil tahun hari ini
// Contoh Kegunaan  : 
const m = new Date()
console.log(m.getFullYear())
// Expected Output  : 2022

// 15.
// Method   : toLowerCase()
// Kegunaan : Mengubah string menjadi huruf kecil semua
// Contoh Kegunaan : 
var n = "AKu AlaY BgtZ LoCh, sUkASUka aQ DoNG"
console.log(n.toLowerCase())
// Expected Output : aku alay bgtz loch, sukasuka aq dong


// 16.
// Method   : filter()
// Kegunaan : Melakukan filter data array yang sudah ada dengan kondisi tertentu
// Contoh Kegunaan  : 
let o = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// Membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2
let filterArray = o.filter(item => item % 2 == 0)
console.log(filterArray)

// Expected Output : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// 17.
// Method   : length
// Kegunaan : Mengetahui jumlah karakter yang dituliskan dalam string
// Contoh Kegunaan : 
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let panjang = txt.length
console.log(panjang)
// Expected Output : 26


// 18.
// Method   : replace()
// Kegunaan : Mengubah isi string dengan fleksibel
// Contoh Kegunaan  : 
let p = "Aku cinta Dia"
let q = p.replace("Dia", "Rizal")

console.log(q)
// Expected Output : Aku cinta Rizal


//19.
// Method   : trim()
// Kegunaan : Menghapus whitespace dari depan dan belakang
// Contoh Kegunaan  : 
let r = "      Jangan ada jarak diantara kita      "
let s = r.trim()
console.log(s) 
// Expected Output : "Jangan ada jarak diantara kita"

//20.
// Method   : trimStart()
// Kegunaan : Menghapus whitespace hanya yang depan saja.
// Contoh Kegunaan : 
let T = "     Tarik aku Kedepan     ";
let U = T.trimStart(); // Whitespace yang dibelakang akan tetap ada
console.log(U)
// Expected Output : "Tarik aku Kedepan     "