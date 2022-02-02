// Función principal que valida el número ingresado y además llama a las funciones de multiplicar y factorial

const validar = () => {
    let numeroingresado = +prompt("Ingrese un numero de 1 al 20");
    // validar que el numero ingresado sea entre 1 y 20
    while (numeroingresado < 1 || numeroingresado > 20) {
        numeroingresado = +prompt("Ingrese un numero de 1 al 20");
    }   

    // llamado a las funciones multiplicar y factorial
        multiplicar(numeroingresado);
        factorial(numeroingresado)
};

// Función para multiplicar
const multiplicar = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// función para sacar el factorial
const factorial = (num) => {
    let total = 1;
    for (i = 1; i <= num; i++) {
        total = total * i;
        console.log(`El factorial de ${i} es ${total}`);
    }
}

validar();









