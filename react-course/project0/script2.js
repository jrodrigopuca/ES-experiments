const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

let todos = [];
let id=0;

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

class Todo {
    constructor(text){
        this.text=text;
        this.checked=false;
        this.id=id;
        id++;
    }

}

function renderTodo(todo){
    //render a single todo

    const listItem = document.createElement("li");
    listItem.className=classNames.TODO_ITEM;

    const content = 
        `<div>
            <span class="todo-text"> ${todo.text} </span>
            <input type="checkbox" class="todo-checkbox"/>
            <button class="todo-delete" onClick=removeTodo(${todo.id})>delete</button>
        </div>`;

    listItem.innerHTML= content;

    return listItem;
}

function render(){
    //render the todos
    list.innerHTML= '';
    todos.map(renderTodo).forEach(todo=>list.appendChild(todo))

    //TODO: update counts
    itemCountSpan.innerText= todos.length;

    return false;
}

function newTodo(){
    const text=prompt("name")
    const todo = new Todo(text);
    todos.push(todo);
    return render();
}

function removeTodo(id_){
    todos=todos.filter(t=> t.id!==id_);
    return render();
}

