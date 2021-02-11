# Post Reading Time
This will display the estimated time to read posts.
It can be used on single post templates and also inside 
repeaters for showing how long each post takes to read.
 
![Image of Post Reading Time](images/post-reading-time.png)

## Tutorial
1. Add → ``Code Block``  
2. Open ``PHP & HTML``  
3. Add the following code and press ``Apply Code``  
```php
<?php
    global $post;

    $words_per_minute = 250;

    $content = $post->post_content;

    $word_count = str_word_count(strip_tags($content));

    $reading_time = ceil($word_count / $words_per_minute);

    if ($reading_time == 1) {
      $text = " minute";
    } else {
      $text = " minutes";
    }

    echo 'Reading time < ' . $reading_time . $text;
?>
```