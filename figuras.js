//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

perimetroCuadrado(56);


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triangulo

console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

// Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm"); */

// Diámetro

function diametroCirculo(radio) {
    return radio * 2
}

// Pi

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();