
// Navigation bar becomes grey when scroll down
$(function () {
	$(".nav").fadeOut("slow", function () {
		$("#home").fadeIn(1000);
	});
});
$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});


// Animation of skills set
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".java").animate({
			width: "80%"
		}, 2000)
	}
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".Python").animate({
			width: "75%"
		}, 2000)
	}
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".C").animate({
			width: "75%"
		}, 2000)
	}
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".x").animate({
			width: "65%"
		}, 2000)
	}
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".Typescript").animate({
			width: "60%"
		}, 2000)
	}
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$(".Solidworks").animate({
			width: "80%"
		}, 2000)
	}
});

// Function to enlarge the image
function enlargeImage(imgSrc) {
	const enlargedImage = document.getElementById('enlarged-image');
	const imgElement = enlargedImage.querySelector('img');
	imgElement.src = imgSrc;
	enlargedImage.classList.add('visible');
	document.body.style.overflow = "hidden";
}

// Function to hide the enlarged image
function hideEnlargedImage() {
	const enlargedImage = document.getElementById('enlarged-image');
	enlargedImage.classList.remove('visible');
	document.body.style.overflow = "auto";
}

function zoomImage(event) {
	const enlargedImage = event.target;
	const zoomIntensity = 0.1;
	const maxZoom = 3;
	const minZoom = 1;

	let currentZoom = parseFloat(enlargedImage.style.transform.replace('scale(', '').replace(')', ''));

	if (isNaN(currentZoom)) {
		currentZoom = 1;
	}

	if (event.deltaY > 0) {
		currentZoom -= zoomIntensity;
	} else {
		currentZoom += zoomIntensity;
	}

	if (currentZoom > maxZoom) {
		currentZoom = maxZoom;
	} else if (currentZoom < minZoom) {
		currentZoom = minZoom;
	}

	enlargedImage.style.transform = `scale(${currentZoom})`;
}

// Animation of self introduction
const introduction = ["Good at MCU Programming and IoT Development", "Experienced Montaineer", "Racing Enthusiast", "Love to Travel", "Senior Computer Science Major at Georgia Tech"];

let index = 0
const changeIntro = setInterval(() => {
	if (index === introduction.length - 1) {
		clearInterval(changeIntro);

	}
	let element = document.getElementById('intro');
	element.innerHTML = introduction[index];
	index = index + 1;
}, 2500);
