nograb
======

JQuery plug-in that replaces img tags with divs to prevent easy download.

## Why did I create this?

I am guessing someone out there wants to make scraping their site more difficult.  So, this was my solution.

## But I can still parse out the images!


Yes.   That is correct.   However, this plugin was made to make it harder not impossible to scrape images.


# Usage

You can use any selector to grab the img elements that you want nograb to be applied to.  
For example
Let's say you want to apply nograb to the following:

`<img id='profile-pic'  src="somepic.jpg" >'

Your selector can be:
```javascript
	$('#profile-pic').nograb();
```

If you don't want to use a class, you can apply the 'nograb' markup attribute like the following example.

`<img nograb src="somepic.jpg" >`

Then, you can call either of the following:

```javascript
	$.nograb();
```
Or

```javascript
	$('img[nograb]').nograb();  ///More explicit but not needed because of the above example.
```

