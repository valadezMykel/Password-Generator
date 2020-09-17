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
    var lengthOfPassword = parseInt(prompt("How long would you like your password? (Minimum 8 Maximum 126)"));

    // Checks to make sure the password is in acceptable ranges
    if(8 <= lengthOfPassword && lengthOfPassword <= 126){
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
    
    let tempchecker = arrCharacterArrs;
    // asks the user for specifications of their password
    var lowerCaseOn = confirmPreference("lower case", lowerCaseArr);
    var upperCaseOn = confirmPreference("upper case", upperCaseArr);
    var numbersOn = confirmPreference("numerical", numbersArr);
    var specialOn = confirmPreference("speacial", specialArr);
    
    // incase no characters are selected
    console.log(arrCharacterArrs);
    if(arrCharacterArrs != tempchecker){
      break;
    }
    
    if(!confirm("you must select atleast one type of character to continue.  Would you like to reselect character?")){
      keepGoing = false;
      break;
    }

  }

  if(keepGoing){
    // Confirms password parameters
    alert("you have elected to have a password that is "+lengthOfPassword+" characters long, which contains the character types: "+getFirstElements(arrCharacterArrs)+".  Now generating password.");

    // Begin Password Generation
    for(let i = 0; i < lengthOfPassword-arrCharacterArrs.length; i++){
      let newTempArr = rngPicker(arrCharacterArrs);
      let newTempArr2 = newTempArr[1];
      passwordToSet = passwordToSet+rngPicker(newTempArr2);
      
    }

    for (let index = 0; index < arrCharacterArrs.length; index++) {
      passwordToSet = passwordToSet+ rngPicker(arrCharacterArrs[index][1]);
      console.log(passwordToSet);
    }
    console.log(passwordToSet);
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

  let tof= confirm("would you like your password to contain " + string + " characters?");
  if(tof){
    arrCharacterArrs.push(arr);
  }
  return tof;
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
