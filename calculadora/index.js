const displayvalor_anterior = document.getElementById('valor_anterior');
const displayvalor_actual = document.getElementById('valor_actual');
const botonesnumeros = document.querySelectorAll('.numero');
const botonessimbolos = document.querySelectorAll('.simbolo');

const display = new Display(displayvalor_anterior, displayvalor_actual)

botonesnumeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregar_numeros(boton.innerHTML))})

botonessimbolos.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
})