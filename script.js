document.addEventListener('DOMContentLoaded', function () {
    // Additional JavaScript for Header Scaling and Animation on Scroll
    var header = document.getElementById('heading');
    var waveToEarth = header.querySelector('h1');
    var navigationLinks = header.querySelector('p.round3');
    var smallHeightThreshold = 70; // Adjust this value based on when you want the elements to stay small

    
    window.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        var scale = 1 - Math.min(scrollY / smallHeightThreshold, 1);

        // Apply the scaling to the header height
        header.style.height = 190 * scale + 'px';

        // Check if scroll position is beyond the threshold to add the class
        if (scrollY >= smallHeightThreshold) {
            header.classList.add('small-height');
        } else {
            header.classList.remove('small-height');
        }

        // Calculate the vertical offset for p.round3
        var offset = Math.min(50, scrollY / 2);

        // Apply the vertical offset to move p.round3 up
        navigationLinks.style.transform = 'translateY(-' + offset + 'px)';

        // Set a fixed left offset to move "Wave to Earth" all the way to the left
        var leftOffset = scale < 0.8 ? 1300 : 0;

        // Apply the left offset to move "Wave to Earth" to the left
        waveToEarth.style.marginLeft = '-' + leftOffset + 'px';

        // Move h1 and p.round3 higher after scrolling down
        var moveUp = scale < 0.8 ? 5 : 0; // Adjust the value based on your preference
        waveToEarth.style.marginTop = '-' + moveUp + 'px';
        navigationLinks.style.marginTop = '-' + (moveUp + offset) + 'px'; // Adjusted here

        // Move "Wave to Earth" down a bit after scrolling
        var moveDown = scale < 0.8 ? -72 : 0; // Adjust the value based on your preference
        waveToEarth.style.marginTop = moveDown + 'px';

        // Display "wave to" and "earth" on separate lines when the header is smaller
        if (scale < 0.8) {
            waveToEarth.innerHTML = 'Wave to<br>Earth';
        } else {
            waveToEarth.innerHTML = 'Wave to Earth';
        }
    });
})

//Pop up
document.addEventListener('DOMContentLoaded', function () {
    // Add a submit event listener to the form
    var form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Show the popup
        showPopup();

        // Reset the form if needed
        form.reset();
    });

    // Function to show the popup
    function showPopup() {
        var popup = document.getElementById('popup');
        popup.style.display = 'block';

        // Setting a timeout to hide the popup after a certain duration
        setTimeout(function () {
            popup.style.display = 'none';
        }, 1000); // 3000 milliseconds (3 seconds) in this example
    }
});
