// Login function
function login(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Get form values
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Firebase authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            const user = userCredential.user;
            // alert(`Welcome back, ${user.email}!`);
            // Redirect or load user dashboard here, if applicable
            window.location.href = "../dashboard/"; // Replace with the actual redirect URL
            // alert("Login confirmed");
        })
        .catch((error) => {
            console.error("Error logging in:", error);
            alert("Login failed. Please check your email and password.");
        });
}

// Forgot password function
function forgotPassword() {
    const email = document.getElementById("username").value;

    if (email) {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert("Password reset email sent. Please check your inbox.");
            })
            .catch((error) => {
                console.error("Error sending reset email:", error);
                alert("Failed to send password reset email. Make sure the email is correct.");
            });
    } else {
        alert("Please enter your email to reset the password.");
    }
}
