class Display{
    constructor(displayvalor_anterior, displayvalor_actual){
        this.displayvalor_actual = displayvalor_actual;
        this.displayvalor_anterior = displayvalor_anterior;
        this.calculador = new  Calculator();
        this.tipo_operacion = undefined
        this.valor_actual = ''
        this.valor_anterior = ''
        this.signos = {
            sumar: '+',
            restar: '-',
            mult: 'x',
            dividir: '/'
        }
    }
    borrar(){
    this.valor_actual = this.valor_actual.toString().slice(0,-1);
    this.imprimir_valores();
    }

    clean(){
        this.valor_actual = '';
        this.valor_anterior ='';
        this.tipo_operacion = undefined;
        this.imprimir_valores();
    }

    computar(tipo){
        this.tipo_operacion !== 'igual' && this.calcular();
        this.tipo_operacion = tipo;
        this.valor_anterior = this.valor_actual || this.valor_anterior;
        this.valor_actual = ''
        this.imprimir_valores();
    }

    agregar_numeros(numero){
        if(numero=='.' && this.valor_actual.includes('.')) return

        this.valor_actual = this.valor_actual.toString() + numero.toString();
        this.imprimir_valores();

    }

    imprimir_valores(){
        this.displayvalor_actual.textContent = this.valor_actual;
        this.displayvalor_anterior.textContent = `${this.valor_anterior} ${this.signos[this.tipo_operacion] || ''}`;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valor_anterior);
        const valorActual = parseFloat(this.valor_actual);
        
        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valor_actual = this.calculador[this.tipo_operacion](valorAnterior, valorActual);
        
    }
}
