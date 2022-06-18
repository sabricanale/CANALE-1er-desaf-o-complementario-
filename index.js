let nombre = prompt("Ingrese nombre y apellido del estudiante(ESC para salir)")

while(nombre !=="" && nombre!=="ESC"){

    alert(`Ingresaste a ${nombre} a la plataforma`)
    let numeroCalificaciones = parseInt(prompt("¿Cuántas evaluaciones realizó a lo largo del año?"))
    let sumatoria = 0
    let promedio = 0
    
    for(let i=1; i<=numeroCalificaciones; i++){
        let calificacion = parseFloat(prompt("Ingrese la calificación " + i))
        if(calificacion <0 || calificacion >10){
            alert("El dato ingresado no es correcto")
            sumatoria = 0
            break  
        }else{
            sumatoria = sumatoria + calificacion  
        }        
    }
    if(sumatoria !== 0){
        promedio = sumatoria / numeroCalificaciones
        alert(`El promedio de ${nombre} es ${promedio}`)
        nombre = prompt("Ingrese nombre y apellido del próximo estudiante")  
    }
    else{
        nombre = prompt("Ingrese nuevamente el nombre y apellido del estudiante")  
    }        
}




