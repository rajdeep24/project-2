$(document).ready(function() {
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    // var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
        email: emailInput.val().trim(),
        // password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
        return;
    }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginCustomer(userData.email);
      emailInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the vendor page
    function loginCustomer(email) {
        $.post("/api/customer-login", {
        email: email
        })
        .then(function() {
            window.location.replace("/customer");
            // If there's an error, log the error
        })
        .catch(function(err) {
            console.log(err);
        });
    }
})