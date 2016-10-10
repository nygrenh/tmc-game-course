//Lue päivän saa paivayksen sijasta.
function lueLehti(aihe){
    aihe();
}
function saa(){
    console.log("Tänään on poutaista.");
}
function paivays(){
    console.log("Tänään on 10.5.2016");
}

lueLehti(paivays);
