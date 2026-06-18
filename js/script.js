// Form Validation & Submission
document.addEventListener('DOMContentLoaded', () => {

    // Enquiry Form
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                alert("✅ Thank you! Your enquiry has been received. We'll reply via WhatsApp soon.");
                this.reset();
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                alert("✅ Message sent successfully! Thank you for contacting us.");
                this.reset();
            }
        });
    }

    // FAQ Accordion (Great for Part 3 marks)
    const faqQuestions = document.querySelectorAll('.faq-page p');
    faqQuestions.forEach(p => {
        p.style.cursor = 'pointer';
        p.addEventListener('click', () => {
            p.classList.toggle('expanded');
        });
    });

    // Simple Menu Search/Filter
    const menuTable = document.querySelector('.menu-page table');
    if (menuTable) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search menu...';
        searchInput.style.margin = '20px auto';
        searchInput.style.display = 'block';
        searchInput.style.padding = '10px';
        searchInput.style.width = '80%';
        menuTable.parentNode.insertBefore(searchInput, menuTable);

        searchInput.addEventListener('keyup', () => {
            const filter = searchInput.value.toLowerCase();
            const rows = menuTable.getElementsByTagName('tr');
            for (let i = 1; i < rows.length; i++) {
                const text = rows[i].textContent.toLowerCase();
                rows[i].style.display = text.includes(filter) ? '' : 'none';
            }
        });
    }
});

// Basic Form Validation
function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '';
        }
    });

    return valid;
}