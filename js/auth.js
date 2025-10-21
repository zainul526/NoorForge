// For demo only. Uses localStorage to store users
document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // Signup
  if(signupForm){
    signupForm.addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      let users = JSON.parse(localStorage.getItem("users") || "[]");

      if(users.some(u => u.email === email)){
        alert("Email already registered!");
        return;
      }

      users.push({name,email,password});
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    });
  }

  // Login
  if(loginForm){
    loginForm.addEventListener("submit", function(e){
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      let users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(u => u.email === email && u.password === password);

      if(user){
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    });
  }

  // Protect Dashboard
  if(window.location.pathname.includes("dashboard.html")){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser){
      alert("Access denied! Please login first.");
      window.location.href = "login.html";
    }
  }
});
