let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let form = document.getElementById("first_form");

function matchPasswords() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return false; 
  }
  return true;
}

form.addEventListener("submit", function(event) {
  if (!matchPasswords()) {
    event.preventDefault();
  }
});
