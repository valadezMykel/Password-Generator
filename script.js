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
var numbersArr = ["numbers", "123456789".split('')];
var specialArr = ["speacial", "!#$%&*".split('')];
var arrCharacterArrs = []; 
var passwordToSet= "";

// Start of function being called
function generatePassword(){
  // Reset Passord
  passwordToSet="";
  // Keepgoing can shut off the code early
  keepGoing= true;
  while (keepGoing){

    var lengthOfPassword = prompt("How long would you like your password? (Minimum 8 Maximum 128)");
    
    // checks to see if cancel was pressed
    if (lengthOfPassword === null){
      alert("Password Creation Canceled");
      keepGoing = false;
      break;
    }

    // Checks to make sure the password is in acceptable ranges
    parseInt(lengthOfPassword);
    if(8 <= lengthOfPassword && lengthOfPassword <= 128){
      alert("password length of "+lengthOfPassword+" has been selected");
      break;
    }
    else if(isNaN(lengthOfPassword)){
      // Checks if user has enter non numbers
      alert("Input can only contain numbers");

    }else{
      alert("password lenght not within acceptable range");
    }

    
  }
  // End of while loop containing password length set up

  // Ends the code early if the use has opted to exit
  while(keepGoing){
    
    // resets the character types selected
    arrCharacterArrs = [];
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
        // sssh they will reset at the start of the loop
      }

    }
    
    // Show when no character types selected, useres can reslect or quit
    if(!confirm("you must select atleast one type of character to continue.  Would you like to reselect characters?")){
      keepGoing = false;
      break;
    }

  }//End of while loop containing character selection

  if(keepGoing){
    
    console.log(passwordToSet);
    // Begin Password Generation
    for(let i = 0; i < lengthOfPassword; i++){
      
      passwordToSet = passwordToSet+rngPicker((rngPicker(arrCharacterArrs))[1]);
      
    }
    console.log(passwordToSet);

    // this code garenties that all selected character types apear

    // for (let index = 0; index < arrCharacterArrs.length; index++) {
    //   passwordToSetTemp = passwordToSetTemp+ rngPicker(arrCharacterArrs[index][1]);
    // }
    // return passwordToSet;


    for (let j = 0; j < arrCharacterArrs.length; j++) {
      var portion = Math.floor(lengthOfPassword / arrCharacterArrs.length)
      console.log(portion);
      passwordToSet.replace(passwordToSet.charAt(Math.floor(Math.random() * portion)+((portion * j)+1)), rngPicker(arrCharacterArrs[j][1]));
      
    }
    console.log(passwordToSet);
    
    return passwordToSet;

  }

}// end of generate password function
// TO DO : make the password contain all the slected types but in a way that is random


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
