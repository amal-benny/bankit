// Logout function
function logout() {
    // Implement logout logic, e.g., clear session or redirect
    window.location.href = 'index.html';
    console.log("ges") // Redirect to login page
}

// Handle form submission
function handleSubmit() {
    const transactionId = document.getElementById('transactionId').value;
    const ifsc = document.getElementById('ifsc').value;
    const bankName = document.getElementById('bankName').value;
    
    const colorPickers = document.querySelectorAll('input[name="color[]"]');
    const colors = Array.from(colorPickers).map(picker => picker.value);

    // Process the transaction details here (e.g., send to server or log)
    console.log('Transaction ID:', transactionId);
    console.log('IFSC:', ifsc);
    console.log('Bank Name:', bankName);
    console.log('Selected Colors:', colors);

    // Redirect to a new page or display the transaction details
    alert('Transaction submitted successfully!');
    window.location.href = 'transaction-details.html'; // Redirect to the transaction details page
    return false; // Prevent the default form submission
}

// Function to add a new color picker
function addColorPicker() {
    const colorPickersDiv = document.getElementById('colorPickers');
    const newColorInput = document.createElement('input');
    newColorInput.type = 'color';
    newColorInput.name = 'color[]';
    newColorInput.value = '#000000'; // Default color
    colorPickersDiv.appendChild(newColorInput);
}
