// Initialize Auth0 Client
let auth0Client;

window.onload = async () => {
    auth0Client = await createAuth0Client({
        domain: "dev-15cluuibirk06ttr.us.auth0.com",      // Replace with your Auth0 domain
        client_id: "eoNrJXQSKbt1w9qf5SCgCCxqeFkME8J2",      // Replace with your Auth0 client ID
        redirect_uri: window.location.href
    });

    // Check if the user is authenticated
    const isAuthenticated = await auth0Client.isAuthenticated();
    if (isAuthenticated) {
        window.location.href = "dashboard.html"; // Redirect to a logged-in page
    } else {
        // Show Login or Register buttons
        document.getElementById('login-btn').style.display = "block";
        document.getElementById('register-btn').style.display = "block";
    }
};

// Login button click handler
document.getElementById("login-btn").addEventListener("click", async () => {
    await auth0Client.loginWithPopup();
    const user = await auth0Client.getUser();
    alert(`Hello, ${user.name}`);
    window.location.href = "dashboard.html"; // Redirect after login
});

// Register button click handler
document.getElementById("register-btn").addEventListener("click", async () => {
    await auth0Client.loginWithPopup();
    const user = await auth0Client.getUser();
    alert(`Registration successful, Welcome ${user.name}`);
    window.location.href = "dashboard.html"; // Redirect after registration
});
