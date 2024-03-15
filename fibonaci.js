function fibonaci(n) {
  let lista = [1]
  for(let i = 1; i <= n; i++){
    if(i >= 3){
        lista.push(lista[i - 1] + lista[i - 2])
    }else{
        lista.push(i)
    }
  }
   console.log(lista)
}
fibonaci(10)