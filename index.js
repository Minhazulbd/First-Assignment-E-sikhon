document.getElementById('login-button').addEventListener('click', function (){
     const nameField = document.getElementById('name-input');
    const nameFieldValue = nameField.value ;
    const emailField = document.getElementById('email-input');
    const emailFieldValue = emailField.value;
    const phoneField = document.getElementById('phone-input');
    const phoneFieldValue = phoneField.value;
    const passwordField =  document.getElementById('password-input');
    const passworadFieldValue =  passwordField.value; 
    //console.log("hello");

      if( nameFieldValue == "admin"  && emailFieldValue =="admin@gmail.com" && phoneFieldValue == 123456789 && passworadFieldValue == 123456 ){
        window.location.href ="product.html";
     }
 

 
})
