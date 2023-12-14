// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
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

//I want to aggregate the User Input data into an array, and use that array to create a function with conditional statement to consolidate the user input then run it trhough the random generator
var userChoices = [PasswordSettings.characterLowerCase, PasswordSettings.characterUpperCase, PasswordSettings.specialCharacter];

//Placing my if/else branch and variable within a function, now stores
//the characterLength var within it- so now all of these are local within the function
//declaring charctersLength outside of the function to make it GLOBAL and accessible throughout the js

function askPasswordLength() {
  PasswordSettings.charactersLength = prompt("Choose a password *length* between 8-128 characters"); //now reassigning my variable locally- also adjusts its meaning globally
 
  if (Number.isNaN(parseInt(PasswordSettings.charactersLength))){ //this converts the user input string into a number- if it is not a number paseInt will return Nan
    alert("Please enter a number") //if Nan returned ie. not a number, the user data is incorrect and this alert shows
    askPasswordLength() //run this function again if conditions have not been met
  }else if (PasswordSettings.charactersLength < 8 || PasswordSettings.charactersLength > 128)  //make sure the user input is between 8 and 128 characters
    {
    alert("Password length must be between 8-128 characters") //if my if statmeent is incorrect alert shows
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

//This function takes the user input data (User Choices Varaible) and checks if its true ie. selected. then shoots that over to the randomiser function
function consolidateUserChoices(userChoices){
  var combinedCharacterSets="";
    if (userChoices[0] === true){
    combinedCharacterSets+=characterSets.lowerCase;}
    if (userChoices[1] === true){
    combinedCharacterSets+=characterSets.upperCase;}
    if (userChoices[2] === true){
    combinedCharacterSets+=characterSets.character;}
    
  return combinedCharacterSets;
}

//I am now going to use my combinedCharacterSets string as a perameter to randomise the selection of the specified length to create the password
function Randomiser(combinedCharacterSets){
  var randomPassword = ""; //this is what we are trying to generate
  var i=0; //while loop does not allow i variable to be difined inside of it like for
  while (i < PasswordSettings.charactersLength) { //while loops through the index, as long as 0 is less than the user input desired password length
    var randomIndex = Math.floor(Math.random() * combinedCharacterSets.length); //this gives us a random whole integer
    randomPassword +=combinedCharacterSets[randomIndex];
    i++;
  }  

  return randomPassword
}
//have to CALL the function that has been created in order for it to work, these are all the functions running requiring user input
function generatePassword() {
  askPasswordLength(); 
  askPasswordLowerCase();
  askPasswordUpperCase();
  askPasswordSpecialCharacter();

  //this now re-establishes the combinesCharacterSets variable based on the function of putting the choices into a string
  var combinedCharacterSets = consolidateUserChoices(userChoices);
  
  return Randomiser(combinedCharacterSets); //returns the generated password
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

