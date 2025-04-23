$(function() {

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 50 ){
            $('.navbar').addClass('solid bg-dark');
        } else {
            $('.navbar').removeClass('solid bg-dark');
        }
    });
});

$('.drowpdown-item').on('click', function(e) {
    if (this.hash !=="") {
        e.preventDefault();
        let anchor = this.hash; //#projectAnchor

        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 100
        }, 800, function(){
            window.location.hash = anchor; // Set the hash in the URL
        });
    }
});