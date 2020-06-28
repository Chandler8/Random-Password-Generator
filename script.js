// Assignment Code


// Variables 

var generateBtn = document.querySelector("#generate");
let results = document.querySelector("#result");
let UNInum =[48,57];
let UNIupper = [65,90];
let UNIlower = [97,122];
let UNIsym = [33,47];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Password function, .value for the 8-128 characters and .checked for the T/F Boolean values
function writePassword() {
  
    let length = document.querySelector("#length").value;
    let upper = document.querySelector("#uppercase").checked;
    let lower = document.querySelector("#lowercase").checked;
    let numbers = document.querySelector("#numbers").checked;
    let symbols = document.querySelector("#symbols").checked;

     // Creates randSelctor && password arrays, used further down the code

  let randSelector = [];
  let password = [];

//   Returns an invalid alert if the password is outside of the range of 8-128 characters

  if (length < 8) {
    alert("Your password must be at least 8 characters long.");
    return;
  } else if (length > 128) {
    alert("Your password must be less than 128 characters long");
    return;
  }

//   Utilize Chrome's unique character set so I don't have to type out the entire alphabet

  if (upper===true){
      for(let i=UNIupper[0]; i<= UNIupper[1]; i++){
          randSelector.push(i);
      }
  }

  if(numbers===true){
    for(let i=UNInum[0]; i<= UNInum[1]; i++){
      randSelector.push(i);
    }
  }
  if(symbols===true){
    for(let i=UNIsym[0]; i<= UNIsym[1]; i++){
      randSelector.push(i);
    }
  }
  if(lower===true){
    for(let i=UNIlower[0]; i<= UNIlower[1]; i++){
      randSelector.push(i);
    }
  }

//   This should illustrate the functionality or lack thereof 
  console.log(randSelector);

  for(let i = 0; i < length; i++){
    password.push(String.fromCharCode(randSelector[Math.floor(Math.random()*randSelector.length)]))
  }

  console.log(password);
  results.textContent = password.join("");

}