// console.log("check ");
// var titles = document.querySelectorAll('.title');

// console.log(".titles");
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=o;i<odd.length;i++){
//     odd[i].style.backgroundcolor = '#f4f4f4';
//     even[i].style.backgroundcolor = '#ccc';
// }
//var itemList = document.querySelector('#items');
// console.log(item.List.parentnode);
// item.List.parentnode.style.backgroundColor = '#f4f4f4';
// console.log(item.List.parentnode);

// //parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='orange'
//console.log(item.List.parentElement);

// //console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
//Lastchild
// console.log(itemList.LastElementChild);
// itemList.LastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

//previoussibling and previouselementsibling
// console.log(itemList.previousSibling);
// console.log(itemList.previouselementsSibling);

// var newDiv = document.createElement('div');

// newDiv.className = 'hello';

// newDiv.id = 'hello1';

// newDiv.setAttribute('title','Hello Div');

// varnewDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// var conatiner = document.querySelector('header.conatiner');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// conatiner.insertBefore(newDiv, h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}