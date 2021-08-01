function sendAJAX() {
	var filter = jQuery('#filter');
	jQuery.ajax({
		url:filter.attr('action'),
		data:filter.serialize(),
		type:filter.attr('method'),
		beforeSend:function(xhr){
			jQuery('.gallery-image').addClass('fadeOut');
			disableButtons();
		},
		success:function(data){
			jQuery('.gallery-image').removeClass('fadeOut');
			jQuery('#response').html(data); // insert 
			jQuery('.gallery-image').addClass('fadeIn');
			enableButtons();
		}
	});
}

jQuery(function($){
	$('.gallery-filter').change(function(){
		sendAJAX();
		return false;
	});
});

jQuery(function($){
	sendAJAX();
	return false;
});

function disableButtons() {
	jQuery('.radio-toolbar label').css('opacity', '0.5');
	jQuery('.radio-toolbar label').css('cursor', 'default');
	
	jQuery('.gallery-filter').attr('disabled', true);
}

function enableButtons() {
	jQuery('.radio-toolbar label').css('opacity', '1.0');
	jQuery('.radio-toolbar label').css('cursor', 'pointer');
	
	jQuery('.gallery-filter').attr('disabled', false);
}
