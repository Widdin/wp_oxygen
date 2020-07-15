# Show Total Cart for Woocommerce

## Tutorial
1. Add → Code Block   
2. Insert into `PHP & HTML`:
    ```
   <div class="cart-count">
     <?php echo WC()->cart->get_cart_contents_count();?>
   </div>
    ```
3. Install [Code Snippets](https://wordpress.org/plugins/code-snippets/)  
4. Snippets → Add New
5. Insert into `Code`:
    ```
    add_filter('woocommerce_add_to_cart_fragments', function($fragments) {
    ob_start();
    ?>

    <div class="cart-count">
      <?php echo WC()->cart->get_cart_contents_count(); ?>
    </div>

    <?php $fragments['div.cart-count'] = ob_get_clean();
    return $fragments;
    });
    ```
6. Set the title and press `Save changes and activate`
