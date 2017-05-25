$('#show-menu').on('click', function(){
	//$(this).toggleClass('open');
	if ($(this).hasClass('open')){
		$(this).removeClass('open');
		$(this).find('span')
		       .removeClass('icon-cross')
		       .addClass('icon-menu');       
	}
	else{
		$(this).addClass('open');
		$(this).find('span')
		       .removeClass('icon-menu')
		       .addClass('icon-cross');  	
	}
});

$(window).resize(function(){
	if ($(window).width() > 885){
		if($('#show-menu').hasClass('open')){
			$('#show-menu').removeClass('open')
				.find('span')
				.removeClass('icon-cross')
				.addClass('icon-menu');
		}
	}			
});