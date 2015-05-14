
function scrollToEl(el) {
	var sTop = $(el).offset().top;
	x = $(el).css('padding-top');
	if(x.length > 0) {
		x = x.replace(/px/g, "");
		sTop = Math.round(sTop - (parseInt(x)/3));
	}
	$('html, body').animate({
	    scrollTop: sTop
	}, 1000);
}
