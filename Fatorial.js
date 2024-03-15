function Fatorial(n){
   let dados_for = 1;
    for(let i = n; i > 0; i-- ){
        if(!dados_for){
          dados_for = i
        }
        else{
           dados_for = dados_for * i
        }
    }
    console.log(dados_for, typeof(dados_for))
}

Fatorial(6)