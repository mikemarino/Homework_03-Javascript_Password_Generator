// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var emptyString = "";
var lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar ="!@#$%^&*()-_+";

// add these string together heh



while (emptyString.length < 726) {
  emptyString += upperCaseAlpha[Math.floor(Math.random() * upperCaseAlpha.length)];
  emptyString += lowerCaseAlpha[Math.floor(Math.random() * lowerCaseAlpha.length)];
  emptyString += numeric[Math.floor(Math.random() * numeric.length)];
  emptyString += specialChar[Math.floor(Math.random() * specialChar.length)];
}
console.log(emptyString);


// Button setup

// let btnShow = document.querySelector('button');
// let result = document.querySelector('card-body');

// btnShow.addEventListener('click',() => {
//   let selected = document.querySelector('input[type"checkbox"]:checked')
//   result.innerText = selected.value;
//   console.log (selected);
// });


function fn1() {

let result = document.getElementById("password");

var rd1 = document.getElementById("option1");
var rd2 = document.getElementById("option2");
var rd3 = document.getElementById("option3");
var rd4 = document.getElementById("option4");

if (rd1.checked===true)  {
result.innerText = "WHOAAAAA";
}


if (rd2.checked===true){
result.innerText = "WHOAAAAA@@@@@@@@@@@@@@";
}
}


