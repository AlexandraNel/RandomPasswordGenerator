// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}


//variables required from inputs stored as an object for ease of use
var PasswordSettings = {
  charactersLength: 0, //default value overwritten by askPasswordLength
  characterLowerCase: true, //default value overwritten by askPasswordLowerCase
  characterUpperCase: true, //default value overwritten by askPasswordLowerCase
  specialCharacter: true //default value overwritten by askPasswordLowerCase
}

//variables to use once PasswordSettings established stored as an object for ease of use 
var characterSets = {
  lowerCase: "abcdefghijklmnopuvwxyz", //variable for storing lower case letter options  
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", //variable for storing upper case letter options  
  character: "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~" //variable for storing soecial character options  
};

//Placing my if/else branch and variable within a function, now stores
//the characterLength var within it- so now all of these are local within the function
//declaring charctersLength outside of the function to make it GLOBAL and accessible throughout the js

function askPasswordLength() {
  PasswordSettings.charactersLength = prompt("Choose a password *length* between 8-128 characters"); //now reassigning my variable locally- also adjusts its meaning globally
  if (PasswordSettings.charactersLength < 8 || PasswordSettings.charactersLength > 128) { //using an OR statement here allows me to not shorten the else part of the if statement.
    alert("Please use *length* between 8-128 characters") //if my if statmeent is incorrect alert shows
    askPasswordLength() //run this function again if conditions have not been met
  }
}

//confirm if you want upper case letters included yes/no
function askPasswordLowerCase() {
  PasswordSettings.characterLowerCase = confirm("Would you like your password to include lower case letters?");
}

//confirm if you want upper case letters included yes/no
function askPasswordUpperCase() {
  PasswordSettings.characterUpperCase = confirm("Would you like your password to include upper case letters?");
}

//confirm if you want upper case letters included yes/no
function askPasswordSpecialCharacter() {
  PasswordSettings.specialCharacter = confirm("Would you like your password to include special characters?");
}

function generatePassword(){

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() { //first function which is to click the button
askPasswordLength(); //have to CALL the function that has been created in order for it to work
askPasswordLowerCase();
askPasswordUpperCase();
askPasswordSpecialCharacter();
}