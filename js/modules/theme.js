export function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.classList.toggle('light', savedTheme === 'light');
    
    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update theme
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggle.classList.toggle('light');
      
      // Save preference
      localStorage.setItem('theme', newTheme);
    });
  }