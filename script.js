function validatePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    var isPasswordMatch = password === confirmPassword;
  
    console.log(isPasswordMatch);
  }
