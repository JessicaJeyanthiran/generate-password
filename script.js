// Variable Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 

var confirmLength;
var choices;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


/* START OF FUNCTIONS*/

function generatePassword() {
  var genLength = window.prompt("How many characters do you want the password to be? Enter a value between 8 - 128.");

  if (genLength <= 7 || genLength >= 129) {
      window.alert("Invalid entry. Please enter a value between 8 - 128");
      generatePassword();
  }
  
  else{
    console.log("Password length is " + genLength);


//User wants lowercase letters?
  var needLower = confirm("Would you like lowercase characters to be included?");
  
//User wants uppercase letters?
  var needUpper = confirm("Would you like uppercase characters to be included?");
    
//User wants numbers?
  var needNumber = confirm("Would you like number characters to be included?");
    
//User wants special characters?
  var needSpecial = confirm("Would you like special characters to be included?");


while (needLower !== true && needUpper !== true && needNumber !== true && needSpecial !== true){
    window.alert("You must select at least 1 parameter.")
    var needLower = confirm("Would you like lowercase characters to be included?");
    var needUpper = confirm("Would you like uppercase characters to be included?");
    var needNumber = confirm("Would you like number characters to be included?");
    var needSpecial = confirm("Would you like special characters to be included?")
    }
  }

if (needSpecial && needNumber && needUpper && needLower) {
    choices = specialChar.concat(number, lowerCase, upperCase);
}

// Else if for 3 positive options
else if (needSpecial && needNumber && needUpper) {
  choices = specialChar.concat(number, upperCase);
}
else if (needSpecial && needUpper && needLower) {
  choices = specialChar.concat(upperCase, lowerCase);
}
else if (needSpecial && needNumber && needLower) {
  choices = specialChar.concat(number, lowerCase);
}
else if (needNumber && needLower && needUpper) {
    choices = number.concat(lowerCase, upperCase);
}
// Else if for 2 positive options 
else if (needSpecial && needNumber) {
    choices = specialChar.concat(number);

} else if (needSpecial && needUpper) {
  choices = specialChar.concat(upperCase)

} else if (needSpecial && needLower) {
  choices = specialChar.concat(lowerCase)
}
else if (needLower && needNumber) {
    choices = lowerCase.concat(number);

} else if (needLower && needUpper) {
    choices = lowerCase.concat(upperCase);

} else if (needUpper && needNumber) {
    choices = upperCase.concat(number);
}
// Else if for 1 positive option
else if (needSpecial) {
    choices = specialChar;
}
else if (needNumber) {
    choices = number;
}
else if (needLower) {
    choices = lowerCase;
}
else if (needUpper) {
    choices = choices.concat(upperCase);
};

 //Pass all true parameters into string
 var passwordString = [];

 //check if includeLower will pass to passwordString string
 var includeLower = lowerCase.split("");

 if (needLower === true) {
   passwordString = passwordString.concat(includeLower);
   console.log("Lowercase to be included");
 }
 else{
   console.log("Lowercase will not be included");
 }

 //check if includeUpper will pass to passwordString string
 var includeUpper = upperCase.split("");

 if (needUpper === true) {
   passwordString = passwordString.concat(includeUpper);
   console.log("Uppercase letters to be included");
 }
 else {
   console.log("Uppercase letter will not be included");
 }

  //check if includeNumber will pass to passwordString object
  var includeNumber = number.split("");

  if (needNumber === true) {
   passwordString = passwordString.concat(includeNumber);
   console.log("Numbers to be included");
 }
 else {
   console.log("Numbers will not be included");
   console.log("String that password will generate from " + passwordString);
 }

//check if includeSpecial will pass to passwordString object
var includeSpecial = specialChar.split("");

if (needSpecial === true) {
 passwordString = passwordString.concat(includeSpecial);
 console.log("Special characters to be included");
 }
 else {
 console.log("Special characters will not be included");
 }

 //initiate randomly generated password
 var finalPassword = ""; 
 for (var i = 0; i < genLength; i++) {
   finalPassword += passwordString[Math.floor(Math.random() * passwordString.length)];
   console.log(finalPassword);

 }
 return finalPassword;

}


function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password") ; // return to html
 
 passwordText.value = finalPassword;
}

/*END OF FUNCTIONS*/



//On click, call generatePassword
generateBtn.addEventListener("click", writePassword);

