//array
var number = [1,2,3];
var numberOne = number[0];
var numberTwo = number[1];
var numberThree = number[3];

console.log(numberOne);

//object 
var studentName = {
    firstName : "Peter",
    lastName : "Parker"
}
const namaPertama = studentName.firstName;
const namaTerakhir = studentName.lastName;

console.log(namaPertama)

//arrayDestructuring
const {firstName, lastName} = studentName
console.log(firstName+lastName)

const[ nomor1, nomor2, nomor3 ] = number;
console.log(nomor1);