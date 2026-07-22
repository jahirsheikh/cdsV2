(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar-custom').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar-custom').removeClass('sticky-top shadow-sm');
        }
    });

    // Initialize AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // ... (Swiper, Counter Up, initScrollTopBtn — leave these as they are)

    // initScrollTopBtn();


    function initScrollTopBtn() {
        if (document.getElementById('scrollTopBtn')) return;

        const btn = document.createElement('button');
        btn.id = 'scrollTopBtn';
        btn.title = 'Go to top';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(btn);

        window.addEventListener('scroll', function () {
            btn.classList.toggle('show', window.scrollY > 400);
        });
        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // === UNCOMMENT these two lines so headerHTML/footerHTML actually exist ===
    // const headerHTML = "<!-- Skip link for keyboard users -->\n<a class=\"skip-link\" href=\"#main-content\">Skip to main content</a>\n<!-- Top Bar -->\n    <div class=\"top-bar\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-6\">\n                    <a href=\"mailto:info@cdssssl.com\" class=\"me-3 text-white\" aria-label=\"Email info at CDS\"><i class=\"fas fa-envelope text-primary me-2\" aria-hidden=\"true\"></i> info@cdssssl.com</a>\n                    <a href=\"tel:+8801710905771\" class=\"text-white ms-3\" aria-label=\"Call CDS\"> <i class=\"fas fa-phone-alt text-primary me-2\" aria-hidden=\"true\"></i> +880 1710905771</a>\n                </div>\n                <div class=\"col-md-6 text-end\">\n\n    <a href=\"https://www.facebook.com/profile.php?id=100092745161596\"\n       class=\"text-white me-3\"\n       target=\"_blank\"\n       rel=\"noopener noreferrer\"\n       aria-label=\"Facebook\">\n        <i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/company/107734189/\"\n       class=\"text-white me-3\"\n       target=\"_blank\"\n       rel=\"noopener noreferrer\"\n       aria-label=\"LinkedIn\">\n        <i class=\"fab fa-linkedin-in\" aria-hidden=\"true\"></i>\n    </a>\n    <!-- <div class=\"dropdown d-inline-block\">\n        <button class=\"btn btn-sm btn-outline-light dropdown-toggle\"\n                type=\"button\"\n                data-bs-toggle=\"dropdown\"\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n            EN\n        </button>\n\n    </div> -->\n\n    <button class=\"btn  btn-sm\" data-bs-toggle=\"modal\" data-bs-target=\"#contactModal\">\n    Talk to Our Team\n</button>\n\n\n\n    \n</div>\n\n\n</div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Header -->\n    <nav class=\"navbar navbar-expand-lg navbar-custom\" role=\"navigation\" aria-label=\"Main navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"index.html\">\n                <div class=\"brand-container\">\n                    <img src=\"assets/img/logo/cds_logo-removebg.png\" alt=\"CDS\" height=\"40\">\n                    <span class=\"brand-text\">\n                        <strong>CDS</strong>\n                        <span class=\"brand-subtitle\">System & Solution Ltd</span>\n                    </span>\n                </div>\n                <span class=\"brand-accent-line\"></span>\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav ms-auto mb-2 mb-lg-0 align-items-center\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"index.html\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"about.html\">About Us</a>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Company</a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a class=\"dropdown-item\" href=\"memberships.html\">Memberships</a></li>\n                            <li><a class=\"dropdown-item\" href=\"certificate.html\">Certifications</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n                        \n                    </li>\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Solutions</a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a class=\"dropdown-item\" href=\"mdmsolution.html\">MDM Solution</a></li>\n                            <li><a class=\"dropdown-item\" href=\"enterprise-erp.html\">Enterprise ERP</a></li>\n                            <li><a class=\"dropdown-item\" href=\"telecom.html\">Telecom Managed Services</a></li>\n                            <li><a class=\"dropdown-item\" href=\"fintech-digitalbanking.html\">FinTech & Digital Banking</a></li>\n                        </ul>\n                    </li>\n                    \n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n                    </li>\n                    <li class=\"nav-item ms-lg-3 mt-3 mt-lg-0\">\n                        <a href=\"contact.html\" class=\"btn btn-primary-custom\">Get Started</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>";   // your existing string, just remove the // 
    // const footerHTML = "<!-- Footer -->\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"row g-4 mb-5\">\n                <div class=\"col-lg-4 col-md-6\">\n                    <div class=\"brand-footer mb-4\">\n                        <strong class=\"h3 mb-0\">CDS</strong>\n                        <div class=\"brand-subtitle\">System & Solution Ltd</div>\n                    </div>\n                    <p class=\"mb-4\">Empowering businesses with smart GPS tracking, advanced fleet management, and\n                        cutting-edge IoT solutions.</p>\n                    <div class=\"d-flex gap-3\">\n                        <a href=\"https://www.facebook.com/profile.php?id=100092745161596\" class=\"social-btn\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Facebook\">\n                            <i class=\"fab fa-facebook-f\" aria-hidden=\"true\"></i>\n                        </a>\n                        <a href=\"https://www.linkedin.com/company/107734189/\" class=\"social-btn\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"LinkedIn\">\n                            <i class=\"fab fa-linkedin-in\" aria-hidden=\"true\"></i>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-2 col-md-6\">\n                    <h5 class=\"footer-title\">Company</h5>\n                    <ul class=\"list-unstyled\">\n                        <li class=\"mb-2\"><a href=\"about.html\">About Us</a></li>\n                        <li class=\"mb-2\"><a href=\"#\">Careers</a></li>\n                        <li class=\"mb-2\"><a href=\"#\">Blog</a></li>\n                        <li class=\"mb-2\"><a href=\"contact.html\">Contact</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-2 col-md-6\">\n                    <h5 class=\"footer-title\">Services</h5>\n                    <ul class=\"list-unstyled\">\n                        <li class=\"mb-2\"><a href=\"#\">GPS Tracking</a></li>\n                        <li class=\"mb-2\"><a href=\"#\">Fleet Management</a></li>\n                        <li class=\"mb-2\"><a href=\"#\">IoT Solutions</a></li>\n                        <li class=\"mb-2\"><a href=\"#\">Asset Tracking</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-4 col-md-6\">\n                    <h5 class=\"footer-title\">Newsletter</h5>\n                    <p>Subscribe to our newsletter to receive latest updates and offers.</p>\n                    <form class=\"d-flex mt-3\" aria-label=\"Subscribe to newsletter\">\n                        <input type=\"email\" aria-label=\"Email address\" class=\"form-control me-2 bg-dark text-white border-secondary\"\n                            placeholder=\"Email Address\">\n                        <button class=\"btn btn-primary-custom\" type=\"button\">Subscribe</button>\n                    </form>\n                </div>\n            </div>\n            <div class=\"border-top border-secondary pt-4 text-center\">\n                <p class=\"mb-0\">&copy; <span id=\"currentYear\"></span> CDS. All Rights Reserved.</p>\n            </div>\n        </div>\n    </footer>";   // your existing string, just remove the //

    const headerHTML = `
<!-- Skip link for keyboard users -->
<a class="skip-link" href="#main-content">Skip to main content</a>

<!-- Top Bar -->
<div class="top-bar">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <a href="mailto:info@cdsssl.com" class="me-3 text-white" aria-label="Email info at CDS">
                    <i class="fas fa-envelope text-primary me-2" aria-hidden="true"></i> info@cdsssl.com
                </a>
                <a href="tel:+8801710905771" class="text-white ms-3" aria-label="Call CDS">
                    <i class="fas fa-phone-alt text-primary me-2" aria-hidden="true"></i> +880 1710905771
                </a>
            </div>
            <div class="col-md-6 text-end">
                <a href="https://www.facebook.com/profile.php?id=100092745161596" class="text-white me-3"
                    target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/company/107734189/" class="text-white me-3" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href="contact.html">Talk to Our Team</a>
            </div>
        </div>
    </div>
</div>

<!-- Header -->
<nav class="navbar navbar-expand-lg navbar-custom" role="navigation" aria-label="Main navigation">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <div class="brand-container">
                <img src="assets/img/logo/cds_logo-removebg.png" alt="CDS" height="40">
                <span class="brand-text">
                    <strong>CDS</strong>
                    <span class="brand-subtitle">System & Solution Ltd</span>
                </span>
            </div>
            <span class="brand-accent-line"></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button"
                        aria-haspopup="true" aria-expanded="false">Company</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="about.html">About Us</a></li>
                        <li><a class="dropdown-item" href="smiling-experience.html">Smiling Experience</a></li>
                        <li><a class="dropdown-item" href="memberships.html">Memberships</a></li>
                        <li><a class="dropdown-item" href="certificate.html">Certifications</a></li>
                        <li><a class="dropdown-item" href="contact.html">Contact</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" role="button"
                        aria-haspopup="true" aria-expanded="false">Solutions</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="telecom.html">Telecom Managed Services</a></li>
                        <li><a class="dropdown-item" href="oem-distribution.html">OEM Distribution</a></li>
                        <li><a class="dropdown-item" href="mdmsolution.html">MDM Solution</a></li>
                        <li><a class="dropdown-item" href="egp-public-sector.html">e-GP & Public Sector</a></li>
                        <li><a class="dropdown-item" href="fintech-digitalbanking.html">FinTech & Digital Banking</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="energy-power.html">Energy & Power</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="why-cds.html">Why CDS</a>
                </li>

                <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                    <a href="contact.html" class="btn btn-primary-custom">Get Started</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

    const footerHTML = `
<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="row g-4 mb-5">
            <!-- Brand + Certifications -->
            <div class="col-lg-4 col-md-6">
                <div class="brand-footer mb-4">
                    <strong class="h3 mb-0">CDS</strong>
                    <div class="brand-subtitle">System & Solution Limited</div>
                </div>
                <p class="mb-4">Bangladesh's trusted enterprise technology partner. Architecting digital
                    infrastructure since 2015.</p>
                <div class="d-flex gap-3 mb-4">
                    <a href="https://www.linkedin.com/company/107734189/" class="social-btn" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100092745161596" class="social-btn"
                        target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a href="mailto:info@cdsssl.com" class="social-btn" aria-label="Email">
                        <i class="fas fa-at" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="d-flex flex-column gap-2 footer-certs">
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-certificate text-primary"></i>
                        <div>
                            <div class="fw-semibold small">ISO 9001:2015</div>
                            <div class="text-muted small">RoyalCert / IAF / UAF</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-laptop-code text-primary"></i>
                        <div>
                            <div class="fw-semibold small">BASIS Member</div>
                            <div class="text-muted small">Bangladesh Association of Software</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-headset text-primary"></i>
                        <div>
                            <div class="fw-semibold small">BACCO Member</div>
                            <div class="text-muted small">Bangladesh Call Centre Association</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="fas fa-check-circle text-primary"></i>
                        <div>
                            <div class="fw-semibold small">e-GP Verified</div>
                            <div class="text-muted small">Central Procurement Authority</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Solutions -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-title">Solutions</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="mdmsolution.html">MDM Solutions</a></li>
                    <li class="mb-2"><a href="fintech-digitalbanking.html">FinTech & Digital Banking</a></li>
                    <li class="mb-2"><a href="telecom.html">Telecom Managed Services</a></li>
                    <li class="mb-2"><a href="energy-power.html">Energy & Solar (EaaS)</a></li>
                    <li class="mb-2"><a href="oem-distribution.html">OEM Distribution</a></li>
                    <li class="mb-2"><a href="egp-public-sector.html">eGP & Public Sector</a></li>
                </ul>
            </div>

            <!-- Company + Resources -->
            <div class="col-lg-2 col-md-6">
                <h5 class="footer-title">Company</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="about.html">About CDS</a></li>
                    <li class="mb-2"><a href="about.html#leadership">Leadership Team</a></li>
                    <li class="mb-2"><a href="certificate.html">Certifications</a></li>
                    <li class="mb-2"><a href="clients.html">Our Clients</a></li>
                    <li class="mb-2"><a href="memberships.html">Memberships</a></li>
                    <li class="mb-2"><a href="why-cds.html">Why CDS</a></li>
                </ul>

                <h5 class="footer-title mt-4">Resources</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="smiling-experience.html">Case Studies</a></li>
                    <li class="mb-2"><a href="contact.html">Request a Demo</a></li>
                    <li class="mb-2"><a href="contact.html">Partnership Inquiry</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="col-lg-3 col-md-6">
                <h5 class="footer-title">Contact</h5>
                <ul class="list-unstyled footer-contact">
                    <li class="d-flex gap-2 mb-3">
                        <i class="fas fa-location-dot text-primary mt-1"></i>
                        <div>
                            <div class="fw-semibold small">Head Office</div>
                            <div class="text-light small">House #21, Road #13, Sector #01, Uttara, Dhaka-1230,
                                Bangladesh</div>
                        </div>
                    </li>
                    <li class="d-flex gap-2 mb-3">
                        <i class="fas fa-industry text-primary mt-1"></i>
                        <div>
                            <div class="fw-semibold small">Warehouse</div>
                            <div class="text-light small">190/C Fakirapool (GF), Motijheel, Dhaka-1000</div>
                        </div>
                    </li>
                    <li class="d-flex gap-2 mb-3">
                        <i class="fas fa-phone text-primary mt-1"></i>
                        <div>
                            <div class="fw-semibold small">Phone</div>
                            <div class="text-light small">
                                <a href="tel:+8801678077025" class="text-light">+880 1678 077 025</a><br>
                                <a href="tel:+8801710905771" class="text-light">+880 1710 905 771</a>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex gap-2 mb-3">
                        <i class="fas fa-envelope text-primary mt-1"></i>
                        <div>
                            <div class="fw-semibold small">Email</div>
                            <div class="text-light small">
                                <a href="mailto:info@cdsssl.com" class="text-light">info@cdsssl.com</a><br>
                                <a href="mailto:support@cdsssl.com" class="text-light">support@cdsssl.com</a>
                            </div>
                        </div>
                    </li>
                    <li class="d-flex gap-2">
                        <i class="fas fa-clock text-primary mt-1"></i>
                        <div>
                            <div class="fw-semibold small">Business Hours</div>
                            <div class="text-light small">
                                Sun–Thu: 9:00 AM – 6:00 PM<br>
                                Sat: 10:00 AM – 3:00 PM<br>
                                24/7 Emergency Hotline
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p class="mb-0 text-center text-md-start">&copy; <span id="currentYear"></span> CDS System & Solution
                Limited. All rights reserved. Registered in Bangladesh.</p>
            <div class="d-flex gap-3 flex-wrap justify-content-center">
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="terms-of-use.html">Terms of Use</a>
                <a href="cookie-policy.html">Cookie Policy</a>
                <a href="sitemap.html">Sitemap</a>
            </div>
        </div>
    </div>
</footer>
`;

    // ---- Header / Footer load (ONLY place this happens) ----
    // === REPLACE the old $(function () {...}) block with the new dual-mode one ===
    $(function () {
        const isLocalFile = window.location.protocol === "file:";

        if (isLocalFile) {
            $('#header-placeholder').html(headerHTML);
            $('#footer-placeholder').html(footerHTML);
            setActiveMenu();
            // initSolutionsMobileDropdown();
            try {
                $('#footer-placeholder').find('#currentYear').text(new Date().getFullYear());
            } catch (e) {
                console.warn('Could not set footer year', e);
            }
        } else {
            $("#header-placeholder").load("header.html", function (response, status, xhr) {
                if (status === "error") {
                    console.log("Header load error:", xhr.status, xhr.statusText);
                    return;
                }
                setActiveMenu();
                initSolutionsMobileDropdown();
            });

            $("#footer-placeholder").load("footer.html", function (response, status, xhr) {
                if (status === "error") {
                    console.log("Footer load error:", xhr.status, xhr.statusText);
                    return;
                }
                try {
                    $(this).find('#currentYear').text(new Date().getFullYear());
                } catch (e) {
                    console.warn('Could not set footer year', e);
                }
            });
        }
    });

    // Set the active menu item based on current page
    function setActiveMenu() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        $(".navbar-nav .nav-link").removeClass("active").removeAttr('aria-current');
        $(".navbar-nav .nav-link").each(function () {
            if ($(this).attr("href") === currentPage) {
                $(this).addClass("active").attr('aria-current', 'page');
            }
        });
    }






    /* ============================================
   SCROLL-TO-TOP BUTTON WITH CIRCULAR PROGRESS
   Add this block into your existing main.js
   (after header/footer are injected, or anywhere
   that runs on every page load)
   ============================================ */

    (function () {
        // 1. Inject the button markup once, on every page
        const scrollBtnHTML = `
        <a href="#" class="scroll-top" aria-label="Scroll to top">
            <svg class="scroll-top-ring" viewBox="0 0 44 44">
                <circle class="scroll-top-ring-bg" cx="22" cy="22" r="20"></circle>
                <circle class="scroll-top-ring-progress" cx="22" cy="22" r="20"></circle>
            </svg>
            <i class="fas fa-arrow-up"></i>
        </a>
    `;
        document.body.insertAdjacentHTML('beforeend', scrollBtnHTML);

        const scrollBtn = document.querySelector('.scroll-top');
        const progressRing = document.querySelector('.scroll-top-ring-progress');
        const radius = 20;
        const circumference = 2 * Math.PI * radius;

        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;

        function updateScrollProgress() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

            // Fill the ring based on how far down the page you are
            const offset = circumference - (scrollPercent * circumference);
            progressRing.style.strokeDashoffset = offset;

            // Show button only after scrolling down a bit (300px)
            if (scrollTop > 300) {
                scrollBtn.classList.add('active');
            } else {
                scrollBtn.classList.remove('active');
            }
        }

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress(); // run once on load in case page is already scrolled

        scrollBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

})(jQuery);