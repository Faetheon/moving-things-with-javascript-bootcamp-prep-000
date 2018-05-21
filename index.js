function moveDodgerUp() {
	var topNumbers = dodger.style.top.replace('px', '');
	var top = parseInt(topNumbers, 10);

	if (top > 0) {
		dodger.style.top = `${top - 1}px`;
	}
}

function moveDodgerDown() {
	var topNumbers = dodger.style.top.replace('px', '');
	var top = parseInt(topNumbers, 10);

	if (top < 380) {
		dodger.style.top = `${top + 1}px`;
	}
}
function moveDodgerRight() {
	var leftNumbers = dodger.style.left.replace('px', '');
	var left = parseInt(leftNumbers, 10);

	if (left < 360) {
		dodger.style.left = `${left + 1}px`;
	}
}

function moveDodgerLeft() {
	var leftNumbers = dodger.style.left.replace('px', '');
	var left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
}

$(document).ready(function() {
	let dodger = document.getElementById('dodger');
	document.addEventListener('keydown', function(e) {
		if (e.which === 37) {
			moveDodgerLeft();
		}
	});

	document.addEventListener('keydown', function(e) {
		if (e.which === 39) {
			moveDodgerRight();
		}
	});

	document.addEventListener('keydown', function(e) {
		if (e.which === 38) {
			moveDodgerUp();
		}
	});

	document.addEventListener('keydown', function(e) {
		if (e.which === 40) {
			moveDodgerDown();
		}
	});
});
