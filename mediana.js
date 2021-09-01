function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// const lista1 = [
//     100,
//     200,
//     500,
//     // 800,
//     400000000,
// ];

function calcularMediana(lista) {

    // const listaOrdenada = [5, 9, 10, 100, 5, 20];
    const listaOrdenada = lista;
    listaOrdenada.sort(function (a, b) {
        return a - b;
    });
    console.log(listaOrdenada);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = listaOrdenada[mitadLista];

    }
    return mediana;
}