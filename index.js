function leapYear (year){
    if(year%400 == 0 || (0 == year % 4) && (0 != year % 100)){
        return `entered year ${year} is a leap year or True` 
    }
    else{
        return `entered year ${year} is not a leap year or false`;
    }
}
result = leapYear(2020);
console.log(result);
result = leapYear(2021);
console.log(result);