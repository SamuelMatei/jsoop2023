class Carte {
    static reducere = 10;
    constructor(titlu,autor,editura,an,nrPagini) {
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an = an;
       
        this.nrPagini = nrPagini;
    }
    get pret(){
        console.log('sunt in getter')
        return this.pret;
    }
    set pret(pretNou){
        console.log('sunt in setter')
        this.pretNou;
    }

    
    info(){
        console.log(`Titlu este ${this.titlu} autor este ${this.autor}`)
    }



    deschidCartea(pagina){
        console.log(`Am deschis cartea la pagina 15$`);
    }
    randomIntFromInterval(min, max) { // min and max included 
       return Math.floor(Math.random() * (max - min + 1) + min)
   }
//    modificaPret(pretNou){
//        if(pretNou <100 && pretNou > this.pret){
//            this.pret = pretNou;
//        }
      
//    }
//    reducere(procent){
//       // this.pret = this.pret - (procent/100* this.pret)
//        this.pret -=(procent * this.pret)/100
//        console.log( `pretul cu reducere este ${this.pret}`);
//    }

   pretNou(){
    this.pret = this.pret -(Carte.reducere * this.pret) / 100 
   }

   modificaPret(diferenta){
    this.pret = this.pret - this.diferenta ;
   }
     

}





// Curs 2 Module
// export { Carte }

