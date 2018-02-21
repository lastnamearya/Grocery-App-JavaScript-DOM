// It will give us an array of "ul" tags or whatever the tag it is, it will always gives us an array

// var startItem = document.getElementsByTagName('ul');

// Now we have to selece the first item in the array, if there is only one item, then still we get an array with 0 length.

var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstElementChild;
var lastItem = startItem.lastElementChild;

// Change the Value of the children's class attributes
firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');