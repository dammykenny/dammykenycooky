// RANDOW PASSWORD GENERATOR

function generatorPassword(length,  includeLowercase, includeUppercase, includeNumbers, includesymbols){
  
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includesymbols ? symbolChars : "";

    if(length <= 0){
        return  '(password length most be at least 1)';

    }
    if(allowedChars.length ===0){
        return '(at least 1 set of character needs to be selected)';
    }

    for(let i = 0 ; i < length; i++){
        const randomIndex =  Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includesymbols = true;

const password = generatorPassword(passwordLength,  
                                   includeLowercase, 
                                   includeUppercase, 
                                   includeNumbers, 
                                   includesymbols);

console.log(`Generated password: ${password}`);