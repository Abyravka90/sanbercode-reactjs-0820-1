//soal 1
console.log("LOOPING PERTAMA");
let iLoveCoding=2;
while(iLoveCoding<=20){
    console.log(iLoveCoding+' I Love Coding');
    iLoveCoding=iLoveCoding+2;
}
console.log("LOOPING KEDUA");
let iLoveKoding=20;
while (iLoveKoding>=2){
    console.log(iLoveKoding+' I Will Become a frontEnd Developer');
    iLoveKoding=iLoveKoding-2;
}
console.log('\n')
//soal 2
let pesan = "";
for(let angka=1;angka<=20;angka++){
    if(angka%3===0 && angka%2!==0 ){
        pesan="I Love Coding";
        console.log(angka+' - '+pesan);
    }else if(angka%2!==0){
        pesan="Santai";
        console.log(angka+' - '+pesan);
    }else if(angka%2===0){
        pesan="Berkualitas";
        console.log(angka+' - '+pesan);
    }
    
}
console.log('\n')

//soal 3
for(let segitiga=1; segitiga<=7; segitiga++){
    console.log("#".repeat(segitiga));
 }
 console.log('\n')

 //soal 4
let kalimat = "saya sangat senang belajar javascript";
let arrKalimat = kalimat.split(" ");
console.log(arrKalimat)
console.log('\n')

//soal 5 
let arrBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"]
let urutanBuah = arrBuah.sort();
let urutanBuahList = arrBuah.join("\n")
console.log(urutanBuahList);
