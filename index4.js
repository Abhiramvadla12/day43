function isUppercase (letter){
    if(letter === 'A' || letter === 'B'|| letter === 'C' || letter === 'D' || letter === 'E' 
        ||letter === 'F' || letter === 'G'|| letter === 'H' || letter === 'I' || letter === 'J'
         ||letter === 'K' || letter === 'L'|| letter === 'M' || letter === 'N' || letter === 'O'
          ||letter === 'P' || letter === 'Q'|| letter === 'R' || letter === 'S' || letter === 'T'
           ||letter === 'U' || letter === 'V'|| letter === 'W' || letter === 'X' || letter === 'Y' || letter == 'Z'
    ){
        return `entered letter ${letter} is a uppercase letter or True` 
    }
    else if(letter === 'a' || letter === 'b'|| letter === 'c' || letter === 'd' || letter === 'e' 
        ||letter === 'f' || letter === 'g'|| letter === 'h' || letter === 'i' || letter === 'j'
         ||letter === 'k' || letter === 'l'|| letter === 'm' || letter === 'n' || letter === 'o'
          ||letter === 'p' || letter === 'q'|| letter === 'r' || letter === 's' || letter === 't'
           ||letter === 'u' || letter === 'v'|| letter === 'w' || letter === 'x' || letter === 'y' || letter == 'z'){

            return `entered letter ${letter} is a lowercase letter or false`
    }
    else{
        return `entered is not letter it is symbol or somrthing other than aplahabets`
    }
}
result = isUppercase('A');
console.log(result);
result = isUppercase('a');
console.log(result);
result = isUppercase('$');
console.log(result);