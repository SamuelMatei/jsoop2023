function fibonacciValue ( nr: number): number{
    if ( nr < 2){
        return 1;
    }
    let prev: number= 0;
    let current: number = 1 ;

    let i : number;
    for (1 = 2; i <= nr; i++){
        [prev, current] = [current, prev + current];
    }
    return current


}