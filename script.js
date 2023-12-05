// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission handling
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add additional form handling logic here
    // For now, let's display an alert with the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Form submitted!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // You can also send the form data to a server using AJAX or fetch
    // Example:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  });
});
