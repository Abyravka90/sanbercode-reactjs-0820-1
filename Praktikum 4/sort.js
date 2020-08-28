let pointTotal = [7.0 , 8.2, 7.3, 8.4, 8.5, 9.1, 7.0 ]
pointTotal.sort();
let pointTerpilih = pointTotal.slice(2,5);
let sumTotalPoint = pointTerpilih.reduce(function(a,b){
    return a+b;
},0);
console.log(sumTotalPoint);
