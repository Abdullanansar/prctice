// Selecting an element by ID
let pElement = document.getElementById("paragraph");

// Changing the text of the selected element
pElement.textContent = "New text content";

// Adding a new element
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Removing an element
let oldDiv = document.querySelector(".old-div");
if (oldDiv) {
    oldDiv.remove();
}








// Targeting a single element with a specific data attribute
let element = document.querySelector('[data-custom="value"]');
// Targeting multiple elements with a specific data attribute
let elements = document.querySelectorAll('[data-custom="value"]');






// Selecting a single element with a specific name attribute
let elementWithSpecificName = document.querySelector('[name="specificName"]');

// Selecting all elements with a specific name attribute
let elementsWithName = document.querySelectorAll('[name="specificName"]');





function countNodes(element = document.body) {
    let count = 0;
    let child = element.firstElementChild;
    while (child) {
      count += countNodes(child);
      if (child.shadowRoot) {
        count += countNodes(child.shadowRoot);
      }
      child = child.nextElementSibling;
      count++; // Increment for direct children
    }
    return count;
  }







  
// Create a div element
var div = document.createElement("div");

// Create a p element
var p = document.createElement("p");
p.textContent = "This is a paragraph.";

// Append the p element to the div
div.appendChild(p);

// Now, div contains the p element




var myEl = document.createElement('div');
document.body.appendChild(myEl);








var parent = document.querySelector('.parent');
var firstChild = parent.children[0]; // Accesses the first child




var parent = document.querySelector('.parent');
var childWithClass = parent.querySelector('.child'); // Finds the first child with class 'child'



var parent = document.querySelector('.parent');
var allChildrenWithClass = parent.querySelectorAll('.child'); // Finds all children with class 'child'







var parent = document.getElementById("myParent");
for (var i = 0; i < parent.childNodes.length; i++) {
    var child = parent.childNodes[i];
    if (child.nodeType === 1) { // Element node
        console.log("Element node:", child);
    } else if (child.nodeType === 3) { // Text node
        console.log("Text node:", child);
    }
}





function clean(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        if (child.nodeType === 8 || (child.nodeType === 3 &&!/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            i--; // Adjust index due to removal
        } else if (child.nodeType === 1) {
            clean(child); // Recursively clean child nodes
        }
    }
}

// Example usage: clean up the entire document
clean(document);







var firstParagraph = document.querySelector(".myParagraphs");




var paragraphs = document.getElementsByClassName("myParagraphs");

  


