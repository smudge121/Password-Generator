// Assignment code here
var criteria = {
  charLength:0,
  lower: false,
  upper: false,
  numeric: false,
  special: false,
}

var numbers = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"  // Use backslash as escape character

// Function called when button is selected by user
function generatePassword()
{
  criteria.charLength = prompt("How many characters in the password?");
  if (!minMaxCheck())
  {
    repeatNumPrompt(false);
  }
  if (!isNumCheck())
  {
    repeatNumPrompt(true);
  }
  
  criteria.lower = confirm("Select Ok if your password can contain lower case characters.");
  criteria.upper = confirm("Select Ok if your password can contain upper case characters.");
  criteria.numeric = confirm("Select Ok if your password can contain Numeric characters.");
  criteria.special = confirm("Select Ok if your password can contain special characters.");
  if (!charCheck())
  {
    repeatCharPrompt();
  }


  return charSelect();
}

// function that randomly generates the new password
function charSelect()
{
  var password = '';
  var base = '';

  if (criteria.lower)
    base += lower;
  if (criteria.upper)
    base += upper;
  if (criteria.numeric)
    base += numbers;
  if (criteria.special)
    base += special;

  for (var i=0; i<criteria.charLength; i++)
  {
    password += base[Math.floor(Math.random() * base.length) ];
  }
  return password;
}

// function to be called if user inputs a faulty character length
function repeatNumPrompt(isLetter)
{
  if (!isLetter)
  {
    criteria.charLength = prompt("Sorry, character length must be between 8 and 128. Insert again.");
    if (!minMaxCheck())
    {
     repeatNumPrompt(false);
    }
    if (!isNumCheck())
    {
      repeatNumPrompt(true);
    }
  }
  else if (isLetter)
  {
    criteria.charLength = prompt("Length can only contain numbers. Please insert a number between 8 and 128.");
    if (!minMaxCheck())
    {
     repeatNumPrompt(false);
    }
    if (!isNumCheck())
    {
      repeatNumPrompt(true);
    }
  }
  
}
// function to be called if user does not select any character types
function repeatCharPrompt()
{
  alert("No valid characters were selected, please select again.");
  criteria.lower = confirm("Select Ok if your password can contain lower case characters.");
  criteria.upper = confirm("Select Ok if your password can contain upper case characters?");
  criteria.numeric = confirm("Select Ok if your password can contain Numeric characters?");
  criteria.special = confirm("Select Ok if your password can contain special characters?");
  if (!charCheck())
  {
    repeatCharPrompt();
  }
}

// checks if submitted value is a number, returns false if the check is failed
function isNumCheck()
{
  for (var i = 0; i < criteria.charLength.length; i++)
  {
    if (!numbers.includes(criteria.charLength[i]))
      return false;
  }
  return true;
}

// checks if submitted number is within given range, returns false if the check is failed
function minMaxCheck()
{
  if (criteria.charLength < 8 || criteria.charLength > 128)
    return false;
  else
    return true;
}

// checks if atleast one character type was given by user
function charCheck()
{
  if (!criteria.lower && !criteria.upper && !criteria.numeric && !criteria.special)
  {
    return false;
  }
  else
  {
    return true;
  }
}

////////////////////////

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
