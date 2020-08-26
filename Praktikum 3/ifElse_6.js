let miniMarketStatus = "open";
let telur = "soldOut";
let buah = "soldOut";
if(miniMarketStatus == "open"){
    console.log("saya akan membeli telur dan buah");
    if(telur == "soldOut" || buah =="soldOut"){
        console.log("belanjaan saya tidak lengkap")
    }else if(telur == 'soldOut'){
        console.log("telur sudah habis")
    }else if(buah == 'soldOut'){
        console.log("buah sudah habis")
    }
} else{
    console.log("minimarket tutup, saya pulang lagi")
}