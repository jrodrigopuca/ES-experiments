const e= React.createElement;

const Todo = props => {return (
    <li key={props.todo.id}>
        <span>[{props.todo.id}]: </span>
        <span>{props.todo.text}</span>
        <input
            type="checkbox"
            checked={props.todo.checked}
            onChange={props.onToggle}
        />
        <button onClick={props.onDelete}> delete </button>
    </li>
)};

let id = 0;


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    addTodo() {
        const text = prompt("text please!");
        this.setState({
            todos: [...this.state.todos, { id: id++, text: text, checked: false }]
        });
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo;
                return { id: todo.id, text: todo.text, checked: !todo.checked };
            })
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        return (
            <div>
                <p> cantidad :{this.state.todos.length}</p>
                <p>
                    pendientes: {this.state.todos.filter(todo => !todo.checked).length}
                </p>
                <button onClick={() => this.addTodo()}> addTodo </button>
                <ul>
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
