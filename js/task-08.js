const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені");
  }

  const formEl = {
    email: email.value,
    password: password.value,
  };
  console.log(formEl);

  //const formEl = new FormData(evt.currentTarget);
  //console.log(formEl);

  evt.currentTarget.reset();
}
