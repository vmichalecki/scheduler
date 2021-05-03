$(document).ready(function () {

	function init() {
		displayTime();
		updateRowColor();
		$('#nine .description').val(localStorage.getItem('nine'));
		$('#ten .description').val(localStorage.getItem('ten'));
		$('#eleven .description').val(localStorage.getItem('eleven'));
		$('#twelve .description').val(localStorage.getItem('twelve'));
		$('#thirteen .description').val(localStorage.getItem('thirteen'));
		$('#fourteen .description').val(localStorage.getItem('fourteen'));
		$('#fifteen .description').val(localStorage.getItem('fifteen'));
		$('#sixteen .description').val(localStorage.getItem('sixteen'));
		$('#seventeen .description').val(localStorage.getItem('seventeen'));
		$('#eighteen .description').val(localStorage.getItem('eighteen'));
	}

	function displayTime() {
		$('#currentTime').text(moment().format('dddd, MMMM Do YYYY, HH:mm:ss'));
	}

	setInterval(displayTime, 1000);

	function showSaved() {
		$("#saved").show().delay(300).fadeOut();
	}

	function saveTask() {
		showSaved();
		let task = $(this).siblings('.description').val();
		let time = $(this).parent().attr('id');
		localStorage.setItem(time, task);
	}

	function updateRowColor() {

		let currentHour = moment().hour();
		console.log(currentHour);

		$('.time-block').each(function () {
			let hour = $(this).attr('data-time');
			hour = parseInt(hour, 10);
			if (currentHour > hour) {
				$(this).addClass('past');
			};
			if (currentHour === hour) {
				$(this).addClass('present');
			};
			if (currentHour < hour) {
				$(this).addClass('future');
			}
		});

	}

	$('.saveBtn').on('click', saveTask);
	init();
})

