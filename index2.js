function isDivisibleby (num){
    if(num%3==0 && num%5==0){
        return `entered number ${num} is divisible by both 3 and 5 or True` 
    }
    else{
        return `entered number ${num} is not divisible by both 3 and 5 or false`;
    }
}
result = isDivisibleby(15);
console.log(result);
result = isDivisibleby(10);
console.log(result);