// Components.js - Reusable navbar and footer components

// Navbar Component
function createNavbar() {
    return `
    <!-- Top Navigation Bar -->
    <nav class="navbar navbar-top">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="Meck Brothers Construction" class="logo-image">
                </a>
            </div>
            <div class="nav-menu" id="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="services.html" class="nav-link">Services</a>
                <a href="projects.html" class="nav-link">Projects</a>
                <a href="team.html" class="nav-link">Team</a>
                <a href="blog.html" class="nav-link">Blog</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="contact.html" class="nav-link">Contact</a>
            </div>
            <div class="nav-cta">
                <a href="contact.html" class="btn btn-estimate">Free Estimate</a>
            </div>
            <div class="nav-toggle" id="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Bottom Navigation Bar -->
    <nav class="navbar navbar-bottom">
        <div class="nav-container">
            <div class="sub-nav-menu">
                <a href="services.html#design-build" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9,22 9,12 15,12 15,22"></polyline>
                    </svg>
                    Design Build
                </a>
                <a href="services.html#kitchens" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                    Kitchens
                </a>
                <a href="services.html#baths" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <path d="M4 8h16"></path>
                        <path d="M8 12h8"></path>
                    </svg>
                    Baths
                </a>
                <a href="services.html#flooring-painting" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="9" cy="9" r="2"></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                    Flooring & Painting
                </a>
                <a href="services.html#decks" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    Decks
                </a>
                <a href="services.html#commercial" class="sub-nav-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sub-nav-icon">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    Commercial
                </a>
            </div>
        </div>
    </nav>
    `;
}

// Footer Component
function createFooter() {
    return `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="Meck Brothers Construction" class="footer-logo-image">
                        </a>
                    </div>
                    <p>Family-run construction and remodeling company serving New Jersey for 24+ years. Licensed, bonded, and insured. Specializing in home additions, kitchen & bath remodels, basements, and outdoor living spaces.</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/meckbrothers" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                        <a href="https://www.instagram.com/meck_brothers_construction/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                        <a href="https://www.houzz.com/pro/bkalmus" target="_blank" rel="noopener noreferrer" aria-label="Houzz"><img src="images/houzz.png" alt="Houzz" style="width: 24px; height: 24px; filter: brightness(0) invert(1);"></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <p>Meck Brother's Construction</p>
                        <p>59 E Mill Rd, Suite 1-205<br>Long Valley, NJ 07853</p>
                        <p><a href="tel:(908) 235-3035">(908) 235-3035</a></p>
                        <p><a href="mailto:mjkalmus19@gmail.com">mjkalmus19@gmail.com</a></p>
                        <p>Hours: Mon–Fri: 7:00am – 5:00pm<br>Weekends: By appointment</p>
                        <p>License: NJ HIC#13VH08955600</p>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="projects.html">Our Work</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; 2024 Meck Brothers Construction. All rights reserved.</p>
                    <div class="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Function to load components
function loadComponents() {
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = createNavbar();
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
}); 