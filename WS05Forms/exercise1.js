
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const emailField = document.getElementById("email");
    const commentField = document.getElementById("comment");
    const emailError = document.getElementById("emailError");
    const commentError = document.getElementById("commentError");

    emailError.textContent = ""; // Clear previous error
    commentError.textContent = ""; 

    let isValid = true;

    // Validate email
    const email = emailField.value.trim();
    if (email.length < 6 || email.length > 15 || !email.includes("@")) {
        emailError.textContent = "Invalid email (6-15 characters, must include @)";
        emailField.style.border = "2px solid red";
        isValid = false;
    } else {
        emailField.style.border = "";
    }

    // Validate comment
    const comment = commentField.value.trim();
    if (comment === "") {
        commentError.textContent = "Comment cannot be empty";
        commentField.style.border = "2px solid red";
        isValid = false;
    } else if (comment.length > 50) {
        commentError.textContent = "Comment should be 50 characters max";
        commentField.style.border = "2px solid red";
        isValid = false;
    } else {
        commentField.style.border = "";
    }

    // Display values if valid
    if (isValid) {
        alert(`Email: ${email}\nComment: ${comment}`);
    }
}
    