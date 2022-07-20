$(document).ready(function () {
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error = true;
    var password_error = true;
    var confirm_password_error = true;
    var email_error = true;
    $('#username').keyup(function () {
        username_validation();
    });
    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == '') {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username can\'t be Empty');
            $('#usernamevalidation').css('color', 'red');
            $('#usernamevalidation').css('font-size', '15px');
            Error = false;
            return false;
        }

        if (username_val.length < 4) {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Type atleast 4 characters');
            $('#usernamevalidation').css('color', 'red');
            $('#usernamevalidation').css('font-size', '15px');
            Error = false;
            return false;
        }
        else {
            $('#usernamevalidation').hide();
            Error = true;
        }
    }

    $('#emailid').keyup(function () {
        email_validation();
    });


    function email_validation() {
        var email_val = $('#emailid').val();
        if (email_val.length == '') {
            $('#emailvalidation').show();
            $('#emailvalidation').html('This field can\'t be empty');
            $('#emailvalidation').css('color', 'red');
            $('#emailvalidation').css('font-size', '15px');

            email_error = false;
            return false;
        }
        var email1 = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;;
        if (!email1.test(email_val)) {
            $('#emailvalidation').show();
            $('#emailvalidation').html('Enter valid email id');
            $('#emailvalidation').css('color', 'red');
            $('#emailvalidation').css('font-size', '15px');

            email_error = false;
            return false;
        }
        else {
            $('#emailvalidation').hide();
            email_error = true;
        }
    }



    $('#password').keyup(function () {
        password_validation();
    });

    function password_validation() {

        var password_val = $('#password').val();

        if (password_val.length == '') {
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password can\'t be empty');
            $('#passwordvalidation').css('color', 'red');
            $('#passwordvalidation').css('font-size', '15px');
            password_error = false;
            return false;
        }
        var password1 = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        if (!password1.test(password_val)) {
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Type in correct format');
            $('#passwordvalidation').css('color', 'red');
            $('#passwordvalidation').css('font-size', '15px');
            password_error = false;
            return false;
        }

        else {
            $('#passwordvalidation').hide();
            password_error = true
        }
    }

    $('#confirmpassword').keyup(function () {
        confirm_password();
    });
    function confirm_password() {
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();
        if (confirm_password_val.length == '') {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('This field can\'t be empty');
            $('#confirmpasswordvalidation').css('color', 'red');
            $('#confirmpasswordvalidation').css('font-size', '15px');

            confirm_password_error = false;
            return false;
        }
        if (password_val != confirm_password_val) {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password didn\'t match');
            $('#confirmpasswordvalidation').css('color', 'red');
            $('#confirmpasswordvalidation').css('font-size', '15px');

            confirm_password_error = false;
            return false;
        }
        else {
            $('#confirmpasswordvalidation').hide();
            confirm_password_error = true;
        }
    }


    $('#submitvalidation').click(function () {
        username_validation();
        email_validation();
        password_validation();
        confirm_password();
        if (Error == true && email_error == true && password_error == true && confirm_password_error == true) {
            return true;
        }
        else { return false };
    });

});

