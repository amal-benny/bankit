// Default user credentials for login
const defaultUser = {
    username: "admin",
    password: "admin123"
};

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if username and password match the default user
    if (username === defaultUser.username && password === defaultUser.password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});

// Registration form validation
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Validation logic
    if (!newUsername.trim()) {
        registerErrorMessage.textContent = 'Username is required!';
    } else if (!emailPattern.test(email)) {
        registerErrorMessage.textContent = 'Please enter a valid email address!';
    } else if (!phonePattern.test(phone)) {
        registerErrorMessage.textContent = 'Please enter a valid 10-digit phone number!';
    } else if (!dob) {
        registerErrorMessage.textContent = 'Please select your date of birth!';
    } else if (new Date(dob) > new Date()) {
        registerErrorMessage.textContent = 'Date of birth cannot be in the future!';
    } else if (!gender) {
        registerErrorMessage.textContent = 'Please select your gender!';
    } else if (newPassword.length < 6) {
        registerErrorMessage.textContent = 'Password must be at least 6 characters!';
    } else if (newPassword !== confirmPassword) {
        registerErrorMessage.textContent = 'Passwords do not match!';
    } else {
        // On successful validation
        alert('Registration successful! You can now log in.');
        window.location.href = 'index.html'; // Redirect back to login page
    }
});
