// script.js

// Highlight active section in navbar as you scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  window.onload = function() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
      skill.style.width = skill.parentElement.style.width; // Apply width from inline style
    });
  };
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    
    // Validate fields
    if (name === '' || email === '' || message === '') {
      document.getElementById('formMessage').innerHTML = '<p style="color: red;">All fields are required. Please fill in all fields.</p>';
    } else {
      // If valid, display success message (this is just a placeholder action)
      document.getElementById('formMessage').innerHTML = '<p style="color: green;">Thank you for your message! I will get back to you shortly.</p>';
      
      // Optionally, you can submit the form here via AJAX or other methods
      // For now, the form does not submit because of event.preventDefault()
    }
  });
  