# Change 'You may also like' in WooCommerce

## Tutorial
1. Install [Code Snippets](https://wordpress.org/plugins/code-snippets/)  
2. Snippets → Add New
3. Insert into `Code`:
    ```PHP
	add_filter('gettext', 'change_ymal');

	function change_ymal($translated) 
	{
		$translated = str_ireplace('You may also like', 'Customers also bought', $translated);
		return $translated; 
	}
    ```
4. Set the title and press `Save changes and activate`