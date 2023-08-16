function minutos(min, km){
    let resultadoMin = 0
    let resultadoKm = 0
    let valorMin = 0
    let valorKm = 0

    if(min <= 20){
       let valormin = min * 50
    } else if (min > 20){
        let maiorQ20 = (min - 20) 
        resultadoMin = maiorQ20 * 30
            resultadoMin += (min - maiorQ20) * 50
            
}
    if(km <= 10){
        valorKm = km * 70
    } else if (km > 10){
        let maiorQ10 = (km - 10) 
        resultadoKm = maiorQ10 * 50
            resultadoKm += (km - maiorQ10) * 70
        
}
let resultadoFinal = resultadoMin + resultadoKm 
console.log(resultadoFinal)
}
minutos(10,20)

