<script>
    // Form Validation & Submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Always stop default submit
            e.stopPropagation(); // Extra safety

            const name = document.querySelector('#contact-form input[type="text"]').value.trim();
            const email = document.querySelector('#contact-form input[type="email"]').value.trim();
            const message = document.querySelector('#contact-form textarea').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields!');
                return;
            }

            // Build email body
            const subject = encodeURIComponent('New Project Inquiry from ' + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                'Message:\n' + message
            );

            
           

            // Reset and confirm
            form.reset();
            alert('Message queued! Check your email app to send.');
        });
    } else {
        console.error('Form not found!'); // Debug log
    }

    // Smooth Scroll for Anchors (unchanged)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Fade-in Animation for Service Cards (unchanged)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
</script>