// Populate initial data for display
const withdrawals = [
    { name: "Junior M.", amount: "R 670", status: "Approved" },
    { name: "Chloë P.", amount: "$ 320", status: "Pending" },
    { name: "Siyabonga T.", amount: "R 1,200", status: "Approved" },
    { name: "William K.", amount: "$ 2,100", status: "Pending" },
    { name: "Kamogelo L.", amount: "R 3,500", status: "Approved" },
    { name: "Sarah C.", amount: "$ 580", status: "Pending" },
    { name: "Mpho S.", amount: "R 4,800", status: "Approved" },
    { name: "David M.", amount: "$ 700", status: "Pending" },
    { name: "Lethabo T.", amount: "R 6,200", status: "Approved" },
    { name: "Megan J.", amount: "$ 1,250", status: "Pending" },
    // Add more entries here to fill 720 entries as required
];

// Function to calculate the current interval
function getCurrentInterval() {
    const now = new Date();
    const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
    return Math.floor((minutesSinceMidnight % 1800) / 25);
}

// Display current withdrawals based on the interval
function displayWithdrawals() {
    const interval = getCurrentInterval();
    const currentEntries = withdrawals.slice(interval * 10, interval * 10 + 10);

    const tableBody = document.getElementById("withdrawal-list");
    tableBody.innerHTML = ""; // Clear previous entries

    currentEntries.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.amount}</td>
            <td class="${entry.status.toLowerCase()}">${entry.status}</td>
        `;
        tableBody.appendChild(row);

        // Simulate status change from Pending to Approved
        if (entry.status === "Pending") {
            const randomDelay = Math.random() * (5 - 1) + 1; // Between 1-5 mins
            setTimeout(() => {
                entry.status = "Approved";
                persistData(); // Persist the new state
                displayWithdrawals(); // Update the table
            }, randomDelay * 60000);
        }
    });

    persistData(); // Save current state
}

// Persist data in localStorage for reloads
function persistData() {
    localStorage.setItem("withdrawals", JSON.stringify(withdrawals));
}

// Restore data on page load
function restoreData() {
    const savedData = JSON.parse(localStorage.getItem("withdrawals"));
    if (savedData) {
        withdrawals.forEach((entry, index) => {
            if (savedData[index]) {
                Object.assign(entry, savedData[index]);
            }
        });
    }
    displayWithdrawals();
}

// Rotate entries every 25 minutes
setInterval(displayWithdrawals, 25 * 60 * 1000);

// Initialize on page load
window.onload = restoreData;
