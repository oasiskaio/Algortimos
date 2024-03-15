const numeros = [1,2 , 5, 6, 7, 8, 9, 2, 3,23, 4, 54, 46]
class Pilha {
  constructor(lista){
     this.lista = lista
  }
  mostrar(){
    for(let i = (this.lista.length - 1); i >= 0; i --){
    console.log(this.lista[i])
     }
  }
}
 p1 = new Pilha(numeros)
 p1.mostrar()