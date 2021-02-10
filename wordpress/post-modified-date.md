# Post Modified Date
This will display the latest modified date of posts.
It can be used on single post templates and also inside 
repeaters for showing how recent each post in the list is.

## Tutorial
1. Add → ``Code Block``  
2. Open ``PHP & HTML``  
3. Add one of these options or combine them to your liking  

**Relative to the current time**, this will result in *"Last modified 10 minutes ago"*, then *"4 hours ago"*, *"2 days ago"* and so on.  
```php
<?php
	$modified_date = get_the_modified_date('U');
	$current_date = current_time('timestamp');
	$difference = human_time_diff($modified_date, $current_date);

	echo 'Last modified ' . $difference . ' ago';
?>
```

**Absolute time**, this will result in *"Last modified February 10, 2021"*  
```php
<?php
	echo 'Last modified ' . get_the_modified_date();
?>
```
