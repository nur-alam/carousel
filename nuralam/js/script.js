
const countdown = document.querySelector('.count-down');
const launchDate = new Date('May 10, 2019 10:00:00').getTime();

const intvl = setInterval(() => {
	
	const now = new Date().getTime();
	const distance = launchDate - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = days*24 + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	countdown.innerHTML = `
		<div class="hours">
			<p>${hours}</p>
			<span>Hours</span>
	</div>
	<div class="minutes">
		<p>${mins}</p>
		<span>Minutes</span>
	</div>
	<div class="seconds">
		<p>${seconds}</p>
		<span>Seconds</span>
	</div>
	`;

	if (distance < 0) {
		clearInterval(intvl);
		countdown.style.color = '#17a2b8';
		countdown.innerHTML = `
			<h3>Launched</h3>
		`;
	}

}, 1000); 

jQuery(document).ready(function($) {
 
	$('.slider-active').owlCarousel({
		items: 3,
		autoplay:true,
		loop:true,
		nav:false,
		dots:true,
		autoPlay: 1000,
		stopOnHover:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3,
				nav:true,
				loop:true
			},
			1100:{
				items:3,
				nav:true,
				loop:true
			}
		}
	});

});