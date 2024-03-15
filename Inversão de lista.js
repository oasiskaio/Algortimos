const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12]
class Inverter{
  constructor(lista){
     this.lista = lista
     this.listainvertida = []
  }
  iniciar(){
    for(let i = (this.lista.length - 1); i >= 0; i--){
    this.listainvertida.push(this.lista[i])
    }
    console.log(this.listainvertida)
  }

}
p1 = new Inverter(numeros)
p1.iniciar()