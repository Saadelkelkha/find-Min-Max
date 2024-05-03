let min = (x, y) =>{
    if (x > y){
        return y;
    }else{
        if (x < y){
            return x
        }else{
            return "egal"
        }
    }
}
let max = (x, y) =>{
    if (x > y){
        return x;
    }else{
        if (x < y){
            return y
        }else{
            return "egal"
        }
    }
}
let x = parseFloat(prompt("entre nombre"));
let y = parseFloat(prompt("entre nombre"));
while(isNaN(x) == false || isNaN(y) == false){
    if (isNaN(x)){
        let x = parseFloat(prompt("entre nombre"));
    }
    if (isNaN(y)){
        let y = parseFloat(prompt("entre nombre"));
    }
}
document.write(`La plus petite valeur est ${min(x,y)}`);
document.write("<br/>");
document.write(`La plus grande valeur est ${max(x,y)}`)