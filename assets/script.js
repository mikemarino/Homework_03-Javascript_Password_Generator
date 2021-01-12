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


// generate
function generatePassword() {

var pw = "";
var pwLength = "";
var emptyString = "";
var lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar ="!@#$%^&*()-_+";

var pwLength = document.querySelector("#charCount").value 

var rd1 = document.getElementById("option1");
var rd2 = document.getElementById("option2");
var rd3 = document.getElementById("option3");
var rd4 = document.getElementById("option4");

if (rd1.checked===true)  {
pw = pw + lowerCaseAlpha;
}

if (rd2.checked===true){
pw = pw + upperCaseAlpha;  
}

if (rd3.checked===true){
pw = pw + numeric;  
}

if (rd4.checked===true){
pw = pw + specialChar;  
}

while (emptyString.length < pwLength) {
  emptyString += pw[Math.floor(Math.random() * pw.length)]; 
}
var newPW = emptyString;


if (pwLength.length != "" && pwLength !== "0"){
  document.getElementById("numCatch").setAttribute("style", "color:black");
return newPW;

} else {
document.getElementById("numCatch").setAttribute("style", "color:red");
return "Set the number of password characters.  It cannot be blank or 0 (zero).";

  // alert("Add a number");
}
}


// old code - for retetion of method used

 // emptyString += upperCaseAlpha[Math.floor(Math.random() * upperCaseAlpha.length)];
  // emptyString += lowerCaseAlpha[Math.floor(Math.random() * lowerCaseAlpha.length)];
  // emptyString += numeric[Math.floor(Math.random() * numeric.length)];
  // emptyString += specialChar[Math.floor(Math.random() * specialChar.length)];


// while (emptyString.length < 726) {
//   emptyString += upperCaseAlpha[Math.floor(Math.random() * upperCaseAlpha.length)];
//   emptyString += lowerCaseAlpha[Math.floor(Math.random() * lowerCaseAlpha.length)];
//   emptyString += numeric[Math.floor(Math.random() * numeric.length)];
//   emptyString += specialChar[Math.floor(Math.random() * specialChar.length)];
// }
// console.log(emptyString);


// Button setup

// let btnShow = document.querySelector('button');
// let result = document.querySelector('card-body');

// btnShow.addEventListener('click',() => {
//   let selected = document.querySelector('input[type"checkbox"]:checked')
//   result.innerText = selected.value;
//   console.log (selected);
// });





