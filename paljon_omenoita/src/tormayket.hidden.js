function törmääItseensä() {
    var madonPää = mato[0]
    for (var i = 1 i < mato.length i++) {
        if (madonPää.x === mato[i].x && madonPää.y === mato[i].y) {
            return true
        }
    }
    return false
}

function törmääSeinään() {
    var madonPää = mato[0]
    if (madonPää.x >= game.width || madonPää.x < 0 || madonPää.y >= game.height || madonPää.y < 0) {
        return true
    }
    return false
}

function törmääOmenaan() {
    var madonPää = mato[0]
    return madonPää.x == omena.x && madonPää.y == omena.y
}
