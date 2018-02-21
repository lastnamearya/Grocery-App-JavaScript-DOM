// First we get access to the child that we want to remove
var removeEl = document.getElementsByTagName('li')[3];

// For deleting a child, we first need to know or access the parent first so we can use the dot notation and apply the remove child method
var containerEl = removeEl.parentNode;

// Here we remove the child from the parent by using .removeChild()
containerEl.removeChild(removeEl);