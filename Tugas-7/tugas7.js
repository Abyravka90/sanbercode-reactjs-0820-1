//soal 1
//release 0 
class Animal{
    constructor(name){
        this._name = name;
        this._legs = 4;
        this._cold_blooded = 'false';
    }
    get name(){
        return this._name;
    }
    set name(x){
        this._name = x;
    }
    get legs(){
        return this._legs;
    }
    set legs(y){
        this._legs = y;
    }

}



//release 2
class Ape extends Animal{
    constructor(name){
        super (name);
    }
    get legs(){
        return this._legs;
    }
    set legs(x){
        this._legs = x;
    }
    yell (){
        return "Auooo";
    }
}

class Frog extends Animal{
    constructor(name){
        super (name);
    }
    jump(){
        return "Hop! Hop!"
    }
}
console.log('===========Release 1==============');
sheep = new Animal("shaun");
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep._cold_blooded)
console.log('===========Release 2==============');
var sungokong = new Ape("Kera Sakti");
sungokong.legs = 2;
console.log(sungokong.yell());
var kodok = new Frog("buduk");
console.log(kodok.jump());

//soal 2
class Clock{
    constructor({template}){
        this.template = template;
        this.timer;
    }
   
    render(){
        var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }

    stop(){
        clearInterval(this.timer)
    }

    start(){
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    }
}
var clock = new Clock({template : 'h:m:s'});
clock.start();


