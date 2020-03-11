import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true
        }
    }

    toggleCounter = () => this.setState(prevState => ({ showCounter: !prevState.showCounter }))

    render() {
        return (
            <ScrollView style={styles.container}>
                <Button title="change" onPress={this.toggleCounter} />
                {this.state.showCounter ? <Count /> : <View />}
            </ScrollView>)
    }
}


class Count extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
        this.interval = null;
    }

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }

    componentDidMount() {
        this.interval = setInterval(this.increment, 1000)
    }

    componentDidUpdate() {
        console.log(this.state.count)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextState.count % 2);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <View >
                <Text style={styles.count}>{this.state.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    count: {
        fontSize: 48
    }
});
