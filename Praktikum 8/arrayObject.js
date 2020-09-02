var mobil = [{merk: "BMW", warna: "merah", tipe: "sedan"}, {merk: "toyota", warna: "hitam", tipe: "box"}, {merk: "audi", warna: "biru", tipe: "sedan"}]
function sayaPakai(merk, warna){
console.log('saya pakai mobil '+merk+' ,warna :'+warna);
}
mobil.forEach(function(item){
    sayaPakai(item.merk, item.warna);
})