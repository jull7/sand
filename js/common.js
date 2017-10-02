
$(document).ready(function() {
	
	setTimeout(function(){
		$('#preload').css('display', 'none');
	}, 5000);


	$('.nav-bt').click(function(){
		$('#burger').toggleClass('active-sandwich');
		$('.nav-bt').toggleClass('close-mnu');
		$('.nav-bt').toggleClass('active-bt');
	});

	$('.active-bt').on('click', function() {
		$('.main-mn').addClass('z-toggle');
		$('.we, .keep, .works').toggleClass('item');
	});

	$('.nav-bt').click(function(ev){
		var cl = $(this).attr('class');
		if(cl == 'nav-bt close-mnu'){
			$('.main-mn').attr('class', 'main-mn z-toggle');
		} 

		if(cl == 'nav-bt active-bt') {
			setTimeout(function(){
				$('.main-mn').attr('class', 'main-mn');
			}, 700);				
		}
	});
	
// portfolio

	$("#owl-example").owlCarousel({
		items: 4,
		pagination: false,
		navigation: true
	});


	// $('.project').on('click', function() {
	// 	$name = $(this).attr('id') + '_full';
	// 	$('#' + $name).addClass('full-info');
	// });

	// $('.close').on('click', function() {
	// 	$(this).closest('.project-details').scrollTop(0);
	// 	$(this).closest('.project-details').attr('class', 'project-details');
	// });

	// $('.down').on('click', function() {
	// 	$(this).closest('.project-details').animate({
	// 		scrollTop: window.pageYOffset + $(window).height()
	// 	}, 600);
	// });


// index

	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		menu: '#menu',
		scrollingSpeed: 1000
	});

	$('.main-mn li a').click(function () {
		$('.nav-bt').trigger("click");
	});
	

});