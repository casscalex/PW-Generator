// Assignment Code

//Arrays
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var characters = ['!','@','#','$','%','^','&','*']


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // password length loop
    var passLength = promt('How long would you like your password to be? Select a number between 8 and 128');

    while (passLength <= 7 || passLength >= 129) {
        alert('Password length must be between 8-128 characters, try again!');
        var passLength = promt('How long would you like your password to be? Select a number between 8 and 128');

    alert('Your password will be ${passLength} long')
    }

    // Determine critera for Password
    var confirmUpper = confirm('Click OK if you want to use UPERCASE letters');
    var confrimLower = confirm('Click OK if you want to use lowercase letters');
    var confirmNumbers = confirm('Click OK if you want to use NUMBERS')
    var confrimCharacters = confirm('Click OK if you want to us CHARACTERS')

    while (confirmUpper === flase && confrimLower === flase && confirmNumbers === flase && confrimCharacters === flase) {
        alert("You must choose at least one critera, try again!");
        var confirmUpper = confirm('Click OK if you want to use UPERCASE letters');
        var confrimLower = confirm('Click OK if you want to use lowercase letters');
        var confirmNumbers = confirm('Click OK if you want to use NUMBERS')
        var confrimCharacters = confirm('Click OK if you want to us CHARACTERS')
    }

    var passCritera = []
    if (confirmUpper) {
        passCritera = passCritera.concat(upperCase)
    }
    if (confrimLower) {
        passCritera = passCritera.concat(lowerCase)
    }
    if (confirmNumbers) {
        passCritera = passCritera.concat(numbers)
    }
    if (confrimCharacters) {
        passCritera = passCritera.concat(characters)
    }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);