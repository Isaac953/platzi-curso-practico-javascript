function calcModa(array){
    let moda, count = {}
    
    array.map( elemento =>{
        (count[elemento])
            ? count[elemento] += 1
            : count[elemento] = 1
    })
    count = Object.entries(count)
    moda = count.reduce( (mayor, elemento) => {
        (mayor[1] > elemento[1])?
            mayor = mayor
            : mayor = elemento
        return mayor
    })
    return moda[0]
}