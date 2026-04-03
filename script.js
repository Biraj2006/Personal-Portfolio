/* TYPING ANIMATION */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Developer", "B.Tech IT Student", "Java Enthusiast", "Problem Solver"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On load, start typing animation
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // We keep observing for re-entry animations if desired, 
            // but for a professional look, once is usually enough.
            // revealObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* STICKY NAVBAR */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

/* MOBILE MENU toggle */
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navLinks.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

/* CONTACT FORM logic with Formspree Fetch */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        const formData = new FormData(contactForm);
        
        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        try {
            const response = await fetch(contactForm.getAttribute('action'), {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                btn.innerHTML = 'Message Sent! <i data-lucide="check" style="width:16px; margin-left:5px;"></i>';
                btn.style.background = '#22c55e';
                contactForm.reset();
                lucide.createIcons();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                    lucide.createIcons();
                }, 4000);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Server error');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            btn.innerHTML = 'Error! Try Again';
            btn.style.background = '#ef4444'; // Red
            btn.disabled = false;

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 3000);
        }
    });
}

// Initialize Lucide Icons
if (window.lucide) {
    lucide.createIcons();
}
