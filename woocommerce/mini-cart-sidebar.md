Minicart Sidebar

1. Create a Div, advanced → Custom CSS:
    ```
    width: 300px;
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: fixed;
    right: 0;
    top: 0;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    transition: all 0.5s ease-in-out;
    ```
    
2. Inside the Div, add Wordpress → Widgets → Cart

3. Inside the Div, add a Code Block
    ```
    display: none;
    visibility: hidden;
    ```
    
4. Inside the Code Block, add:
    ```
    .widget.woocommerce.widget_shopping_cart {
        height: 100%;
        width: 100%;
    }

    .widget .widget_shopping_cart_content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .woocommerce .widget_shopping_cart_content ul.product_list_widget {
        flex-grow: 1;
        overflow-y: auto;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
    }

    .widget.woocommerce .widget_shopping_cart_content .cart_list li {
        scroll-snap-align: center;
    }


    /* Product Title */
    .woocommerce .widget_shopping_cart_content ul.product_list_widget li a {
        color: #272728;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.7;
        text-transform: uppercase;
        overflow-wrap: break-word;
    }

    /* Product Quantity */
    .widget_shopping_cart_content .woocommerce-mini-cart .woocommerce-mini-cart-item .quantity {
        font-size: 13px;
    }

    /* Product Price */
    .woocommerce-Price-amount.amount {
        color: #ff4000;
        font-size: 13px;
    }

    /* Subtotal Price */
    .woocommerce-mini-cart__total .woocommerce-Price-amount {
        float: right;
    }

    /* Product Delete Cross */
    .widget.woocommerce .widget_shopping_cart_content .cart_list li a.remove {
        background-color: #EFEFEF;
        width: 15px;
        height: 15px;
        line-height: 15px;
        font-size: 14px;
        color: #FF0000 !important;
        margin-right: 10px;
    }

    .widget .widget_shopping_cart_content .woocommerce-mini-cart__buttons {
        flex-direction: unset;
        margin-top: 0px;
        margin-bottom: 0px;
        background-color: #f2f2f2
    }

    .woocommerce.widget_shopping_cart .buttons a {
        border: none;
        border-radius: 0px;
        background-color: #666666;
        color: white;
    }

    /* Subtotal */
    .woocommerce.widget_shopping_cart .total {
        background-color: #f2f2f2;
        margin: 0px;
        padding: 15px !important;
        border-top: 1px solid #dedcdc;
    }

    /* Checkout Button */
    .widget.woocommerce .widget_shopping_cart_content .buttons a.checkout {
        background-color: #ff8c5e;
    }

    /* Thumbnail */
    .woocommerce .widget_shopping_cart_content ul.product_list_widget li a img {
        width: 45px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 15px;
        margin-left: 10px;
    }
    ```
    
5. Add an Icon anywhere on the page, advanced → JavaScript: 
    ```
    jQuery( document ).ready(function() {
        jQuery('#the_id_of_the_icon').click(function(){
          var div = jQuery('#the_id_of_the_div_in_step_1')
            if (div.css('transform') == 'none') {
                 div.css('transform', 'translate(100%,0)');
            } else {
                div.css('transform', 'none');
            }
        });
    });
    ```
