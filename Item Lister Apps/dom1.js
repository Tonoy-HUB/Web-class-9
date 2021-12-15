let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');



// Form submit event
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    let text = e.target.value.toLowerCase();
     // Get lis
    let items = itemList.querySelectorAll('li');
    //Convert li to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.visibility = 'visible';
          } else {
            item.style.visibility = 'hidden';
          }
    });
    
    
}



function addItem(e){
    e.preventDefault();
    // Get input value
    let newItem = document.getElementById('item').value;
     // Create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //Add text node with input value
    let textItem = document.createTextNode(newItem);
    //
    li.appendChild(textItem);
    //console.log(li);
      // Create del button element
    let deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    console.log(deleteBtn);
    // Append button to li
    li.appendChild(deleteBtn);
    //add li to the ul
    itemList.appendChild(li);
}
//remove li
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }    
}