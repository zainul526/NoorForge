// auth.js
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  // --- Sign Up ---
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value.trim();

      if (!username || !email || !password) {
        alert('Please fill all fields!');
        return;
      }

      let users = JSON.parse(localStorage.getItem('users')) || [];

      // Prevent duplicate usernames
      if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
      }

      users.push({ username, email, password, role: 'member' });
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign Up Successful! Please login.');
      window.location.href = 'login.html';
    });
  }

  // --- Login ---
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value.trim();

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isMember', 'true');
        alert('Login Successful!');
        window.location.href = 'dashboard.html'; // member-only page
      } else {
        alert('Invalid username or password!');
      }
    });
  }

  // --- Navbar Button Control (works on every page) ---
  const isMember = localStorage.getItem('isMember') === 'true';

  if (isMember) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (signupBtn) signupBtn.style.display = 'inline-block';
    if (logoutBtn) logoutBtn.style.display = 'none';
  }

  // --- Logout ---
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isMember');
      alert('You have been logged out!');
      window.location.href = 'index.html'; // redirect to home
    });
  }
});
