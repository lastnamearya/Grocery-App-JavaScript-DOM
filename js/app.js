// Adding Items to START and the END of LIST

// Get the <ul> Element
var list  = document.getElementsByTagName('ul')[0]; 

// ******************************************************** //

// ADD New Item to the End of List

// Create Element
var newItemLast = document.createElement('li');

// Create Text node
var newTextLast = document.createTextNode('cream');

// Add text node to the element
newItemLast.appendChild(newTextLast);

// Add element end to the list
list.appendChild(newItemLast);

// ******************************************************** //

// Add New Item to the START of the LIST

// Create Element
var newItemFirst = document.createElement('li');

// Create Text Node
var newTextFirst = document.createTextNode('kale');

// Add Text Node to element
newItemFirst.appendChild(newTextFirst);

// Add element to List
list.insertBefore(newItemFirst, list.firstChild);

// ******************************************************** //

// All <li> elements

var listItems = document.querySelectorAll('li');

// Add a class of Cool to All List Items
for(var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// Add Numbers of Items in the List to the Heading

// h2 element
var heading = document.querySelector('h2');

// h2 text
var headingText = heading.firstChild.nodeValue;

// No. of <li> Element
var totalItems = listItems.length;

// Content
var newHeading = headingText + '<span>' + totalItems + '</span>';

// update h2
heading.innerHTML = newHeading;