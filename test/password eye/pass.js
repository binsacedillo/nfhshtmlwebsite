const togglePassword = document.querySelector("#toggle-password");
const passwordInput = document.querySelector("#password");
let passwordVisible = false;

togglePassword.addEventListener("click", () => {
  passwordVisible = !passwordVisible;

  if (passwordVisible) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
