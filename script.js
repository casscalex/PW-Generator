// Assignment code here

// randomize characters
function randomLower() {
    const lowers = 'abcdefghijklmnopqrstuvwxyz'
    return lowers[Math.floor(Math.random() * lowers.length)];
}

function randomUpper() {
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return uppers[Math.floor(Math.random() * uppers.length)];
}

function randomNumber() {
    const numbers = '0123456789'
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSymbol() {
    const symbols = '!@#$%^&*'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Generate Password Function


function generatePassword() {

    //password length
    let passLength = prompt("How long would you like your Password to be? (Pick a number between 8 and 128)");
    if (passLength < 8 || passLength > 128) {
     alert("Your password must be beween 8 and 128 characters, try again!")
    }

    //password characters 
    let confirmLower = confirm("Click OK if you want to include lowercase letters in your password")
    let confirmUpper = confirm("Click OK if you want to include UPPERCASE letters in your password")
    let confirmNumber = confirm("Click OK if you want to include Numbers in your password")
    let confirmSymbol = confirm("Click OK if you want to include Symbols in your password")

    if (confirmLower) {
        
    }
    if (confirmUpper) {

    }
    if (confirmNumber) {

    }
    if (confirmSymbol) {

    }

    // for loop 
    const randomType = randomLower + randomUpper + randomNumber + randomSymbol;
    for (let i = 0; i < passLength; i += randomType) {

    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);