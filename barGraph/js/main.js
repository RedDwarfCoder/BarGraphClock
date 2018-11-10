$(document).ready(function() {
	startTime();
});

function startTime() {
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();

	var hourPercent = Math.round((hour/24*100)*100)/100;
	var minutePercent = Math.round((minute/60*100)*100)/100;
	var secondPercent = Math.round((second/60*100)*100)/100;

	hourPercent = formatTimeText(hourPercent);
	minutePercent = formatTimeText(minutePercent);
	secondPercent = formatTimeText(secondPercent);

	hourPercent = hourPercent + '%';
	minutePercent = minutePercent + '%';
	secondPercent = secondPercent + '%';

	$('.hours').css('width', hourPercent);
	$('.minutes').css('width', minutePercent);
	$('.seconds').css('width', secondPercent);

	$('.hours').text(hourPercent);
	$('.minutes').text(minutePercent);
	$('.seconds').text(secondPercent);

	updatePopUpTime(hour, minute, second);

	// Do every 1/2 second
	var t = setTimeout(startTime, 500);
}

function formatTimeText(whatTime) {
	var formattedInt = parseInt(whatTime);
	var formattedDec = parseInt((whatTime - formattedInt) * 100);

	if (formattedInt < 10) {
		formattedInt = '0' + formattedInt;
	}

	if ((formattedDec) === 0){
		formattedDec = '00';
	}

	whatTime = formattedInt + '.' + formattedDec;
	return whatTime;
}

function formatTime(whichTime) {
	if (whichTime < 10) {
		whichTime = '0' + whichTime;
	}
	return whichTime;
}

function updatePopUpTime(hour, minute, second) {
	hour = formatTime(hour);
	minute = formatTime(minute);
	second = formatTime(second);

	$('#popUpTime').text('The time is ' + hour + ':' + minute + ':' + second);

	$('.container').hover(function() {
		$('#popUpTime').show();
	}, function () {
		$('#popUpTime').hide();
	})
}