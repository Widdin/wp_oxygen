# Drop-Down Cart for Woocommerce
![Image of Cart](images/drop-down-cart.gif)


## Tutorial

1. `+Add` → `Div`  
	Add a class with the name `drop-down-cart` to the `Div`
	
2. Inside the `Div`,  
	`+Add` → Icon  
	`+Add` → `WordPress` → `Widgets` → `Cart`  
			Remove the Title from Cart-Widget

3. Create a Code Block or Stylesheet and then add the css:
	```css
	.drop-down-cart {
		position: relative;
	}

	.drop-down-cart:hover .widget_shopping_cart {
		display: block;
	}

	.widget_shopping_cart {
		display: none;
		width: 275px;
		position: absolute;
		top: 100%;
		z-index: 1;
		background-color: white;
		padding: 15px;
		border-radius: 4px;
		box-shadow: 0 3px 5px 1px rgba(0,0,0,.1);
	}

	/* Remove border */
	.widget.woocommerce .widget_shopping_cart_content .total {
		border-top: 0px;
	}


	/* Place the price on the right side */
	.woocommerce-mini-cart__total .woocommerce-Price-amount {
		float: right;
	}

	/* Buttons */
	.woocommerce-mini-cart__buttons {
		flex-direction: column;
		display: flex;
		width: 100%;

		margin-bottom: 0px;
		margin-top: 0px;
	}

	.widget.woocommerce .widget_shopping_cart_content .buttons a {
		width: 100%;
		font-size: 11px;
	}

	.widget.woocommerce .button.wc-forward {
		background: #f2f2f2;
		border: 0px;
		color: #494949;
	}

	.widget.woocommerce .button.wc-forward:hover {
		background: #494949;
		color: #f2f2f2;
		border: none;
	}

	/* Remove item button */
	.widget.woocommerce .widget_shopping_cart_content .cart_list li a.remove {
		background-color: #f2f2f2;
		color: #494949 !important;
		font-size: 1em;
	}

	.widget.woocommerce .widget_shopping_cart_content .cart_list li a.remove:hover {
		background-color: red;
		color: white !important;
	}


	/* Product Images */
	.widget_shopping_cart_content ul.product_list_widget li img {
		margin-bottom: 5px;
		margin-top: 5px;
		margin-right: 10px;
		margin-left: 0px;
	}

	.widget.woocommerce .woocommerce-mini-cart-item.mini_cart_item {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.widget_shopping_cart_content .woocommerce-mini-cart__empty-message {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.widget.woocommerce .widget_shopping_cart_content .cart_list {
		max-height: 80vh;
		overflow-y: auto;
	}

	.woocommerce ul.product_list_widget li {
		border-bottom: 2px solid hsl(210, 23%, 95%);
	}

	/* Product Item Quantity */
	.widget_shopping_cart_content .woocommerce-mini-cart .woocommerce-mini-cart-item .quantity {
		font-size: 14px;
	}

	/* Product Item Price */
	.widget_shopping_cart_content .woocommerce-mini-cart .woocommerce-mini-cart-item .quantity .woocommerce-Price-amount {
		font-size: 14px;
		font-weight: 600;
	}
	```
