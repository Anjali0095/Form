function signup() {
  let name = document.getElementById("name");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let Password = document.getElementById("Password");
  let confirmpassword = document.getElementById("confirmpassword");

  if (
    name.value == "" ||
    username.value == "" ||
    email.value == "" ||
    Password.value == "" ||
    confirmpassword.value == ""
  ) {
    return (document.getElementById("errorAlert").style.display = "flex");
  }
  document.getElementById("successAlert").style.display = "flex";
  setInterval(function () {
    location.reload();
  }, 3000);
}
