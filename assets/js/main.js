(function($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.navbar-custom').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar-custom').removeClass('sticky-top shadow-sm');
        }
    });

    // Initialize AOS Animation
    if(typeof AOS !== 'undefined') {
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
                <a href="mailto:info@cdssssl.com" class="me-3 text-white" aria-label="Email info at CDS">
                    <i class="fas fa-envelope text-primary me-2" aria-hidden="true"></i> info@cdssssl.com
                </a>
                <a href="tel:+8801710905771" class="text-white ms-3" aria-label="Call CDS">
                    <i class="fas fa-phone-alt text-primary me-2" aria-hidden="true"></i> +880 1710905771
                </a>
            </div>
            <div class="col-md-6 text-end">
                <a href="https://www.facebook.com/profile.php?id=100092745161596"
                   class="text-white me-3" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/company/107734189/"
                   class="text-white me-3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>

                <a href="contact.html" >
    Talk to Our Team
</a>
     
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
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                       role="button" aria-haspopup="true" aria-expanded="false">Company</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="memberships.html">Memberships</a></li>
                        <li><a class="dropdown-item" href="certificate.html">Certifications</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="service.html">Services</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                       role="button" aria-haspopup="true" aria-expanded="false">Solutions</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="telecom.html">Telecom Managed Services</a></li>
                        <li><a class="dropdown-item" href="mdmsolution.html">MDM Solution</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
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
            <div class="col-lg-4 col-md-6">
                <div class="brand-footer mb-4">
                    <strong class="h3 mb-0">CDS</strong>
                    <div class="brand-subtitle">System & Solution Ltd</div>
                </div>
                <p class="mb-4">Empowering businesses with smart GPS tracking, advanced fleet management, and
                    cutting-edge IoT solutions.</p>
                <div class="d-flex gap-3">
                    <a href="https://www.facebook.com/profile.php?id=100092745161596" class="social-btn"
                       target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/107734189/" class="social-btn"
                       target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="footer-title">Company</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="about.html">About Us</a></li>
                    <li class="mb-2"><a href="#">Careers</a></li>
                    <li class="mb-2"><a href="#">Blog</a></li>
                    <li class="mb-2"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="footer-title">Services</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="service.html">Billing Solution</a></li>
                    <li class="mb-2"><a href="service.html">ERP Management System</a></li>
                    <li class="mb-2"><a href="service.html">ATM & CRM Sales</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="footer-title">Newsletter</h5>
                <p>Subscribe to our newsletter to receive latest updates and offers.</p>
                <form class="d-flex mt-3" aria-label="Subscribe to newsletter">
                    <input type="email" aria-label="Email address"
                           class="form-control me-2 bg-dark text-white border-secondary"
                           placeholder="Email Address">
                    <button class="btn btn-primary-custom" type="button">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="border-top border-secondary pt-4 text-center">
            <p class="mb-0">&copy; <span id="currentYear"></span> CDS. All Rights Reserved.</p>
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
                $(this).addClass("active").attr('aria-current','page');
            }
        });
    }

    // DELETE the old trailing block that duplicated setActiveMenu logic —
    // it ran too early (before header was in DOM) and is now fully redundant.

})(jQuery);