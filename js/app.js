// querySelector() only returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelector() returns a NodeList
var els = document.querySelectorAll('li.hot');

// The second matching element (the third list item) is selected and changed, js executes statements line by line so what happen here is first li item during executing becomes 'cool'

els[1].className = 'cool';