# Post Reading Time
This will display the estimated time to read posts.
It can be used on single post templates and also inside 
repeaters for showing how long each post takes to read.  

Read time is based on the average reading speed of an adult, roughly 265 words per minute.  
Images add an additional 12 seconds for the first image, 11 seconds for the second image, and minus an additional second for each subsequent image, through the tenth image. Any images after the tenth image are counted at three seconds.

Change ``$exclude_images`` to ``true`` if you want to exclude images from being estimated.
 
![Image of Post Reading Time](images/post-reading-time.png)

## Tutorial
1. Add → ``Code Block``  
2. Open ``PHP & HTML``  
3. Add the following code and press ``Apply Code``  
```php
<?php
	global $post;

	$exclude_images = false;
	$words_per_minute = 265;

	$content = $post->post_content;

	$image_count = substr_count( $content, '<img' );
	$word_count = str_word_count(strip_tags($content));

	$image_time = 0;
	if (!$exclude_images) {
	  for ($i = 1; $i <= $image_count; $i++) {
		$image_time += ($i < 10) ? 12 - ($i - 1) : 3;
	  }
	}

	$reading_time = ceil(($word_count / $words_per_minute) + ($image_time / 60));

	if ($reading_time == 1) {
	  $text = " minute";
	} else {
	  $text = " minutes";
	}

	echo 'Reading time < ' . $reading_time . $text;
?>
```
