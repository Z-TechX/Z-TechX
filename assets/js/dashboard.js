// Ensure Firebase and Firebase Auth have already been initialized
// Import firebase.auth() and firebase.database() as needed

// Check if user is authenticated
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // Redirect to login if no user is logged in
        window.location.href = "../login/";
    } else {
        // Load messages if user is logged in
        loadMessages();
    }
});

// Load messages from Firebase Realtime Database
function loadMessages() {
    const messagesTableBody = document.getElementById("messages-table").getElementsByTagName("tbody")[0];
    const contactRef = firebase.database().ref("Contact");

    // Fetch data from Firebase Realtime Database
    contactRef.once("value")
        .then((snapshot) => {
            messagesTableBody.innerHTML = ""; // Clear table body

            snapshot.forEach((childSnapshot) => {
                const messageData = childSnapshot.val();

                // Create a new row and insert message data
                const row = messagesTableBody.insertRow();
                row.insertCell(0).textContent = messageData.Name || "";
                row.insertCell(1).textContent = messageData.Email || "";
                row.insertCell(2).textContent = messageData.Subject || "";
                row.insertCell(3).textContent = messageData.Message || "";
            });
        })
        .catch((error) => {
            console.error("Error fetching messages:", error);
            alert("Failed to load messages.");
        });
}

// Logout function
function logout() {
    firebase.auth().signOut()
        .then(() => {
            window.location.href = "../login/";
        })
        .catch((error) => {
            console.error("Error logging out:", error);
            alert("Logout failed.");
        });
}
