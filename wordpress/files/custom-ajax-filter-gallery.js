var lazyImageObserver;

jQuery( document ).ready(function($) {
	
	// Intersection Observer
	lazyImageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				let lazyImage = entry.target;
				
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.srcset = lazyImage.dataset.srcset;
				lazyImage.style.minHeight = null;
				
				lazyImage.removeAttribute('data-src');
				lazyImage.removeAttribute('data-srcset');
				
				lazyImage.classList.remove("lazy");
				lazyImageObserver.unobserve(lazyImage);
				
				lazyImage.classList.add('fadeIn');
				lazyImage.classList.remove("loading");
			}
		});
	});
	
	// On button change
	$('.gallery-filter').change(function(){
		sendAJAX();
		return false;
	});
	
	// On load
    sendAJAX();
    return false;
});

function sendAJAX() {
    var filter = jQuery('#filter');

    jQuery.ajax({
        url:filter.attr('action'),
        data:filter.serialize(),
        type:filter.attr('method'),
		startTime:new Date().getTime(),
		
        beforeSend:function(xhr){
			disableButtons();
            jQuery('.gallery-image').addClass('fadeOut');
        },
		
        success:function(data){
			var endTime = new Date().getTime();
			var totalTime = endTime - this.startTime;
			var timeToWait = 0;
			
			if (totalTime >= 400) { 
				timeToWait = 0; 
			} else {
				timeToWait = 400 - totalTime; 
			}

			setTimeout(function(){
				jQuery('#response').html(data);
				
				updateObserver();
				
				setTimeout(function(){
					enableButtons();
				}, 800);
				
			}, timeToWait);
			
        }
    });
}

function updateObserver() {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	lazyImages.forEach(function(lazyImage) {
		lazyImageObserver.observe(lazyImage);
	});
} 

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
