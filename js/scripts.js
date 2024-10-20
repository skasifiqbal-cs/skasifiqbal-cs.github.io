document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typed-text');
  const cursorElement = document.querySelector('.cursor');
  const themeToggleButton = document.getElementById('theme-toggle-button');

  // Typing effect setup
  if (typingElement && cursorElement) {
    const text = '> Sk Asif Iqbal';
    typingElement.textContent = '';
    
    let index = 0;
    const typingSpeed = 100;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        cursorElement.style.display = 'inline-block';
      }
    }

    type();
  }

  // Load and apply the saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'terminal-light';
  document.body.classList.add(savedTheme);
  updateToggleButtonText(savedTheme);

  // Add event listener for the theme toggle button
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
    console.log('Theme toggle button listener attached');
  }
});

// Function to toggle between themes and save the preference
function toggleTheme() {
  const isLightMode = document.body.classList.contains('terminal-light');
  const newTheme = isLightMode ? 'terminal-dark' : 'terminal-light';

  console.log('Toggling theme to:', newTheme);

  // Apply the new theme class
  document.body.classList.remove('terminal-light', 'terminal-dark');
  document.body.classList.add(newTheme);

  // Save the selected theme to localStorage
  localStorage.setItem('theme', newTheme);
  updateToggleButtonText(newTheme);
}

// Function to update the theme toggle button text
function updateToggleButtonText(theme) {
  const button = document.getElementById('theme-toggle-button');
  if (button) {
    button.innerHTML = theme === 'terminal-dark' ? '(*) Light Mode' : '(o) Dark Mode';
    console.log('Updated button text to:', button.innerHTML);
  }
}
