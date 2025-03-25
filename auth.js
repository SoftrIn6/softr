// Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNCBIxc_aIAFH9UKsMO3P8Akmzd9aATIEsI5tsL9VinxFi9dVF8vV8Qi7kiCGcpWwZXQ/exec';

// Check if user is logged in
function checkAuth() {
    const authToken = localStorage.getItem('authToken');
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!authToken) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
        return false;
    }

    // Update UI with user data
    if (userData.email) {
        updateUI(userData);
    }

    return true;
}

// Update UI with user data
function updateUI(userData) {
    // This function can be customized for each page
    // Example implementation for profile page
    if (document.querySelector('.user-info')) {
        document.querySelector('.user-info').innerHTML = `
            <div style="font-size: 18px; font-weight: bold;">${userData.username || userData.email.split('@')[0]}</div>
            <div style="color: #666; margin-top: 5px;">${userData.email}</div>
            <i class="fas fa-copy user-copy"></i>
        `;
    }

    // Update account balance if element exists
    if (document.querySelector('.total-assets')) {
        document.querySelector('.total-assets').textContent = `$${userData.accountBalance || '0'}`;
    }

    // Update other elements based on the page
    if (document.querySelector('.account-balance')) {
        document.querySelectorAll('.account-balance').forEach(el => {
            el.textContent = `$${userData.accountBalance || '0'}`;
        });
    }

    // Update asset values
    document.querySelectorAll('.asset-value').forEach(el => {
        if (el.textContent.trim() === '$') {
            el.textContent = '$0';
        }
    });

    // Update referral code if element exists
    if (document.querySelector('.code-value')) {
        document.querySelector('.code-value').textContent = userData.referralCode || '';
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to sign out?')) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        window.location.href = 'login.html';
    }
}
