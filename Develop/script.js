// Assignment code here
var criteria = {
  minChar:0,
  maxChar:0,
  lower: false,
  upper: false,
  numeric: false,
  special: false,
}

function generatePassword()
{
  criteria.minChar = prompt("Minimum Character Length? Choose atleast 8");
  if (minMaxCheck(true, criteria.minChar))
  {

  }
  criteria.maxChar = prompt("Maximum Character Length? No more than 128");
  if (minMaxCheck(false, criteria.maxChar))
  {

  }
  criteria.lower = confirm("New Password to contain lower case characters?");
  criteria.upper = confirm("New Password to contain upper case characters?");
  criteria.numeric = confirm("New Password to contain Numeric characters?");
  criteria.special = confirm("New Password to contain special characters?");
}

function minMaxCheck(isMin, value)
{
  if (isMin)
  {
    if (value < 8)
      return false;
    else
      return true;
  }
  else
  {
    if (value > 128)
      return false;
    else
      return true;
  }
}
function charCheck()
{

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
