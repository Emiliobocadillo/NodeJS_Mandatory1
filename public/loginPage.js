document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Check if username and password are correct and redirect to logged in page

    if (username === "admin" && password === "1234") {
      window.location.href = "/admin";
    } else{
        alert("Invalid credentials")
    }
  });
});
