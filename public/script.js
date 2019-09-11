function validateForm() {
    
var x = document.forms["signupForm"]["email"].value;
if (x==null || x=="")
  {
  alert("Please enter your email address");
  return false;
  }

var y = document.forms["signupForm"]["password"].value;
  {
if (y==null || y=="")
  alert("Please enter your password");
  return false;
  }
    
}    