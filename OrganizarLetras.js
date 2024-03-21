let texto = 'tabido'
let vogal = ["a","e","i","o","u"];

class Permuta{
    constructor(texto){
        Object.defineProperties(this, {
            textoArray: {
                enumerable:true,
                configurable:true,
                writable: true,
                value: Array.from(texto)
        }})
    }
   falaTexto(){
    let manipula = this.textoArray;
    let tamanho = this.textoArray.length

    let varControll = manipula.filter(function(valor){
        if(vogal.indexOf(valor) !== -1){
            return valor
        }
    })
    
   async function calcula(arrayStart){
      let notVogal = Number(arrayStart.length - varControll.length)
      let fatorialNumber = 1
      let resultado = 0
      try{
         for(let n = notVogal; n > 0; n--){
                fatorialNumber = fatorialNumber*n
          }
      }catch{
          console.log(e)
      }
    
      try{
         for(let i = arrayStart.length; i > 0; i--){
            if(resultado == 0){
                 resultado = notVogal
             }else{
                    resultado = resultado * i
             }
                  };
      }catch{
        
      }
      
         resultado = resultado / fatorialNumber
         console.log(resultado)
    }
    calcula(this.textoArray)
}
}

const p1 = new Permuta(texto)
p1.falaTexto()