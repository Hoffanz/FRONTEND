document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const commentError = document.getElementById("commentError");

  function validateName() {
    if (!/^[A-Za-zÅÄÖåäö\s]+$/.test(nameInput.value)) {
      nameError.textContent = "Your name may only contain letters.";
      nameInput.classList.add("invalid");
      return false;
    } else if (nameInput.value.length < 2 || nameInput.value.length > 50) {
      nameError.textContent = "Your name must be between 2 and 50 characters.";
      nameInput.classList.add("invalid");
      return false;
    } else {
      nameError.textContent = "";
      nameInput.classList.remove("invalid");
      return true;
    }
  }

  function validateEmail() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.textContent =
        "Invalid email. The emailadress must contain a '@' and a domain (ex; .com).";
      emailInput.classList.add("invalid");
      return false;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("invalid");
      return true;
    }
  }

  function validateComment() {
    if (commentInput.value.length < 10) {
      commentError.textContent =
        "Your message must be at least 10 characters long.";
      commentInput.classList.add("invalid");
      return false;
    } else if (commentInput.value.length > 500) {
      commentError.textContent =
        "Your message can only be 500 characters long.";
      commentInput.classList.add("invalid");
      return false;
    } else {
      commentError.textContent = "";
      commentInput.classList.remove("invalid");
      return true;
    }
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  commentInput.addEventListener("input", validateComment);

  form.addEventListener("submit", function (event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCommentValid = validateComment();

    if (!isNameValid || !isEmailValid || !isCommentValid) {
      event.preventDefault();
      alert(
        "Make sure that you have filled out every section correctly before submitting."
      );
    }
  });
});
