const numeros = [1, 2, 3, 5, 6, 87, 8, 9, 0, 0, 0, 444]

class Valores {
    constructor(n, lista){
        this.n = n
        this.lista = lista
    }

    qualMaior() {
       let inicial = this.lista[0]
       for(let i of this.lista){
        if(i > inicial){
            inicial = i
        }
       };
       console.log(inicial);
    }

    qualMenor() {
        let inicial = this.lista[0]
        for(let i of this.lista){
         if(i < inicial){
             inicial = i
         }
        };
         console.log(inicial);
     }
    taNaLista(){
        if(this.lista.indexOf(Number(this.n))  !== -1 ){
            console.log(' O numero digitado esta na lista ')
        }
        else{ 
            console.log(' O numero digitada não esta na lista')
        };
    }
}
const teste1 = new Valores(2333, numeros)
teste1.qualMaior()
teste1.taNaLista()