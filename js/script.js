// ==========================================
// ACTIVITY 3: JAVASCRIPT FEATURES
// ==========================================

// 1. COMPULSORY: Contact Form Validation and Preview
// This function runs when the form is submitted.
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the page from reloading (keeps it local)
    event.preventDefault(); 

    // Get the values from the form fields and remove leading/trailing spaces
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    // Get the feedback div where we will show messages
    let feedbackDiv = document.getElementById("formFeedback");
    
    // Clear previous feedback
    feedbackDiv.textContent = "";
    feedbackDiv.style.color = "red";

    // Validate Name (not empty)
    if (name === "") {
        feedbackDiv.textContent = "Error: Name cannot be empty or only spaces.";
        return;
    }

    // Validate Email (must contain @ and a dot, basic regex)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedbackDiv.textContent = "Error: Please enter a valid email address.";
        return;
    }

    // Validate Message (not empty)
    if (message === "") {
        feedbackDiv.textContent = "Error: Message cannot be empty or only spaces.";
        return;
    }

    // If all validation passes, show the success preview
    feedbackDiv.style.color = "green";
    // Using textContent as required by the assignment
    feedbackDiv.textContent = "Success! Data was validated successfully. (Browser demonstration only - no message was sent).";
});

// 2. FEATURE: Expandable Content (Show/Hide Project Details)
// This function is called when a "Read More" button is clicked
function toggleDetails(id) {
    let details = document.getElementById(id);
    let button = event.target; // The button that was clicked

    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Read Less";
    } else {
        details.style.display = "none";
        button.textContent = "Read More";
    }
}

// 3. FEATURE: Theme Switch (Light/Dark Mode)
// This runs when the "Dark Mode" button is clicked
document.getElementById("themeToggle").addEventListener("click", function() {
    // Toggle the 'dark-theme' class on the body element
    document.body.classList.toggle("dark-theme");
    
    // Change the button text depending on the current theme
    if (document.body.classList.contains("dark-theme")) {
        this.textContent = "Light Mode";
    } else {
        this.textContent = "Dark Mode";
    }
});

// 4. FEATURE: Study Hours Calculator
// This runs when the "Calculate Total" button is clicked
document.getElementById("calcBtn").addEventListener("click", function() {
    let hoursInput = document.getElementById("hoursPerDay").value;
    let daysInput = document.getElementById("daysPerWeek").value;
    let resultDisplay = document.getElementById("calcResult");

    // Validate inputs: must be numbers, not empty, positive, and days between 1-7
    if (hoursInput === "" || daysInput === "" || isNaN(hoursInput) || isNaN(daysInput)) {
        resultDisplay.textContent = "Error: Please enter valid numbers.";
        resultDisplay.style.color = "red";
        return;
    }

    let hours = Number(hoursInput);
    let days = Number(daysInput);

    if (hours <= 0) {
        resultDisplay.textContent = "Error: Hours must be greater than 0.";
        resultDisplay.style.color = "red";
        return;
    }

    if (days < 1 || days > 7) {
        resultDisplay.textContent = "Error: Days must be between 1 and 7.";
        resultDisplay.style.color = "red";
        return;
    }

    // Calculate and display
    let total = hours * days;
    resultDisplay.textContent = "Total planned study hours per week: " + total + " hours.";
    resultDisplay.style.color = "green";
});