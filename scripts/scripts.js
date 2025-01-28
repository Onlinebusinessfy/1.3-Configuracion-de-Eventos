//console.log("Hola Mundo desde archivo externo");


//let radio=prompt("Ingresa el radio:");
//const pi=3.1416;
//var area=pi*radio*radio;
//window.alert("El area del circulo es: "+area);

function calcularAreaCirculo(){
    let radioCirculo=prompt("Ingresa el radio del circulo:");
    let areaCirculo=pi*radioCirculo*radioCirculo;
    window.alert("El area del circulo es: "+areaCirculo);
}

function calcularAreaRectangulo(){
    let base=prompt("Ingresa la base del rectangulo: ")
    let altura=prompt("Ingresa la altura del rectangulo: ")
    let areaRectangulo=base*altura;
    window.alert("El area del rectangulo es: "+areaRectangulo);
}

function calcularAreaTriangulo(){
    let base=prompt("Ingresa la base del triangulo: ");
    let altura=prompt("Ingresa la altura del triangulo: ");
    let areaTriangulo=(base*altura)/2;
    window.alert("El area del tringulo es: "+areaTriangulo);
}

function calcularAreaHexagono(){
    let perimetro=prompt("Ingresa el perimetro de tu hexagono: ");
    let apotema=prompt("Ingresa el apotema del hexagono: ");
    let areaHexagono=(perimetro*apotema)/2
    window.alert("El area de tu hexagono es de:" +areaHexagono);
}