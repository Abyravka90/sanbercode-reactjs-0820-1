var daftarNama = [];
function tambahNama(nama, jenisKelamin){
    if(jenisKelamin == "L"){var panggilan = "Bapak"}else{var panggilan="Ibu"}    
    daftarNama.push({
        nama:nama,
        jenisKelamin:jenisKelamin,
        panggilan:panggilan
    })
}
tambahNama("Asep","L");
tambahNama("Siti","P");
tambahNama("Yeni","P");
tambahNama("Rudi","L");
tambahNama("Adit","L");
i=1;
daftarNama.forEach(function(item){
    console.log(+i+' '+item.panggilan+' '+item.nama)
    i++;
})
