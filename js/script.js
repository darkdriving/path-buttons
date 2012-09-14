$(function() { 

	$('#plus-ex').click(function(){  
		if($(this).hasClass('plus')){
			$(this).removeClass('plus')
			$(this).addClass('ex');
			$('#moment-buttons li').addClass('out');
		} else {
			$(this).removeClass('ex');
			$(this).addClass('plus');
			$('#moment-buttons li').removeClass('out');
		}
		return false;
	});
});