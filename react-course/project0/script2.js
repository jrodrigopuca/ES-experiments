let todos = [];

function renderTodo(todo){
    //render a single todo
}

function render(){
    //render the todos
    list.innerHTML= '';
    todos.map(renderTodo).forEach(todo=>list.appendChild(todo))

    //TODO: update counts

    return false;
}

function addTodo(name){
    const todo = new Todo(name);
    todos.push(todo);
    return render();
}

function removeTodo(){
    const todo = this.todoRef;
    todos=todos.filter(t=> t!==todo);
    return render();
}