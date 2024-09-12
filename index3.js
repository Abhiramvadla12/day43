function isvowel (letter){
    if(letter === 'a' || letter === 'e'|| letter === 'i' || letter === 'o' || letter === 'u'){
        return `entered letter ${letter} is a vowel or True` 
    }
    else if(letter === 'A' || letter === 'E'|| letter === 'I' || letter === 'O' || letter === 'U'){
        return `entered letter ${letter} is a vowel or True`
    }
    else{
        return `entered letter ${letter} is a consonant or false`
    }
}
result = isvowel('a');
console.log(result);
result = isvowel('b');
console.log(result);
result = isvowel('A');
console.log(result);