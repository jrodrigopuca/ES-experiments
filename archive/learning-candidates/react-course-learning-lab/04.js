import React from "react";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increaseCount() {
        /** al hacer dos veces seguidas el setState no lo toma
         * así que lo mejor es usar una función
         * */
        this.setState(prevState => ({ count: prevState.count + 1 }));
        this.setState(prevState => ({ count: prevState.count + 1 }));
        console.log(this.state.count);
    }

    render() {
        return (
            <div className="App">
                <h1>Contador</h1>
                <button onClick={this.increaseCount.bind(this)}>Incrementar</button>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default App;
