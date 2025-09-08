const prod1 = {
    descricao: 'Jota Santos',
    valor: 10.50,
    printData: function() {
        console.log(`Nome : ${this.descricao}`);
        console.log(`Valor : ${this.valor}`);
                
    }, 
    dizerOla: function() {
    console.log(`Olá, meu nome é ${this.descricao}`);
  }
}


prod1.printData()
prod1.dizerOla()