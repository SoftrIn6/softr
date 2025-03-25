import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const message = document.getElementById('message');

    registerBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            message.textContent = "Please fill in all fields.";
            return;
        }

        message.textContent = "Registering...";

        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = "Error: " + error.message;
        } else {
            message.style.color = "green";
            message.textContent = "Registration successful! Check your email.";
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect to login page
            }, 2000);
        }
    });
});
