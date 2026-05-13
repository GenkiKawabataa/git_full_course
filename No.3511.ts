function powerJudge(desk : number,chaer : number,power : number): boolean{
  if(desk+chaer <= power){
    return true;
  }
  else{
    return false;
  }
}

let a : number = 100;
let b : number = 100;
let c : number = 100;
let d : number = 100;
let s : number = 20000;

if(powerJudge(a*c,b*d,s)){
  console.log(`できる`);
}
else{
  console.log(`できない`);
}