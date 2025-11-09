<!-- FILE: script.js -->
// Small behavior: mobile nav toggle, smooth scrolling, contact form validation
document.addEventListener('DOMContentLoaded', function(){
var navToggle = document.getElementById('navToggle');
var navList = document.getElementById('navList');
navToggle.addEventListener('click', function(){ navList.classList.toggle('show'); });


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
anchor.addEventListener('click', function(e){
var target = document.querySelector(this.getAttribute('href'));
if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); navList.classList.remove('show'); }
});
});


// Simple contact form handling
var form = document.getElementById('contactForm');
var msg = document.getElementById('formMsg');
form.addEventListener('submit', function(e){
e.preventDefault();
var name = form.name.value.trim();
var email = form.email.value.trim();
var message = form.message.value.trim();
if(!name || !email || !message){
msg.textContent = 'Please fill out all fields.'; return;
}
// very light client-side email check
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
msg.textContent = 'Please enter a valid email.'; return;
}
// Simulate sending — replace with real endpoint when ready
msg.textContent = 'Sending...';
setTimeout(function(){
msg.textContent = 'Thanks, your message has been received!';
form.reset();
},700);
});
});
