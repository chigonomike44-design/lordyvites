// script.js

// Smooth Scrolling  
const scrollLinks = document.querySelectorAll('a[href^="#"]');  
scrollLinks.forEach(link => {  
  link.addEventListener('click', function(e) {  
    e.preventDefault();  
    const targetId = this.getAttribute('href');  
    const targetElement = document.querySelector(targetId);  
    targetElement.scrollIntoView({  
      behavior: 'smooth'  
    });  
  });  
});  

// Mobile Menu Toggle  
document.querySelector('.menu-toggle').addEventListener('click', function() {  
  const menu = document.querySelector('.nav-menu');  
  menu.classList.toggle('active');  
});  

// Form Handling  
const form = document.querySelector('form');  
form.addEventListener('submit', function(e) {  
  e.preventDefault();  
  const formData = new FormData(form);  
  // Handle form data here  
  console.log('Form submitted', formData);  
});  

// Interactive Elements  
const interactiveElements = document.querySelectorAll('.interactive');  
interactiveElements.forEach(element => {  
  element.addEventListener('click', function() {  
    // Define your interaction here  
    this.classList.toggle('active');  
  });  
});