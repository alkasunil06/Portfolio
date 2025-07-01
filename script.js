$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Learner", "Explorer", "Tech Enthusiast", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Learner", "Explorer", "Tech Enthusiast", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    // Existing code for your page's other functionalities (e.g., scroll behavior, typing animation, etc.)

// AJAX form submission for contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        subject: document.querySelector("input[name='subject']").value,
        message: document.querySelector("textarea[name='message']").value
    };

    // Send data to the backend
    fetch("http://localhost:3000/send", {
        method: "POST", // Use POST method to send data
        headers: {
            "Content-Type": "application/json",  // Ensure the request is in JSON format
        },
        body: JSON.stringify(formData), // Send the form data as a JSON string
    })
    .then(response => response.json()) // Parse the JSON response from the backend
    .then(data => {
        // Display the message from the backend
        document.getElementById("form-response").innerText = data.message; // Success or failure message
        if (data.message === "Message sent successfully!") {
            document.getElementById("contact-form").reset(); // Reset form on success
        }
    })
    .catch(error => {
        document.getElementById("form-response").innerText = "Error sending message."; // Error message if something goes wrong
        console.error("Error:", error); // Log the error in the console for debugging
    });
});

});