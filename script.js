let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let button = document.getElementById("button");
let nameValue;
let ageValue;
let emailValue;
let Array = [];


name.addEventListener("input", (e) => {
  nameValue = e.target.value;
});
age.addEventListener("input", (e) => {
  ageValue = e.target.value;
});
email.addEventListener("input", (e) => {
  emailValue = e.target.value;
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    name: nameValue,
    age: ageValue,
    email: emailValue
  }
  Array.push(data);
  let dataString = JSON.stringify(Array);
  localStorage.setItem("data", dataString);
  alert("data added");
  name.value = '';
  age.value = '';
  email.value = '';

});

