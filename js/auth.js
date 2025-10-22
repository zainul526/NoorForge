// auth.js
document.addEventListener('DOMContentLoaded', () => {

  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  // Sign Up
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ username, email, password, role: 'member' });
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign Up Successful! Please login.');
      window.location.href = 'login.html';
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login Successful!');
        window.location.href = 'dashboard.html'; // member-only page
      } else {
        alert('Invalid username or password!');
      }
    });
  }

});
