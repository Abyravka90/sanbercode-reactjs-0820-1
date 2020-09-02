//promise
var isSheLovedMe = true;
var WillSheMarryMe = new Promise(function(resolve,reject){
    if(isSheLovedMe){
        var Marriage ={
            name : "lia",
            hair : "black"
        };
        resolve(Marriage);//fulfilled atau janji dipenuhi
    } else {
        var reason = new Error('she doesnt love you!');
        reject(reason);
    }
})
function askLia(){
    WillSheMarryMe
    .then(function(fulfilled){
        //yay yay she loves me
        console.log(fulfilled)
    })
    .catch(function (error){
        //Ooops She Hate Me!
        console.log(error.message);
    })
}

askLia();