periksaDokter = (nomorAntri, callback) => {
    if (nomorAntri>50){
        callback(false);
    } else if(nomorAntri<10){
        callback(true);
    }
};

//menjalankan function PeriksaDokter
periksaDokter(5,function(check){
    if(check){
        console.log('Sebentar Lagi giliran saya');
    } else {
        console.log('Saya Jalan Jalan Dulu!');
    }
})