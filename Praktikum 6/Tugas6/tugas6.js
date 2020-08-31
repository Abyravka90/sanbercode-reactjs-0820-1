//Soal1
const phi = 3.14;
let luasLingkaran = (jariJari, phi) =>{ return (jariJari*jariJari)*phi };
let kelilingLingkaran = (jariJari, phi) =>{return (2*phi)*jariJari};
console.log(luasLingkaran(10,phi));
console.log(kelilingLingkaran(10,phi));

//soal2
let kalimat = "";
let tambahKata = (kata1, kata2, kata3, kata4, kata5) => {
    let citaCita = `\n ${kata1} \n ${kata2} \n ${kata3} \n ${kata4} \n ${kata5}`;
    return citaCita;
}
console.log(tambahKata('* saya','* adalah','* seorang','* frontEnd','* Developer'));

//soal3
const newFunction = literal  = (firstName, lastName) => {
    return{firstName,lastName ,fullName : () => { return firstName+" "+lastName }
}
}
console.log(newFunction("William","Imoh").fullName());

//soal 4