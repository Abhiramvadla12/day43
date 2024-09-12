function isvowel (letter){
    if(letter === 'a' || letter === 'e'|| letter === 'i' || letter === 'o' || letter === 'u'){
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