const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/**
 * get text
 * create li
 * create input checkbox
 * create button
 * create span
 * update counts
 * 
 */
function newTodo() {
  let countItems= Number(itemCountSpan.innerText);
  
  const listItem = document.createElement("li");
  listItem.className=classNames.TODO_ITEM;
  
  const text=prompt("text please!");
  const content = `
  <div>
    <span class="todo-text"> ${text} </span>
    <input type="checkbox" class="todo-checkbox"/>
    <button class="todo-delete">delete</button>
  </div>`;
  
  listItem.innerHTML= content;

  list.appendChild(listItem);

  itemCountSpan.innerText=countItems +1;

  //alert('New TODO button clicked!')
}

function deleteTodo(){
  /**
   * find the todo to delete
   * delete
   * update the counts
   */
}

