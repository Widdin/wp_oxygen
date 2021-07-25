# Change 'You may be interested in' in WooCommerce

## Tutorial
1. Install [Code Snippets](https://wordpress.org/plugins/code-snippets/)  
2. Snippets → Add New
3. Insert into `Code`:
    ```PHP
	add_filter('gettext', 'change_ymbi');

	function change_ymbi($translated) 
	{
		$translated = str_ireplace('You may be interested in', 'Frequently bought together', $translated);
		return $translated; 
	}
    ```
4. Set the title and press `Save changes and activate`