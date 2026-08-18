const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
    if (email.value === "" || password.value === "") {
        alert("Please enter email and password");
        return;
    }

    if (email.value === " " && password.value === "  ") {
        alert("Login successful!");

        // Go to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
});