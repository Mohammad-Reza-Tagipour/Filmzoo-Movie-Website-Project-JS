const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".links");
let showSignup = document.querySelector(".login");
let loginLink = document.querySelector(".login-link");
let signupLink = document.querySelector(".singup-link");
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    console.log(pwFields);
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // preventDefault();
    forms.classList.toggle("show-signup");
  });
});

signupLink.addEventListener("click", (e) => {
  // preventDefault();
  showSignup.style.display = "none";
});
loginLink.addEventListener("click", (e) => {
  showSignup.style.display = "block";
});
