const e= React.createElement;

const Todo = props => {return (
    <li key={props.todo.id}>
        <span className="todo-text">{props.todo.text}</span>
        <input
            type="checkbox"
            className="todo-checkbox"
            checked={props.todo.checked}
            onChange={props.onToggle}
        />
        <button className="todo-delete" onClick={props.onDelete}> delete </button>
    </li>
)};


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentDidMount(){
        const local=JSON.parse(localStorage.getItem('todos'));
        if (local != null) this.setState({todos:local})
    }

    addTodo() {
        const text = prompt("text please!");
        if (text === null){return;}
        if (text !== ""){
            const id = Date.now();
            this.setState({
                todos: [...this.state.todos, { id: id, text: text, checked: false }]
            });
            //localStorage.setItem('todos', JSON.parse(this.state.todos));
        }
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo;
                return { id: todo.id, text: todo.text, checked: !todo.checked };
            })
        });
        //localStorage.setItem('todos', this.state.todos);
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
        //localStorage.setItem('todos', this.state.todos);
    }

    shouldComponentUpdate(nextProps, nextState) {
        localStorage.setItem('todos', JSON.stringify(nextState.todos));
        return true;
    }

    render() {
        return (
            <div className="container center">
                <h1 className="center title">My TODO App</h1>
                <div className="flow-right controls">
                <p id="item-count"> Item count :{this.state.todos.length}</p>
                <p id="unchecked-count">
                    Unchecked count: {this.state.todos.filter(todo => !todo.checked).length}
                </p>
                </div>
                <button className="button center" onClick={() => this.addTodo()}> New To-do </button>
                <ul id="todo-list" className="todo-list">
                    {this.state.todos.map(todo => (
                        <Todo
                            todo={todo} key={todo.id}
                            onDelete={() => this.removeTodo(todo.id)}
                            onToggle={() => this.toggleTodo(todo.id)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

const listApp = document.querySelector("#app");
ReactDOM.render(e(App), listApp);
