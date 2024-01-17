document.addEventListener('DOMContentLoaded', function () {
    fetch('sections/section1.html')
        .then(response => response.text())
        .then(data => document.getElementById('section1').innerHTML = data);
});