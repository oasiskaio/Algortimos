class ProgressaoAritmetica{
  constructor(inicial, razao, qtd){
   this.inicial = inicial
   this.razao = razao
   this.qtd = qtd

   this.lista = []
  };
  mostra(){
    for(let i = this.inicial; i <= this.qtd; i++){
      if(i >= 2){
         this.lista.push(this.inicial += this.razao)
      }
      else{
        this.lista.push(i)
      }
  }
  console.log(this.lista)
  }
}
p1 = new ProgressaoAritmetica(1, 3, 10)
p1.mostra()
