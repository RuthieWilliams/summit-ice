function validateForm() {
  var x = document.forms["signupForm"]["email"].value;
  if (x == "") {
    alert("Please provide a valid email address");
    return false;
  }
}