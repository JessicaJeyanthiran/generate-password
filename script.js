// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here

// Variable Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 

var confirmLength;
var confirmNumericCharacter;
var confirmSpecialCharacter;
var confirmLowerCase;
var confirmUpperCase;


// Determine parameters of password 

var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");   
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
     


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


/* START OF FUNCTIONS*/

function generatePassword() {
  var genLength = window.prompt("How many characters do you want the password to be? Enter a value between 8 - 128.");

  if (genLength <= 7 || genLength >= 129) {
      window.alert("Invalid entry. Please enter a value between 8 - 128");
      generatePassword();
  }
  else{
    console.log("Password length is " + genLength);