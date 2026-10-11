/* TYPING ANIMATION */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "B.Tech IT Student",
    "Software Developer",
    "Java & Full-Stack Enthusiast",
    "Problem Solver"
];
const typingDelay = 90;
const erasingDelay = 45;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (!typedTextSpan || !cursorSpan) return;
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (!typedTextSpan || !cursorSpan) return;
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typedTextSpan && textArray.length) {
        setTimeout(type, 1000);
    }
});

/* SCROLL REVEAL (IntersectionObserver) */
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((el) => el.classList.add("active"));
}

/* STICKY NAVBAR */
const nav = document.querySelector("nav");
if (nav) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
}

/* MOBILE MENU TOGGLE & ACCESSIBILITY */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

function toggleMenu(isOpen) {
    if (!navLinks || !menuBtn) return;
    const active = typeof isOpen === "boolean" ? isOpen : !navLinks.classList.contains("active");
    navLinks.classList.toggle("active", active);
    menuBtn.setAttribute("aria-expanded", active ? "true" : "false");

    const spans = menuBtn.querySelectorAll("span");
    spans.forEach((span, index) => {
        if (active) {
            if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)";
            if (index === 1) span.style.opacity = "0";
            if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)";
        } else {
            span.style.transform = "none";
            span.style.opacity = "1";
        }
    });
}

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => toggleMenu());

    // Close menu when clicking any nav link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Close menu on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navLinks.classList.contains("active")) {
            toggleMenu(false);
        }
    });
}

/* CONTACT FORM VALIDATION & SUBMISSION */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const submitBtn = document.getElementById("submit-btn");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Clear individual field errors on input
    [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) {
            input.addEventListener("input", () => {
                input.classList.remove("invalid");
                const errSpan = document.getElementById(`${input.id}-error`);
                if (errSpan) errSpan.classList.remove("active");
                if (formStatus) formStatus.style.display = "none";
            });
        }
    });

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let isValid = true;

        // Name validation
        if (!nameInput || nameInput.value.trim().length < 2) {
            isValid = false;
            if (nameInput) nameInput.classList.add("invalid");
            if (nameError) nameError.classList.add("active");
        } else {
            if (nameInput) nameInput.classList.remove("invalid");
            if (nameError) nameError.classList.remove("active");
        }

        // Email validation
        if (!emailInput || !validateEmail(emailInput.value.trim())) {
            isValid = false;
            if (emailInput) emailInput.classList.add("invalid");
            if (emailError) emailError.classList.add("active");
        } else {
            if (emailInput) emailInput.classList.remove("invalid");
            if (emailError) emailError.classList.remove("active");
        }

        // Message validation
        if (!messageInput || messageInput.value.trim().length < 10) {
            isValid = false;
            if (messageInput) messageInput.classList.add("invalid");
            if (messageError) messageError.classList.add("active");
        } else {
            if (messageInput) messageInput.classList.remove("invalid");
            if (messageError) messageError.classList.remove("active");
        }

        if (!isValid) {
            if (formStatus) {
                formStatus.className = "form-status error";
                formStatus.textContent = "Please fill in all required fields properly before submitting.";
                formStatus.style.display = "block";
            }
            return;
        }

        // Submit form
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "Send Message";
        if (submitBtn) {
            submitBtn.innerHTML = "<span>Sending...</span>";
            submitBtn.disabled = true;
        }
        if (formStatus) formStatus.style.display = "none";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.getAttribute("action"), {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                if (formStatus) {
                    formStatus.className = "form-status success";
                    formStatus.textContent = "Thank you! Your message has been sent successfully. I will get back to you soon.";
                    formStatus.style.display = "block";
                }
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.innerHTML = '<span>Message Sent!</span> <i data-lucide="check" style="width:16px; margin-left:5px;"></i>';
                    submitBtn.style.background = "#22c55e";
                }
                if (window.lucide) lucide.createIcons();

                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.innerHTML = originalBtnHTML;
                        submitBtn.style.background = "";
                        submitBtn.disabled = false;
                    }
                    if (window.lucide) lucide.createIcons();
                }, 4000);
            } else {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Submission failed");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            if (formStatus) {
                formStatus.className = "form-status error";
                formStatus.textContent = "Unable to send your message right now. Please try again or reach out directly at birajbaral102@gmail.com.";
                formStatus.style.display = "block";
            }
            if (submitBtn) {
                submitBtn.innerHTML = originalBtnHTML;
                submitBtn.disabled = false;
            }
        }
    });
}

// Initialize Lucide Icons
if (window.lucide) {
    lucide.createIcons();
}
