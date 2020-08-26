//ini adalah versi yang scriptnya digabungkan
//soal 1 
let kataPertama = " saya";
let kataKedua = "enang";
let hurufKedua = " S";
let kataKetiga = " belajar";
let kataKeempat = " javascript";

let kataBesar = kataKeempat.toUpperCase();
let kataGabunganKedua = hurufKedua.concat(kataKedua);
console.log(kataPertama.concat(kataGabunganKedua).concat(kataKetiga).concat(kataBesar));
//soal 2
let kataPertama = Number ("1");
let kataKedua = Number("2");
let kataKetiga = Number("3");
let kataKeempat = Number("4");
let jumlah = kataPertama+kataKedua+kataKetiga+kataKeempat;
console.log(jumlah)
//soal 3
let kalimat = 'wah javascript itu keren sekali';
let kataPertama = kalimat.substring(0,3);
let kataKedua = kalimat.substring(4,14);
let kataKetiga = kalimat.substring(15,18);
let kataKeempat = kalimat.substring(19,24);
let kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: '+kataPertama);
console.log('Kata Kedua: '+kataKedua);
console.log('Kata Ketiga: '+kataKetiga);
console.log('Kata Keempat: '+kataKeempat);
console.log('Kata Kelima: '+kataKelima);
//soal 4
let nilai = 71;
let indeks = '';
if(nilai >= 80){
    let indeks = 'A';
    console.log('Indeks anda adalah '+indeks);
}else if(nilai >=70 && nilai <80){
    let indeks = 'B';
    console.log('Indeks anda adalah '+indeks);
}else if(nilai >=60 && nilai <70){
    let indeks = 'C';
    console.log('Indeks anda adalah '+indeks);
}else if(nilai >=50 && nilai <60){
    let indeks = 'D';
    console.log('Indeks anda adalah '+indeks);
}else if (nilai<50){
    let indeks = 'E';
    console.log('Indeks anda adalah '+indeks);
}
//soal 5
let tanggal = 11;
let bulan = 8;
let tahun = 1990;
switch(bulan){
    case 1 : console.log(+tanggal+' Januari '+tahun);break;
    case 2 : console.log(+tanggal+' Pebruari '+tahun);break;
    case 3 : console.log(+tanggal+' Maret '+tahun);break;
    case 4 : console.log(+tanggal+' April '+tahun);break;
    case 5 : console.log(+tanggal+' Mei '+tahun);break;
    case 6 : console.log(+tanggal+' Juni '+tahun);break;
    case 7 : console.log(+tanggal+' Juli '+tahun);break;
    case 8 : console.log(+tanggal+' Agustus '+tahun);break;
    case 9 : console.log(+tanggal+' September '+tahun);break;
    case 10 : console.log(+tanggal+' Oktober '+tahun);break;
    case 11 : console.log(+tanggal+' November '+tahun);break;
    case 12 : console.log(+tanggal+' Desember '+tahun);break;
}