// 🌗 Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// 🎯 Click Counter
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counter').textContent = `You clicked ${count} times!`;
});

// ✨ Show/Hide Message
document.getElementById('toggleButton').addEventListener('click', () => {
  document.getElementById('message').classList.toggle('hidden');
});

// ✅ Form Validation
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const msg = document.getElementById('formMessage');

  if (name.length < 2) {
    msg.textContent = "Name must be at least 2 characters.";
    return;
  }

  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    return;
  }

  msg.textContent = "Form submitted successfully! 🎉";
});