//form validation

let nameError = document.querySelector("#name-error");
let emailError = document.querySelector("#email-error");
let subjectError = document.querySelector("#subject-error");
let companyError = document.querySelector("#company-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector(".submit-error");

function validateName() {
  const name = document.getElementById("fname").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+( [a-zA-Z]+)+$/)) {
    nameError.innerHTML = "Name invalid";
    return false;
  }
  nameError.innerHTML = " ";
  return true;
}

function validateEmail() {
  const email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = " ";
  return true;
}

function validateMessage() {
  const message = document.getElementById("message").value;
  let required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML = " ";
  return true;
}
function validateSubject() {
  const subject = document.getElementById("subject").value;
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    return false;
  }
  subjectError.innerHTML = " ";
  return true;
}
function validateCompany() {
  const company = document.getElementById("company").value;
  if (company.length == 0) {
    companyError.innerHTML = "Company is required";
    return false;
  }
  companyError.innerHTML = " ";
  return true;
}

let btn = document.querySelector("#submit-btn");
function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateCompany() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
btn.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});
