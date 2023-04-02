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
//form validation and its sending by e-mail
document.addEventListener('DOMContentLoaded', function () {
  const form =document.querySelector('form');
  form.addEventListener('submit', formSend);
 
  async function formSend(e){
    e.preventDefault();
    let error = validateForm(); 

    let formData = new FormData(form);
    formData.append('image', formImage.files[0]);

    if (error === 0){
      form.classList.add('_sending');
      let  response = await fetch('sender.php' , {
        method: 'POST',
        body: formData
      });
      if (response.ok){
        let result = await response.json();
        alert(result.message);
        formPreview.innerHTML = ' ';
        form.reset();
      }else{
        alert("Failed attempt.");
      }

    }

    
  }
   //btn.addEventListener("click", function (event) {
  //event.preventDefault();
  //validateForm(); 
});

//function that displays downloaded photo in form
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
});

function uploadFile(file){
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
    alert('You can upload only photos (jpeg, png, gif).');
    formImage.value = ' ';
    return;
  }

  var reader = new FileReader();
  reader.onload = function (e){
    formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
  };
  reader.onerror = function (e){
    alert('Error');
  };
  reader.readAsDataURL(file);
}