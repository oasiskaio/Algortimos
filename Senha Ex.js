// 3 letras maiusculas consecutivas + ' - ' 
// mais 6 algarismos + ' - '
// Mais qualquer letra qualquer0
const mai = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const alga = [0,1,2,3,4,5,6]

class GerarSenha{ 
    constructor(){
      this.ArrayFinal = []
      this.array_foramatado = ''
      
      const promises = [
        this.primeiroCiclo(),
        this.segundoCiclo(),
        this.terceiroCiclo(),
        this.formataçã()
       ]

      Promise.all(promises)
      .then(valores => {
        console.log(this.array_foramatado)
      })
    }

    Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    };
    
    primeiroCiclo(){
        let valorAleatorio = this.Aleatorio(0, 25)
        for(let i = 3; i > 0; i--){
            if(valorAleatorio > 25){
                valorAleatorio = 0
            }
            this.ArrayFinal.push(mai[valorAleatorio])
            valorAleatorio += 1
        }
    }  ;
    segundoCiclo(){
       
        for(let i = 6; i > 0; i--){
            let valorAleatorio = this.Aleatorio(0, 6)
            this.ArrayFinal.push(alga[valorAleatorio])
        }
    };
    terceiroCiclo(){
        let valorAleatorio = this.Aleatorio(0, 25);
        for(let i = 1; i > 0; i--){
            this.ArrayFinal.push(mai[valorAleatorio].toLowerCase())
        }
        return this.ArrayFinal
    };
    
    formataçã(){
        this.ArrayFinal.splice(3,0,'-')
        this.ArrayFinal.splice(10,0,'-')
        this.array_foramatado = this.ArrayFinal.join('').toString()
        return this.array_foramatado
    }
}
const p1 = new GerarSenha()
