const toggleButton = document.querySelector('.toggle-button');
const mapSection = document.querySelector('.map-section');

toggleButton.addEventListener('click', function() {
    mapSection.classList.toggle('active');
});