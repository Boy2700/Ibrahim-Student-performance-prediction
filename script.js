var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
        targets: 'path',
        strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
        },
        strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
        }
    });
});



document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if input fields are empty
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password.");
    } else if (email === "anas@gmail.com" && password === "anas") { // Check for valid credentials
        alert("Login successful!");
        window.location.href = "performance/home.html"; // Redirect to home page on success
    } else {
        alert("Invalid email or password.");
    }
});