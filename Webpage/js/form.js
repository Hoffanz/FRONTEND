document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let comment = document.getElementById("comment").value.trim();

    let isValid = true;

    if (!/^[A-Za-zÅÄÖåäö\s]+$/.test(name)) {
      alert("Your name can only contain letters");
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email adress, try again");
      isValid = false;
    }

    if (comment.length < 10 || comment.length > 500) {
      alert("The message must contain between 10 and 500 letters");
      isValid = false;
    }

    if (isValid) {
      alert("Everything is filled out correctly!");

      this.submit();
    }
  });
