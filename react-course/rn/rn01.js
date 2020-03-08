import * as React from 'react';
import { Text, ScrollView, StyleSheet, Button, View } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

/**
 * Script: bloquea el Javascript (crea un ciclo que lo bloquea)
 * la UI se mantiene funcional. Esto sucede porque trabajan en 
 * hilos por separado
 */

import { Card } from 'react-native-paper';

export default class App extends React.Component {
    blockJS() {
        console.log('block', Date.now());
        const done = Date.now() + 3000;
        while (Date.now < done) {
            console.log("making ") 
        }
        console.log('unblock', Date.now());
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Button title="block!" onPress={() => this.blockJS()} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});