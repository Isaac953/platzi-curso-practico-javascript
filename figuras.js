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

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input_cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm^2");
}

function calcularPerimetroTriangulo() {
    const input_lado_a = document.getElementById("input_triangulo_a");
    const value_lado_a = parseFloat(input_lado_a.value);
    const input_lado_b = document.getElementById("input_triangulo_b");
    const value_lado_b = parseFloat(input_lado_b.value);
    const input_base = document.getElementById("input_triangulo_base");
    const value_base = parseFloat(input_base.value);

    const perimetro = perimetroTriangulo(value_lado_a, value_lado_b, value_base);
    console.log(perimetro);
    alert("El perímetro del triángulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
    const input_base = document.getElementById("input_triangulo_base");
    const value_base = input_base.value;
    const input_altura = document.getElementById("input_triangulo_altura");
    const value_altura = input_altura.value;

    const area = areaTriangulo(value_base, value_altura);
    alert("El área del triángulo es: " + area + " cm^2");
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("input_circulo_radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimetro + " cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("input_circulo_radio");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área del círculo es: " + area + " cm^2");
}