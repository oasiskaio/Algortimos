let texto = 'tabido'

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
    try{
      console.log(this.textoArray)
    }
    catch(e) { console.log(e) }

}
}

const p1 = new Permuta(texto)
p1.falaTexto()