document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var destination = document.getElementById('destination');

    // Simple form validation
    if (name.value === '' || destination.value === '') {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Form submission via Fetch
    fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            destination: destination.value
        })
    })
        .then(response => {
            if(!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json()
        })
        .then(data => {
            if (data.success) {
                alert(`Thank you ${name.value}, your limo to ${destination.value} is on its way!`);
            } else {
                alert("Sorry, there was a problem with your booking. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Reset form fields after submission
    name.value = '';
    destination.value = '';
});

/*Adding in the hamburger menu functionality */

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

/* Adding in the slide show functionality */

var slides = Array.from(document.querySelectorAll('.slide'));
var currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // Change this to adjust the slide transition time

/*loading screen --> hiding it after*/
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none';
});
/*intentionally delays the screen*/
window.addEventListener('load', function() {
    setTimeout(function(){
        document.body.classList.add('loaded');
    }, 3000); // delay in milliseconds
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});