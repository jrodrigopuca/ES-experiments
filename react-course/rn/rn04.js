import React from "react";
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';

const style = StyleSheet.create({
    todoContainer: { flexDirection: 'row', alignItems: 'center', padding: 5 },
    appContainer: { paddingTop: Constants.statusBarHeight, padding: 8 },
    fill: { flex: 1 }
})

const Todo = props => (
    <View style={style.todoContainer}>
        <Text>{props.todo.text}</Text>
        <Switch value={props.todo.checked} onValueChange={props.onToggle} />
        <Button onPress={props.onDelete} title="delete" />
    </View>
);

let id = 0;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    addTodo() {
        id++;
        const text = `TODO number ${id}`;
        this.setState({
            todos: [...this.state.todos, { id: id, text: text, checked: false }]
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
            <View style={[style.appContainer, style.fill]}>
                <Text>
                    cantidad :{this.state.todos.length}
                </Text>
                <Text>
                    pendientes: {this.state.todos.filter(todo => !todo.checked).length}
                </Text>
                <Button onPress={() => this.addTodo()} title="addTodo" />
                <ScrollView style={style.fill}>
                    {this.state.todos.map(todo => (
                        <Todo
                            todo={todo}
                            onDelete={() => this.removeTodo(todo.id)}
                            onToggle={() => this.toggleTodo(todo.id)}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default App;
