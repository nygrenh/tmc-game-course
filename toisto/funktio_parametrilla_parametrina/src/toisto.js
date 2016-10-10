//Lue lehdestä mikä perjantain sää on ja mikä on halvin tarjouksessa oleva puhelin
function lueLehti(aihe, a){
    aihe(a);
}
function saa(paiva){
    if(paiva == "maanantai"){
        console.log("Maanantaina on poutaista.")
    } else if(paiva == "tiistai"){
        console.log("Tiistaina on pilvistä.")
    } else if(paiva == "keskiviikko"){
        console.log("Keskiviikkona on sadetta.")
    } else if(paiva == "torstai"){
        console.log("Torstaina on poutaista.")
    } else if(paiva == "perjantai"){
        console.log("Perjantaina on ukkosta.")
    } else if(paiva == "lauantaina"){
        console.log("Lauantaina on sadetta.")
    } else if(paiva == "sunnuntai"){
        console.log("Sunnuntaina on pilvistä.")
    } else {
        console.log(paiva + " ei ole päivä.")
    }
}
function halvinTarjous(tavara){
    if(tavara == "leipä"){
        console.log("Halvin leipäpussi maksaa 1.99€")
    } else if(tavara == "puhelin"){
        console.log("Halvin puhelin maksaa 59.99€")
    } else if(tavara == "limu"){
        console.log("Halvin limu maksaa 1.5l/1.3€")
    } else {
        console.log(tavara + " ei ole tarjouksessa. Tarjouksessa on leivät, puhelimet ja limut.")
    }
}

lueLehti(saa, "maanantai");
lueLehti(halvinTarjous, "leipä");
