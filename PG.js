class Pa{
    constructor(n1, qt, r){
         this.n1 = n1
         this.qt = qt
         this.r = r
    }
    start(){
        let varControl = 0
        let res = []
        for(let i = this.qt; i > 0; i--){
          if(res.length == 0){
            res.push(this.n1);
            continue;
          }else{
            res.push(Number(res[varControl] * this.r))
            varControl += 1
          }
          
          
        }
        console.log(res)
    }
}
const teste1 = new Pa(2, 10, 4)
teste1.start()