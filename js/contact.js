
$(document).ready(function() {
    $("#name, #email, #message").on('input', function() {
        $(this).siblings('.validity-message').text(""); // Hide error message
    });
    
    $("#send-message").click(function(e) {
        e.preventDefault(); // prevent default form submission
        
        // Get values of inputs
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        console.log({name: name, email: email, message: message});
        if (name.trim() === '') {
            $("#nameValidityMessage").text("Please enter your name.");
            return;
        } else {
            $("#nameValidityMessage").text("");
        }

        if (!validateEmail(email)) {
            $("#emailValidityMessage").text("Please enter a valid email address.");
            return;
        }else {
            $("#emailValidityMessage").text("")
        }

        if (message.trim() === '') {
            $("#messageValidityMessage").text("Please enter your message.");
            return;
        }else {
            $("#messageValidityMessage").text("")
        }
        
        // Here, you can do whatever you want with the values
        // For example, you can send them to a server using AJAX
        
        // Example of sending values to a server using AJAX
        // $.ajax({
        //     type: "POST",
        //     url: "https://api.web3forms.com/submit",
        //     data: {
        //         name: name,
        //         email: email,
        //         message: message
        //     },
        //     success: function(response) {
        //         // Handle success response
        //     },
        //     error: function(xhr, status, error) {
        //         // Handle error
        //     }
        // });
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
