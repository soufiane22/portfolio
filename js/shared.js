// shared.js

// Popper.js
document.write('<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"  integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></' + 'script>');

// Bootstrap
document.write('<script   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></' + 'script>');
document.write('<script   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"   integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></' + 'script>');
document.write('<script   src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js" ></' + 'script>');

// Animation On Scroll library
document.write(`<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>`)

// Auto typed library
document.write(`<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>`)

$(document).ready(function () {
    AOS.init();
    // $("#loading-screen").fadeOut("slow");


    // Handel the sidebar toggled  
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        const $navBar = $('iframe#vertical-nav-bar', parent.document);
        if ($navBar.length) {
            $navBar.toggleClass('vertical-nav-bar-active');
        } else {
            console.log("Element not found");
        }
    });


    // Adjust the iframe footer size
    function resizeIframe() {
        var iframe = document.getElementById('footer_content');
        iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    }
    if (document.getElementById('footer_content')) {
        document.getElementById('footer_content').onload = resizeIframe;
    }


    // Handel the active navigation item
    var navigation_links = $(".main_list li a");
    navigation_links.click(function () {
        $('ul li a').removeClass('active_item');
        $(this).addClass('active_item');

        // close the sidebar 
        const $navBar = $('iframe#vertical-nav-bar', parent.document);
        if ($navBar.length) {
            // send message to the main navbar for removing the active class from the trigger btn.
            window.parent.postMessage({ type: 'NAV_CLICK' }, '*');
            $navBar.removeClass('vertical-nav-bar-active');
        }
    });

    // Make navigation items active in scroll
    $(window).scroll(function (event) {
        handelProgressBar();
        var scrollPos = $(document).scrollTop() + 300;
        window.parent.postMessage({ type: 'SCROLL', scrollPos: scrollPos }, '*');

        // Show/Hide the scroll to top button
        if ($(document).scrollTop() > 10) {
            $('.scroll-to-top').addClass('scroll-to-top-visible');
        } else {
            $('.scroll-to-top').removeClass('scroll-to-top-visible');
        }
    });





    // Wait the full loading of the iframe
    $('iframe.sidebar').on('load', function () {
        var iframeContent = $(this).contents();
        var triggerBtn = iframeContent.find('.navTrigger');
        var projectLink = iframeContent.find('#projects');
        var homeLink = iframeContent.find('#home');
        var navLinks = iframeContent.find('.nav-link');

        // Make the project item in navbar active in the projects pages.
        const fullURL = document.URL;
        // Extract the filename from the URL
        const fileName = fullURL.substring(fullURL.lastIndexOf('/') + 1);
        const navLinksArray = Array.from(navLinks);
        navLinksArray.forEach(link => {
            link.classList.remove('active_item');
        });
        if (['project1.html', 'project2.html', 'project3.html'].includes(fileName)) {

            projectLink.addClass('active_item');
        } else {
            homeLink.addClass('active_item');
        }


        window.addEventListener('message', function (event) {
            if (event.data && event.data.type === 'NAV_CLICK') {
                triggerBtn.removeClass('active');
            }

            // Make the nav-link active on scrolling 
            if (event.data && event.data.type === 'SCROLL') {
                scrollPos = event.data.scrollPos;
                navLinks.each(function () {
                    var currLink = $(this);
                    var targetSelector = new URL(currLink.attr("href"), window.location.href).hash;
                    var refElement = $(targetSelector); // Select from parent document
                    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $('.nav-link').removeClass("active_item");
                        currLink.addClass("active_item");
                        if (targetSelector == "#skills") {
                            var progressBars = document.querySelectorAll('.progress-bar');
                            progressBars.forEach(function (progressBar) {
                                var progressValue = progressBar.getAttribute('aria-valuenow');

                                setTimeout(function () {
                                    progressBar.style.width = progressValue + '%';
                                }, 100); // Delay to ensure transition is visible
                            });
                        }
                    } else {
                        currLink.removeClass("active_item");
                    }
                });
            }

        });
    });



    $(window).on('load', function() {
        // Hide the loading screen when the window is fully loaded
        $("#loading-screen").fadeOut(200);
      });
});

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Scroll Indicator function
function handelProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + "%";
  }


