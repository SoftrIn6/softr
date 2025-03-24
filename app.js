// app.js
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Call your Google Apps Script API via fetch
    registerUser(username, email, password);
});

async function registerUser(username, email, password) {
    try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbzztPCKzTh7qaO2K5tDVzNORG97pny-1zZCvhKz-uibVPDBmxWaI5m89HQAtmPWqRvwHQ/exec?action=register&name=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
            method: 'GET',
            mode: 'cors',  // Ensure CORS is enabled
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert('Registration successful!');
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration.');
    }
}
