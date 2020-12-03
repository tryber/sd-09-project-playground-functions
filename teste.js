// **7 - Caça ao rato**
// -
// Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão atrás de um rato chamado `mouse`. Imagine que cada um dos três animais está em uma posição representada por um número.

// Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

// Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.

// Desafio 7
let mouse = 5;
let cat1 = 3;
let cat2 = 8;

function catAndMouse() {
    let distanceMouseCat1 = mouse - cat1;
    let distanceMouseCat2 = mouse - cat2;
    let distanceCats = cat1 - cat2;

    if (distanceMouseCat1 < distanceMouseCat2) {
        console.log('O gato 1 alcançou o Rato!');
    }else if (distanceMouseCat1 > distanceMouseCat2) {
        console.log('O gato 2 alcançou o Rato!');
    }else if(distanceCats === 0) {
        console.log('Os Gatos Trombaram e o rato escapou!!!');
    }
}
catAndMouse();