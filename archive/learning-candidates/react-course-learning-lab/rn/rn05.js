import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }

    componentDidMount() {
        setInterval(this.increment, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
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
