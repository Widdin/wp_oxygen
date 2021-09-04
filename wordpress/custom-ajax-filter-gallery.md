# Custom AJAX Filter (Image Gallery) + Lazy Loading
![Gif of Custom AJAX Filter](images/custom-ajax-filter-gallery.gif)  

## Description
In this tutorial, I will show you how to make an image gallery with a custom AJAX filter.  
We will use:   
* **Oxygen Builder**
* **Custom Post Type UI**
* **Code Snippets**  
* **Advanced Custom Fields PRO**
	* Using the **PRO** version because it has an image gallery field.
	* You don't have ACF PRO? Checkout [Advanced Custom Fields PRO Alternatives](#advanced-custom-fields-pro-alternatives)

## Tutorial
1. Install [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)
	* `CPT UI` → `Add/Edit Post Types`
		* Post Type Slug: gallery
		* Plural Label: Galleries
		* Singular Label: Gallery
		
2. Install [Advanced Custom Fields PRO](https://www.advancedcustomfields.com/pro/)
	* `Custom Fields` → `Add New`
		* Title: Gallery
		* Rules: Post Type is equal to Post
		
		* `+ Add Fields`
			* Field Label: Gallery
			* Field Name: gallery
			* Field Type: Gallery
			
3. Go to `Galleries` → `Add New` and create for example three posts, `Event`, `Portrait` and `Wedding`.
	* Make sure you add some images to each gallery.

4. Install [Code Snippets](https://wordpress.org/plugins/code-snippets/)
	* `Snippets` → `Add New`
	* Title: Custom AJAX Filter
	* Code:
	```php
	// wp_ajax_{NAME OF THE ACTION} 
	add_action('wp_ajax_customfilter', 'custom_filter_function'); 
	add_action('wp_ajax_nopriv_customfilter', 'custom_filter_function');

	function custom_filter_function(){

		$args = array(
			'post_type' => 'gallery',
			'posts_per_page' => -1
		);

		// Filter on gallery-category
		if ( isset( $_POST['gallery_category'] ) ) {
			$args['p'] = $_POST['gallery_category'];    
		}

		$query = new WP_Query( $args );

		// If there are any posts found
		if( $query->have_posts() ) {

			$images = array();

			while( $query->have_posts() ) {
				$query->the_post();

				$gallery = $query->post->gallery;

				if ($gallery) {
					foreach($gallery as $image) {
						array_push($images, $image);
					}
				}
			}

			// Random order on the images
			shuffle($images);

			$output = '';
			foreach($images as $id) {
				$src 	= wp_get_attachment_image_url( $id, 'full' );
				$srcset = wp_get_attachment_image_srcset( $id, 'full' );
				$sizes 	= wp_get_attachment_image_sizes( $id, 'full' );
				
				$output .= '<img style="min-height:500px;" class="lazy loading gallery-image" data-src="'. $src .'" data-srcset="' . $srcset . '" sizes="' . $sizes . '" />';
			}
			echo $output;

			wp_reset_postdata();
		} 
		else {
			echo 'No posts found';
		}

		die();
	}		
	```
	* `Save Changes and Activate`
	
5. Create a new page and add a `Code Block`
	### `PHP & HTML`
	---
	This is the HTML form where the options for the filter is and a div where the received data will be inserted.
	`$posts` gets all posts with the post type `gallery`. If there exists any posts, loop through them one by one while creating a label and a radio button.
	`$gallery_size` will receive the amount of images in the Advanced Custom Fields PRO gallery and add it next to the post title.
	```php
	<form action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="POST" id="filter">
		<?php
			$posts = get_posts( array( 'post_type' => 'gallery' ) );
					
			if ($posts) {
				
				echo '<div class="radio-toolbar">';
				  
				$output = '';
				$gallery_total_size = 0;
			
				foreach($posts as $post) {    
					$gallery_size = sizeof($post->gallery);
					$gallery_total_size += $gallery_size;
					
					$input = '<input id="' . $post->post_title . '" type="radio" class="gallery-filter" name="gallery_category" value="' . $post->ID . '" />';
					$label =  '<label for="' . $post->post_title . '" class="radio-filter">' . $post->post_title . " (" . $gallery_size . ') </label>';
					$output .= $input . $label;
				}
				
				echo '<input id="all" type="radio" class="gallery-filter" name="gallery_category" value="-1" checked />';
				echo '<label for="all">All (' . $gallery_total_size . ')</label>';
			
				echo $output;
				
				echo '</div>';
			}
		?>
		<input type="hidden" name="action" value="customfilter">
	</form>

	<div id="response" class="gallery" />
	```
	You can find the complete PHP & HTML file → [here](files/custom-ajax-filter-gallery.html)
		
	### `JavaScript`
	---
	The function `sendAJAX` is for sending a request when the form with the id `filter` is submitted, it will also receive the result. 
	Before the request is sent (`beforeSend`), the class `fadeOut` is added to the gallery images so they fade out nicely.
	When the data is received, a new class (`fadeIn`) is added. The data gets inserted to a div with the id `response`.
	The buttons gets disabled until there is new data available.
	```javascript
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
	```
	
	This will call the `sendAJAX` function whenever a button is pressed.
	```javascript
	$('.gallery-filter').change(function(){
		sendAJAX();
		return false;
	});
	```
	
	On pageload, load all images
	```javascript
    sendAJAX();
    return false;
	```
	
	For the lazy-loading-part we make use of the [intersection observer](https://web.dev/lazy-loading-images/#images-inline-intersection-observer).
	If the element is in the viewport, the src + srcset attributes are populated and then removed from the observer-list.
	```javascript
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
	```
	
	Here we retrieve all the images with the class `lazy` and adds it to the observer.
	```javascript
	function updateObserver() {
		let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
		lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} 
	```
	
	Functions to disable or enable the buttons.
	```javascript
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
	```
	You can find the complete JavaScript file → [here](files/custom-ajax-filter-gallery.js)

	### `CSS`
	---
	Styling for the gallery so it becomes a grid.
	```css
	.gallery {
		width: 100%;

		display: grid;
		grid-auto-rows: 1fr;
		grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
		grid-column-gap: 10px;
		grid-row-gap: 10px;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	```
	
	Animations for fading the images in and out.
	```css
	.fadeIn {
		animation-name: fadeIn;
		animation-duration: 0.8s;
		animation-timing-function: ease;
	}

	.fadeOut {
		animation-name: fadeOut;
		animation-duration: 0.4s;
		animation-timing-function: ease;

		opacity: 0;
	}
	
	.loading {
		opacity: 0;
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
			-webkit-transform: scale(1)
		}

		1% {
			opacity: 0.5;
			transform: scale(0.9)
		}

		100% {
			opacity: 0;
			-webkit-transform: scale(0.8)
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			-webkit-transform: scale(1)
		}

		1% {
			opacity: 0.2;
			transform: scale(0.2)
		}

		100% {
			opacity: 1;
			-webkit-transform: scale(1)
		}
	}
	```
	
	Styling for the radio buttons to look more like actual buttons.
	```css
	.radio-toolbar {
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		margin-bottom: 40px;
	}

	.radio-toolbar input[type="radio"] {
		display: none;
	}

	.radio-toolbar label {
		border-color: #ccc;
		border-radius: 4px;
		border-style: solid;
		border-width: 2px;

		margin: 8px 8px 0px 0;
		padding: 4px 11px;

		font-size: 16px;
		font-family: 'Poppins';

		cursor: pointer;
	}

	.radio-toolbar input[type="radio"]:checked+label {
		background-color: #0069ff;
		border-color: #0069ff;
		color: white;
	}
	```
	You can find the complete CSS file → [here](files/custom-ajax-filter-gallery.css)

## Lightbox with Featherlight
Enqueue JavaScript & CSS by following [Enqueue Scripts & CSS](enqueue-scripts-css.md) or place the following cdn inside the HTML part of a codeblock.
```html
<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.css" type="text/css" rel="stylesheet" />
<script src="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
```

Inside the code-snippet, replace
```html
$output .= '<img style="min-height:500px;" class="lazy loading gallery-image" data-src="'. $src .'" data-srcset="' . $srcset . '" sizes="' . $sizes . '" />';
```
with
```html
$output .= '<img data-featherlight="image" data-featherlight-target-attr="src" style="min-height:500px;" class="lazy loading gallery-image" data-src="'. $src .'" data-srcset="' . $srcset . '" sizes="' . $sizes . '" />';
```

## Advanced Custom Fields PRO Alternatives

### [Pods](https://sv.wordpress.org/plugins/pods/)
Extend Existing
	Content Type: Post Type
	Post Type: Galleries
	
Manage Fields
	Add Field
		Label: Gallery
		Name: gallery
		Field Type: File / Image / Video
		
		Additional Field Options
			Upload Limit: Multiple Files
			
Inside the code-snippet, replace
```php
$gallery = $query->post->gallery;

if ($gallery) {
	foreach($gallery as $image) {
		array_push($images, $image);
	}
}
```
with
```php
$pod = pods('gallery', $query->post->ID);

$gallery = $pod->field('gallery');

if($gallery) {
	foreach ($gallery as $image) {
		array_push($images, $image['ID']);
	}
}
```

### [Meta Box](https://metabox.io/)
TODO

## Sources
[[codex.wordpress](https://codex.wordpress.org/AJAX_in_Plugins)]
[[rudrastyh](https://rudrastyh.com/wordpress/ajax-post-filters.html)]
[[weichie](https://weichie.com/blog/wordpress-filter-posts-with-ajax/)]