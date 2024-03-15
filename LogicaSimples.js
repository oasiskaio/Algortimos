const pessoa = {
    classe: "normal", 
    salario: null
}
const verificaSalario = pessoa.classe == "normal" ?
 pessoa.salario = 2000: pessoa.salario = 1000; 
 console.log(pessoa.salario)


 const pessoa1 = {
    classe: "boss", 
    salario: null
}
 if (pessoa1.classe == "normal") {
    pessoa1.salario = 3000
 }
 else if (pessoa1.classe == "boss") {
    pessoa1.salario = 4000
 }
 else {
    pessoa1.salario = "não possui"
    pessoa.classe = "não possui"
 }
 console.log(pessoa1.salario, pessoa1.classe)

