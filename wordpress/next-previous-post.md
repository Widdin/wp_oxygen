# Next and Previous Post
![Gif of Next and Previous Post](images/next-previous-post.png)  

## Description
Use this in the Single Post Template to create a text-link to the next/previous post.  
If there's no next post it will point back to the first post.  
If there's no previous post it will point back to the last post.

## Tutorial
1. `+ Add` → `Code Block`
2. Insert the code below,

**Previous post**
```php
<?php
	if (get_previous_post()) {
		previous_post_link('%link', '%title');	
	} else {
		$args = array( 
			'orderby' => 'date',
			'order' => 'DESC'
		);

		$posts = get_posts( $args );
		if ( $posts ) {
			$last_post = $posts[0];

			$permalink = get_the_permalink($last_post);
			$title = $last_post->post_title;

			echo '<a href="' . esc_url( $permalink ) . '" rel="prev">' . $title . '</a>';
		}
	}
?>
```

**Next post**
```php
<?php 
	if(get_next_post()) {
		next_post_link('%link', '%title');
	} 
	else {
		$args = array( 
			'orderby' => 'date',
			'order' => 'ASC'
		);

		$posts = get_posts( $args );
		if ( $posts ) {
			$first_post = $posts[0];

			$permalink = get_the_permalink($first_post);
			$title = $first_post->post_title;

			echo '<a href="' . esc_url( $permalink ) . '" rel="next">' . $title . '</a>';
		}
	}
?>
```