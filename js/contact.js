// function sendMessage() {

//     console.log('submit data')

//     $.ajax({
//         url: 'https://api.apispreadsheets.com/data/y7f0lGmpkDgKmaso/',
//         type: 'post',
//         data: $("#myForm").serializeArray(),
//         success: function () {
//             alert("Email Submitted Thanks You "+"😀")
//          //   $('#emailInput').val(" ")
//         },
//         error: function () {
//             alert("There was an error :(")
//         }
//     });

//     event. preventDefault();


//     //'https://api.apispreadsheets.com/data/DB1l2fkC8pt0NBb6/'
//     //https://www.apispreadsheets.com/table/y7f0lGmpkDgKmaso/
//     //y7f0lGmpkDgKmaso
// }

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
        $.ajax({
            type: "POST",
            url: "your_server_url",
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                // Handle success response
            },
            error: function(xhr, status, error) {
                // Handle error
            }
        });
    });

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
