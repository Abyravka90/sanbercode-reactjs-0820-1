//Rest Parameters
//first Example
let scores = ['98', '95','93','90','87','85']
let [first, second, third,fourth, ...restOfScores] = scores;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(restOfScores);
console.log('\n')

 //second Example
const filter = (...rest) => {
    return rest.filter(el => el.nama !== undefined)
}
console.log (filter(1,{nama:"Asep"} ,"next"))

//Spread operator
let array1 = ['one','two']
let array2 = ['three','four']
let array3 = ['five','six']

//ES5 way / Normal Javascript
var combinedArray = array1.concat(array2).concat(array3);
console.log(combinedArray);
//ES6 WAy
let combinedArray1 = [...array1, ...array2, ...array3];
console.log(combinedArray1);