import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const message = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    registerBtn.addEventListener('click', async () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Check for empty fields
        if (!email || !password || !confirmPassword) {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
            return;
        }

        // Check email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
            return;
        }

        // Display loading message
        message.textContent = "Registering...";
        message.style.color = "black";

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });

            if (error) {
                message.textContent = "Error: " + error.message;
                message.style.color = "red";
            } else {
                message.style.color = "green";
                message.textContent = "Registration successful! Please check your email to verify your account.";
                setTimeout(() => {
                    window.location.href = "http://home.com"; // Redirect to home.com after successful registration
                }, 2000);
            }
        } catch (error) {
            message.textContent = "An unexpected error occurred. Please try again.";
            message.style.color = "red";
            console.error(error); // Log the error for debugging purposes
        }
    });
});
