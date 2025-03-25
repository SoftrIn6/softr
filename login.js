import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const message = document.getElementById('message');

    loginBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            message.textContent = "Please fill in all fields.";
            return;
        }

        message.textContent = "Logging in...";

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = "Error: " + error.message;
        } else {
            message.style.color = "green";
            message.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect after login
            }, 2000);
        }
    });
});
