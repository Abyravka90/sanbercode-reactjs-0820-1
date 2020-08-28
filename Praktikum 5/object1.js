let personArr = ["John", "Doe", "Male", "27"];
let personObj = {
    firstName : "John",
    lastName : "Doe",
    gender : "Male",
    age : 27
}
let car = {
    brand : "Ferrari",
    "horse power" : "15PK"
}
let car2 = {}
car2.brand= "Ferrari";
car2["horse power"] = "15PK";

console.log(car["horse power"]);
console.log(personArr[0]);
console.log(personObj.firstName);
console.log(car2.brand);

let array = [1,2,3];
console.log(typeof array);