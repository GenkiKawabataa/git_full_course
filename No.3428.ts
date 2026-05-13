let arry : string[] = [
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa",
    "aaaaaaaaaa"
];
let count : number = 0;
const n : number = 10;

function palindrome(text : string) : boolean{
    let i :number = 0;
    let j :number = text.length-1;
    while(i < j){
        if (text[i] != text[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}



function root_total(i : number,j : number,text : string) : void {
    text += arry[i][j];
    if (i === n-1 && j === n-1){
        if (palindrome(text)){
            count++;
        }
        return;
    }
    if (i < n-1){
        root_total(i+1,j,text);
    }
    if (j < n-1){
        root_total(i,j+1,text);
    }
    return;
}

root_total(0,0,"");
console.log(count);