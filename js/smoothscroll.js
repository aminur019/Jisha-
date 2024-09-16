jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() < 200) {
            $('#smoothup') .fadeOut();
        } else {
            $('#smoothup') .fadeIn();
        }
    });
    $('#smoothup').on('click', function(){
        $('html, body').animate({scrollTop:0}, '2400');
        return false;
	});
		
	// Fix for "jumpy" background on IE11
	if(navigator.userAgent.match(/Trident\/7\./)) {
	  document.body.addEventListener("mousewheel", function() {
		event.preventDefault();
		var wd = event.wheelDelta;
		var csp = window.pageYOffset;
		window.scrollTo(0, csp - wd);
	  });
	}
		
});

