jQuery(document).ready(function() {

	//X button event handling
	$(document).on('mouseenter', '.exit', function() {
		$(this).find('.ui-close').css('visibility', 'visible');
	})
	$(document).on('mouseleave', '.exit', function() {
		$(this).find('.ui-close').css('visibility', 'hidden');
	})

	//X button DOM manip
	$(".ui-close").click(function() {
		jQuery(this).parent().css('visibility', 'hidden');
		$(this).css('visibility', 'hidden');
	})

	//side-nav hide
	$(".side-nav").hide();

	//side-nav drop-down
	$(".navigation .button").click(function() {
		$(this).next(".side-nav").slideToggle();
	})
});

function checkTime(i) {
	if (i < 10) {
		return i = "0" + i;
	} else {
		return i;
	}
};

function startTime() {
	let today = new Date();
	let h = today.getHours(); 
	let m = today.getMinutes();
	let s = today.getSeconds();

	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);

	document.getElementById("time").innerHTML = `${h}:${m}` 
	t = setTimeout(function() {startTime()}, 500);
}

function timeOfDay() {
	var today = new Date();
	var h = today.getHours();

	if(h >= 16) {
		document.getElementById('greeting').innerHTML ='Good Evening!';
	} else if (h > 12 &&  h < 16) {
		document.getElementById('greeting').innerHTML ='Good Afternoon!';
	} else {
		document.getElementById('greeting').innerHTML ='Good Morning!'
	}
}

timeOfDay();
startTime();