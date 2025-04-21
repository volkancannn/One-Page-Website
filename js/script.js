// Change navbar background on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// Smooth scrolling for navigation links
$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Form validation
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Basic validation
        let valid = true;
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();
        
        if (name === '') {
            valid = false;
            $('#name').addClass('is-invalid');
        } else {
            $('#name').removeClass('is-invalid');
        }
        
        if (email === '' || !email.includes('@')) {
            valid = false;
            $('#email').addClass('is-invalid');
        } else {
            $('#email').removeClass('is-invalid');
        }
        
        if (subject === '') {
            valid = false;
            $('#subject').addClass('is-invalid');
        } else {
            $('#subject').removeClass('is-invalid');
        }
        
        if (message === '') {
            valid = false;
            $('#message').addClass('is-invalid');
        } else {
            $('#message').removeClass('is-invalid');
        }
        
        if (valid) {
            // In a real implementation, you would send the form data to the server here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        }
    });
}); 