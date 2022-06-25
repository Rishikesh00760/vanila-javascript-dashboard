const home = document.getElementById('home');
const people = document.getElementById('people');
const statusw = document.getElementById('status');
const contact = document.getElementById('contact');

const homeLink = document.getElementById('homeLink');
const peopleLink = document.getElementById('peopleLink');
const statusLink = document.getElementById('statusLink');
const contactLink = document.getElementById('contactLink');

homeLink.addEventListener('click', function() {
    home.style.display = 'block';
    people.style.display = 'none';
    statusw.style.display = 'none';
    contact.style.display = 'none';
});

peopleLink.addEventListener('click', function() {
    home.style.display = 'none';
    people.style.display = 'block';
    statusw.style.display = 'none';
    contact.style.display = 'none';
});

statusLink.addEventListener('click', function() {
    home.style.display = 'none';
    people.style.display = 'none';
    statusw.style.display = 'block';
    contact.style.display = 'none';
});

contactLink.addEventListener('click', function() {
    home.style.display = 'none';
    people.style.display = 'none';
    statusw.style.display = 'none';
    contact.style.display = 'block';
});
