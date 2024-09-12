function isPositive(num){
    if(num > 0){
        return `entered number ${num} is a positive number or True` 
    }
    else if(num == 0){
        return `given number is zero it is nethier positive nor negative`
    }
    else{
        return `entered number ${num} is a negative or false`;
    }
}
result = isPositive(5);
console.log(result);
result = isPositive(-3);
console.log(result);
result = isPositive(0);
console.log(result);