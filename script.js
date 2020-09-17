///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//
var keepGoing = true;
var lowerCaseArr = ["lower case", "abcdefghijklmnopqrstuvwxyz".split('')];
var upperCaseArr = ["upper case", "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('')];
var numbersArr = ["numbers", "1234567890".split('')];
var specialArr = ["speacial", "!#$%&*".split('')];
var arrCharacterArrs = []; 
var passwordToSet= "";

// Start of function being called
function generatePassword(){
  // Keepgoing can shut off the code early
  keepGoing= true;
  while (keepGoing){

    // TO DO ITEM
    // fix it so if something other than a number is put in it lets you retry
    var lengthOfPassword = parseInt(prompt("How long would you like your password? (Minimum 8 Maximum 128)"));

    // Checks to make sure the password is in acceptable ranges
    if(8 <= lengthOfPassword && lengthOfPassword <= 128){
      alert("password length of "+lengthOfPassword+" has been selected");
      break;
    }
    // Checks if user has pressed cancel also non numbers are checked
    if(isNaN(lengthOfPassword)){
      keepGoing= false;
      break;
    }

    alert("password lenght not within acceptable range");
    
  }
  // End of while loop containing password length set up

  // Ends the code early if the use has opted to exit
  while(keepGoing){
    
    // asks the user for specifications of their password
    confirmPreference("lower case", lowerCaseArr);
    confirmPreference("upper case", upperCaseArr);
    confirmPreference("numerical", numbersArr);
    confirmPreference("speacial", specialArr);
    
    // Confirms password parameters with user
    if(arrCharacterArrs.length > 0){
      if(confirm("you have elected to have a password that is "+lengthOfPassword+" characters long, which contains the character types: "+getFirstElements(arrCharacterArrs)+".  Would you like to generating password using these characters?")){

        break;
      }
      else{
        alert("Your character selections have been reset");
      }

    }
    
    // Show when no character types selected, useres can reslect or quit
    if(!confirm("you must select atleast one type of character to continue.  Would you like to reselect characters?")){
      keepGoing = false;
      break;
    }

  }//End of while loop containing character selection

  if(keepGoing){
    
    
    // Begin Password Generation
    for(let i = 0; i < lengthOfPassword-arrCharacterArrs.length; i++){
      
      passwordToSet = passwordToSet+rngPicker((rngPicker(arrCharacterArrs))[1]);
      
    }

    // this code garenties that all selected character types apear
    for (let index = 0; index < arrCharacterArrs.length; index++) {
      passwordToSet = passwordToSet+ rngPicker(arrCharacterArrs[index][1]);
    }
    return passwordToSet;

  }

}// end of generate password function


// Pulls the first element from a multidimensional array
// character arrays in this code have their string names in the first element
function getFirstElements(multiArray){
  var comopiledCharacterSelected;
  for (let index = 0; index < multiArray.length; index++) {
    if(index === 0){
      comopiledCharacterSelected= multiArray[index][0];

    }else{ 
      comopiledCharacterSelected= comopiledCharacterSelected + " ,"+ multiArray[index][0];
    }
 }
 return comopiledCharacterSelected;
}


// takes a random element from an array
function rngPicker(array){

  return array[(Math.ceil(Math.random()* array.length))-1];
}

// used when confirming character type selection
function confirmPreference(string, arr){

  if(confirm("would you like your password to contain " + string + " characters?")){
    arrCharacterArrs.push(arr);
  }
  
}

// Below is code not to be touched


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
