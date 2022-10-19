const formEl = document.getElementById("form");
const nameEl = document.getElementById("name");
const phoneNumber = document.getElementById("phone");

const pwd1El = document.getElementById("pwd1");

const pwd2El = document.getElementById("pwd2");

const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;
function validateForm() {
  //constrain Api
  isValid = formEl.checkValidity();
  if (!isValid) {
    message.textContent = "please fill out all field !";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // password validity
  if (pwd1El.value === pwd2El.value) {
    passwordsMatch = true;
    pwd1El.style.borderColor = "green";
    pwd2El.style.borderColor = "green";
   
  } else {
    pwdsMatch = false;
    message.textContent = "Make sure password matches?";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    pwd1El.style.borderColor = "red";

    pwd2El.style.borderColor = "red";
    return;
  }
  // in form valid  and  matches
  if (isValid && passwordsMatch) {
    message.textContent = "Suceesfull Registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}
//store data
function storeFormData(){
  //if isValid true
 const user = {
  name:formEl.name.value,
  phone:formEl.phone.value,
  email:formEl.email.value,
  website:formEl.website.value,
  password:formEl.pwd.value,
 };
 console.log(user);
}



function processForm(e) {
  e.preventDefault();

  validateForm();
  //store form
  if(isValid && passwordsMatch){
    storeFormData();
  }
}

//event listerner
formEl.addEventListener("submit", processForm);
