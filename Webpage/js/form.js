document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let comment = document.getElementById("comment").value.trim();

    let isValid = true;

    if (!/^[A-Za-zÅÄÖåäö\s]+$/.test(name)) {
      alert("Namnet får endast innehålla bokstäver och mellanslag.");
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Ange en giltig e-postadress.");
      isValid = false;
    }

    if (comment.length < 10 || comment.length > 500) {
      alert("Meddelandet måste vara mellan 10 och 500 tecken.");
      isValid = false;
    }

    if (isValid) {
      alert("Formuläret är korrekt ifyllt!");

      this.submit();
    }
  });
