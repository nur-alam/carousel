jQuery(document).ready(function($) {

	var slider = $('.slides');

	var width = $('.team-single').width(),
		len =  $('.team-single').length,
		totalSliderWidth = width*len,
		animationSpeed = 1000,
		pause = 3000;

	slider.css("width",totalSliderWidth+(len*15));

	var slideCount = 0,
		slidableCount = len - 3,
		RightToLeftMoveInterval, LeftToRightMoveInterval;

	function RightToLeftMoveSlider(){
		RightToLeftMoveInterval = setInterval(()=>{
			$('.slides').animate({
				'margin-left' : '-='+(width+15)
			},animationSpeed);
			slideCount++;
			if(slidableCount == slideCount){
				clearInterval(RightToLeftMoveInterval);
				LeftToRightMoveSlide();
			}
		},pause);		
	}

	function LeftToRightMoveSlide(){
		LeftToRightMoveInterval = setInterval(() => {
			$('.slides').animate({
				'margin-left' : '+='+(width+15)
			},animationSpeed);
			slideCount--;
			if(slideCount == 0){
				clearInterval(LeftToRightMoveInterval);
				RightToLeftMoveSlider();
			}
		}, pause);
	}

	RightToLeftMoveSlider();	

});