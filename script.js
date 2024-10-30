const email = document.getElementById('email');
console.log('email is: ', email);
email.addEventListener('mouseover', function() {
    alert('Please send all email inquiries to: paredes.Jonathen@yahoo.com');
});

const input = document.getElementById('phone');
phone.addEventListener('mouseover', function() {
    alert('Leave a voicemail inquiry to: 959.204.1689');
});
document.getElementById("toggleButton").addEventListener("click", function () {
    const content = document.getElementById("content");
    const button = document.getElementById("toggleButton");
    
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "I Got it, Thanks!";
    } else {
        content.style.display = "none";
        button.textContent = "Tell Me More!";
    }
});

