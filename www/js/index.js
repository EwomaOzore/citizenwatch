function navigateTo(pageId) {
    const pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add("active");
}

function handleLogin() {
    // Add functionality for login
    alert("Login functionality will be implemented later.");
}

function handleSignup() {
    // Add functionality for signup
    alert("Signup functionality will be implemented later.");
}

function handleLogout() {
    // Add functionality for logout
    alert("Logout functionality will be implemented later.");
}

function toggleDarkMode() {
    const app = document.getElementById("app");
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle.checked) {
        app.classList.add("dark-mode");
    } else {
        app.classList.remove("dark-mode");
    }
}

// Event listener for dark mode toggle
document.getElementById("darkModeToggle").addEventListener("change", toggleDarkMode);
