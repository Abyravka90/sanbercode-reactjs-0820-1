let mobil = [{merk : "toyota", warna : "merah", tipe:"MPV"},{merk : "Honda", warna : "Abu Abu", tipe:"Keluarg"},
{merk : "Suzuki", warna : "kuning", tipe:"Sedan"}];



let arrayFilterWarna = mobil.filter(function(item){
 return item.tipe != "Sedan";
})
console.debug(arrayFilterWarna);