import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const message = document.getElementById('message');

    registerBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!email || !password || !confirmPassword) {
            message.textContent = "Please fill in all fields.";
            return;
        }

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            return;
        }

        message.textContent = "Registering...";

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = "Error: " + error.message;
        } else {
            message.style.color = "green";
            message.textContent = "Registration successful! Please check your email to verify your account.";
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect after successful registration
            }, 2000);
        }
    });
});
