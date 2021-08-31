function AlturaTriangulo(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        console.log('El triángulo es isósceles');
        const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
        return altura;
        // console.log('Su altura es:' + altura + " cm");
    }
    else {
        alert('Error: El triángulo debe tener al menos dos lados iguales');
        // console.log('El triángulo debe tener al menos dos lados iguales');
    }
}
// AlturaTriangulo(8, 8, 6);

function calcularAlturaTriangulo() {
    const input_lado_a = document.getElementById('input_triangulo_a');
    const value_lado_a = parseFloat(input_lado_a.value);
    const input_lado_b = document.getElementById('input_triangulo_b');
    const value_lado_b = parseFloat(input_lado_b.value);
    const input_base = document.getElementById('input_triangulo_base');
    const value_base = parseFloat(input_base.value);

    const altura = AlturaTriangulo(value_lado_a, value_lado_b, value_base);
    alert('Su altura es:' + altura + ' cm');
}