# Show Total Cart for Woocommerce
Example:  
![Example 1](images/show_total_cart_ex1.PNG)  
![Example 2](images/show_total_cart_ex2.PNG)
## Tutorial
1. Add → Code Block   
2. Insert into `PHP & HTML`:
    ```HTML
 <?php 
	$display = '';

	if ( ! WC()->cart->get_cart_contents_count() > 0 ) {
		$display = 'style="display: none;"';
	}
?>
<a href="<?php echo esc_url( wc_get_cart_url() ); ?>">
 <?php echo sprintf ( _n( '<div class="cart-count"'. $display .'>%d </div>','<div class="cart-count"'. $display .'>%d </div>',WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?>
</a>
<?php
?>
    ```
3. Install [Code Snippets](https://wordpress.org/plugins/code-snippets/)  
4. Snippets → Add New
5. Insert into `Code`:
    ```PHP
  add_filter('woocommerce_add_to_cart_fragments', function($fragments) {
ob_start();
	$display = '';

	if ( ! WC()->cart->get_cart_contents_count() > 0 ) {
		$display = 'style="display: none;"';
	}
?>
<a href="<?php echo esc_url( wc_get_cart_url() ); ?>">
 <?php echo sprintf ( _n( '<div class="cart-count"'. $display .'>%d </div>','<div class="cart-count"'. $display .'>%d </div>',WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?>
</a>
<?php $fragments['div.cart-count'] = ob_get_clean();
return $fragments;
});
    ```
6. Set the title and press `Save changes and activate`


## Shortcodes  
###### *(Oxygen → Templates → Add New Reusable Part → `+Shortcodes` → Paste the code → Go to your Page, Add → Reusable)*
#### Example One  
![Example 1](images/show_total_cart_ex1.PNG)
```
[ct_div_block ct_sign_sha256='123' ct_options='{"ct_id":2,"ct_parent":0,"selector":"show_cart_total","original":{"display":"flex","align-items":"center","width-unit":"%","width":"","flex-direction":"row","position":"relative","float":"left"},"activeselector":false}'][ct_code_block ct_sign_sha256='123' ct_options='{"ct_id":1,"ct_parent":2,"selector":"show_cart_total_numbers","original":{"code-php":"PGRpdiBjbGFzcz0iY2FydC1jb3VudCI+CiA8P3BocCBlY2hvIFdDKCktPmNhcnQtPmdldF9jYXJ0X2NvbnRlbnRzX2NvdW50KCk7Pz4KPC9kaXY+","position":"absolute","top":"0","right":"0","background-color":"#ff8484","border-radius-unit":"%","border-radius":"100","width":"25","height":"25","display":"flex","flex-direction":"column","align-items":"center","justify-content":"center","font-weight":"800","z-index":"1"},"activeselector":false}'][/ct_code_block][ct_fancy_icon ct_sign_sha256='123' ct_options='{"ct_id":4,"ct_parent":2,"selector":"show_cart_total_icon","original":{"icon-id":"FontAwesomeicon-shopping-cart"},"activeselector":false}'][/ct_fancy_icon][/ct_div_block]
```
---
#### Example Two  
![Example 2](images/show_total_cart_ex2.PNG)
```
[ct_div_block ct_sign_sha256='123' ct_options='{"ct_id":2,"ct_parent":0,"selector":"show_cart_total","original":{"display":"flex","width-unit":"%","width":"","flex-direction":"row","align-items":"center","float":"left"},"activeselector":false}'][ct_fancy_icon ct_sign_sha256='123' ct_options='{"ct_id":4,"ct_parent":2,"selector":"show_cart_total_icon","original":{"icon-id":"FontAwesomeicon-shopping-bag","icon-size":"25","height-unit":"%","width-unit":"%","padding-top-unit":"%","min-height-unit":"%","flex-direction":"unset","margin-top":"-5","margin-right":"10"},"activeselector":false}'][/ct_fancy_icon][ct_code_block ct_sign_sha256='123' ct_options='{"ct_id":1,"ct_parent":2,"selector":"show_cart_total_numbers","original":{"code-php":"PGRpdiBjbGFzcz0iY2FydC1jb3VudCI+Cgk8cD5TaG9wcGluZ2JhZyAoPD9waHAgZWNobyBXQygpLT5jYXJ0LT5nZXRfY2FydF9jb250ZW50c19jb3VudCgpOz8+KSA8cD4KPC9kaXY+","border-radius-unit":"%","font-weight":"600","flex-direction":"unset","width-unit":"%","height-unit":"%"},"activeselector":false}'][/ct_code_block][/ct_div_block]
```
---
