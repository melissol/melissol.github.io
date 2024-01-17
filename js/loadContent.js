document.addEventListener('DOMContentLoaded', function () {

    fetch('sections/section1.html')
        .then(response => response.text())
        .then(data => document.getElementById('section1').innerHTML = data);

    fetch('sections/about.html')
        .then(response => response.text())
        .then(data => document.getElementById('about').innerHTML = data);

    fetch('sections/contact.html')
        .then(response => response.text())
        .then(data => document.getElementById('contact').innerHTML = data);

    fetch('sections/footer..html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});