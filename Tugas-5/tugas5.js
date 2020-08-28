//soal 1
    function halo(){
        return "halo sanbers";
    }
    console.log(halo());

//soal 2
function kalikan(num1, num2){
    hasil = num1*num2;
    return hasil;
}
let num1 = 12;
let num2 = 4;
let hasilKali = kalikan(num1, num2);
console.log(hasilKali)

//soal 3
function Introduce(name, age, address, hobby){
    console.log('Nama saya '+name+' umur saya '+age+' alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!')
}

let name = "john";
let age = "30";
let address = "Jalan belum jadi";
let hobby = "gaming";

let perkenalan = Introduce(name, age,address,hobby);

//soal 4
let arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
arrayDaftarPeserta.forEach(function(item){
    let ObjDaftarPeserta = {
        nama : arrayDaftarPeserta[0],
        gender : arrayDaftarPeserta[1],
        hobby : arrayDaftarPeserta[2],
        BirthYear : arrayDaftarPeserta[3]
    }
    console.log(ObjDaftarPeserta);
})

//soal 5
let buah = [{nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga:9000},
{nama : "jeruk", warna : "oranye", "ada bijinya" : "ada", harga:8000},
{nama : "Semangka", warna : "Hijau dan Merah", "ada bijinya" : "ada", harga:10000},
{nama : "Pisang", warna : "kuning", "ada bijinya" : "tidak", harga:5000}
]

let ObjBuahPertama = buah.forEach(function(item){
    let ObjBuahPertama = {
        dataPertama : buah[0]
    }
})
console.log(buah[0]);

//soal 6
function tambahDataFilm(nama, durasi, genre, tahun){
    var dataFilm = [{
        nama : nama,
        durasi : durasi,
        genre : genre,
        tahun : tahun
    }]
    return dataFilm;
}
var tambahData2 = tambahDataFilm("IRobot","60","Series",2010);
var tambahData1 = tambahDataFilm("IT","120","Horror",1998);
console.log(tambahData2);
console.log(tambahData1);

