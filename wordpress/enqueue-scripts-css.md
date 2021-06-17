# Enqueue JavaScript and CSS

## Tutorial
1. Download [enqueuer.zip](files/enqueuer.zip)  
2. Go to your site → `Plugins` → `Add New` → `Upload Plugin` → Select `enqueuer.zip` → `Install Now` → `Activate Plugin`
3. Open `wp-content/plugins/enqueuer/plugin.php`  
4. Place your downloaded library-files inside:
	* `wp-content/plugins/enqueuer/assets/js` - JavaScript
	* `wp-content/plugins/enqueuer/assets/css` - CSS
5. Enqueue JavaScript with `wp_enqueue_script` and CSS with `wp_enqueue_style` inside the `enqueue_files` function.    

## Examples
### Leaflet
```php
wp_enqueue_style( 'leaflet-css', plugin_dir_url( __FILE__ ) . 'assets/css/leaflet.css' );
wp_enqueue_script( 'leaflet', plugin_dir_url( __FILE__ ) . 'assets/js/leaflet.js', '', '1.7.1', false );

```

### Flickity
```php
wp_enqueue_style( 'flickity-css', plugin_dir_url( __FILE__ ) . 'assets/css/flickity.min.css' );
wp_enqueue_script( 'flickity', plugin_dir_url( __FILE__ ) . 'assets/js/flickity.pkgd.min.js', '', '2.2.2', true );
```

## Extras
The last parameter (`true` or `false`) for `wp_enqueue_script` places the script in the footer.  

You can load scripts on specific places if you want to. Place any of the if-statements inside the `enqueue_files` function.
* Only on the frontpage  
	```php
	if ( is_front_page() ){
		wp_enqueue_style(...);
	}
	```
* On specified page, with slug or ID
	```php
	if ( is_page('about') ){
		wp_enqueue_style(...);
	}
	```
* On specified pages, with slug or ID
	```php
	if ( is_page( array('about', 'contact', 'home') ) ){
		wp_enqueue_style(...);
	}
	```
* On specified post type
	```php
	if ( get_post_type() == 'animals' ) {
		wp_enqueue_style(...);
	}
	```
