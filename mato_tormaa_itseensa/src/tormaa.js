function törmääItseensä() {
    var indeksi = 1;
    while (true) {
        var madonPää = mato[0];
        var nykyinenMadonOsa = mato[indeksi];
        indeksi = indeksi + 1;
        // LOCK FROM BEGINNING
        var xKoordinaatitOvatSamat = false;
        var yKoordinaatitOvatSamat = false;
        // LOCK TO END
        if ( xKoordinaatitOvatSamat && yKoordinaatitOvatSamat ) {
            return true
        }
        if (indeksi >= mato.length) {
            break;
        }
    }
    return false;
}
