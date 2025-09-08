function funcaoSozinha(params) {
    console.log(` funcaoEmUmObjeto e anonima ${params}`);  
}

const obj = {
    nome: 'Jailson Santos',
    funcaoEmUmObjeto: function (params = 'valor default') {
        console.log(` funcaoEmUmObjeto e anonima ${params} ${this.nome}`);        
    },

    arrouwFunction: (idade = 0) => {
        console.log(`É maior de 18 anos ? ${idade >= 18}`);
        
    }
}

const arrouwFunction = (valor1, valor2) => {
    console.log(`Somando valores ${valor1 + valor2}`);    
}


const imprimirSoma = function(valor1, valor2) {
    console.log(`Somando valores função anonima ${valor1 + valor2}`);    
}



obj.arrouwFunction(18)
// arrouwFunction(1, 2)
// imprimirSoma(1, 2)
