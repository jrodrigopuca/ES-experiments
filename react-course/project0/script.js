const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let countItems= Number(itemCountSpan.innerText);
  
  const listItem = document.createElement("li");
  listItem.className=classNames.TODO_ITEM;
  
  const text = document.createTextNode("texto");
  text.className=classNames.TODO_TEXT;

  listItem.appendChild(text);
  list.appendChild(listItem);

  itemCountSpan.innerText=countItems +1;

  //alert('New TODO button clicked!')
}
