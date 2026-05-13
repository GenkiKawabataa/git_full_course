function solve(s:string,e:string,n:number):string{
    if(n==1){
        return s==e ? s : "-1";
    }
    else{
        return s+`c`.repeat(n-2)+e;
    }
}


const s : string = "q";
const e : string = "g";
const n : number = 10;
console.log(solve(s,e,n));
