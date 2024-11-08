var Contact = firebase.database().ref("Contact/");

function submitThis() {
    // Get the values from the form when the submit button is clicked
    console.log("Button clicked");
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Subject = document.getElementById("subject").value;
    var Msg = document.getElementById("msg").value;
    console.log("Data Taken");

    // Check if all fields are filled out (basic validation)
    if (Name && Email && Subject && Msg) {
        // Write the data to Firebase
        Contact.push({
            Name: Name,
            Email: Email,
            Subject: Subject,
            Message: Msg
        })
        .then(function() {
            console.log("Data saved successfully!");
        })
        .catch(function(error) {
            console.error("Error saving data: ", error);
        });

        // Clear the form fields (optional)
        document.getElementById("contact-form").reset();
    } else {
        console.log("Please fill all fields!");
    }
}
