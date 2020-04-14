import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Row = (props) => (
    <View key={props.key} style={styles.item}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </View>
)

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        margin: 5
    }
});

export default Row;