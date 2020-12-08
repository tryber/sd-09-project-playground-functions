function catAndMouse(mouse, cat1, cat2) {
    let distancemc1 = Math.abs(cat1 - mouse);
    let distancemc2 = Math.abs(cat2 - mouse);
    let mouseEscape = 'os gatos trombam e o rato foge';
    console.log(distancemc2)
    console.log(distancemc1)

    if (distancemc1 < distancemc2) {
        return 'cat1'
    } else if (distancemc2 < distancemc1) {
        return 'cat2'
    } else if (distancemc1 === distancemc2) {
        return mouseEscape
    } else {
        return 'Inválido'
    }

}
console.log(catAndMouse(1,0,2));