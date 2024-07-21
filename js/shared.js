// shared.js

// jQuery
document.write('<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></' + 'script>');

// Popper.js
document.write('<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"  integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></' + 'script>');

// Bootstrap
document.write('<script   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></' + 'script>');
document.write('<script   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"   integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></' + 'script>');

document.write('<script   src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/css/bootstrapvalidator.min.css" ></' + 'script>');

document.write('<script   src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js" ></' + 'script>');

document.write('<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>')


$(document).ready(function() {
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
         console.log("Clicked menu");
         const $navBar =  $('iframe#vertical-nav-bar', parent.document);
                if ($navBar.length) {
                    console.log("Element selected: ", $navBar);
                    $navBar.toggleClass('vertical-nav-bar-active');
                } else {
                    console.log("Element not found");
                }
     });

     function resizeIframe() {
        var iframe = document.getElementById('footer_content');
        iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + 'px';
    }
    if(document.getElementById('footer_content'))
    document.getElementById('footer_content').onload = resizeIframe;
});

