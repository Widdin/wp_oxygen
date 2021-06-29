# Tippy Tooltip
![Gif of Tippy Tooltip](images/tippy-tooltip.gif)  
## Tutorial
1. Download the files from Tippy [here](https://atomiks.github.io/tippyjs/) and 
enqueue JavaScript by following [Enqueue Scripts & CSS](enqueue-scripts-css.md)
2. Choose a method

### Method 1 - Prop ID
Create a element, add `JavaScript` →
```javascript
tippy('#%%ELEMENT_ID%%', {
	content: 'Nothing at all!',
});
```
	
### Method 2 - Prop Class
Create a element, set `class` → `someClass`  

Create a `Code Block`, add `JavaScript` →  
```javascript
tippy('.someClass', {
	content: 'Nothing at all!',
});
```

### Method 3 - Attribute
Create a `Code Block`, add `JavaScript` →  
```javascript
tippy('[data-tippy-content]');
```

Go to your element, `Advanced` → `Attributes` → `Add Attribute`  
- `name` → `data-tippy-content`
- `value` → `Nothing at all!`

## Example
![Gif of Tippy Tooltip Car](images/tippy-tooltip-car.gif)  
Here I utilized `allowHTML: true` and set the `content` to a div with content.  
For e.g. `content: document.getElementById('wheelTemplate')`
