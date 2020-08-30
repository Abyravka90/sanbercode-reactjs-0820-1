function luasLingkaran(jariJari){
    var phi = 3.14;
    var luasLingkaran = phi*(jariJari*jariJari)
    return luasLingkaran;
}
function luasSegitiga(alas, tinggi){
    var luasSegitiga = 0.5*alas*tinggi;
    return luasSegitiga;
}
function luasPersegi(sisi){
    var luasPersegi = sisi*sisi;
    return luasPersegi;
}

var HasilLuasLingkaran = luasLingkaran(10);
var HasilLuasSegitiga = luasSegitiga(5,10);
var HasilLuasPersegi = luasPersegi(10);

console.log(HasilLuasLingkaran);
console.log(HasilLuasSegitiga);
console.log(HasilLuasPersegi);