import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';


/**
 * 
 * - Timer should display minutes and seconds in text
 * - Timer should count down seconds until it reaches 00:00
 * - Phone should buzz when timer reaches 0
 * - Timers should switch between 25 and 5 minutes
 * - Timer should be able to start, stop, and reset
 */

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: 0, active: false, break: true, tWork:0, tBreak:0 }
    this.active = false;
    this.interval = null;
  }

  decrement = () => {
    if (this.active) {
      if (this.state.time > 0) {
        this.setState(prev => ({ time: prev.time - 1 }));
      }
      else {
        let newTime = this.state.break ? this.state.tWork : this.state.tBreak;
        this.setState(prev => ({ time: newTime, break: !prev.break }))
      }
    }

  }


  start = () => {
    this.active = true;
    clearInterval(this.interval);
    this.interval = setInterval(this.decrement, 1000);
  }

  stop = () => {
    this.active = false;
  }

  reset = () => {
    this.setState({ time: 0, active: false, break: true })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View>
        <Text>{Math.floor(this.state.time / 60)}:{Math.floor(this.state.time % 60)}</Text>
        <Button title="Start" onPress={this.start} />
        <Button title="Stop" onPress={this.stop} />
        <Button title="Reset" onPress={this.reset} />

        <Picker
          selectedValue={this.state.tWork}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ tWork: itemValue })
          }>
          <Picker.Item label="2 min" value="120" />
          <Picker.Item label="1 min" value="60" />
        </Picker>

        <Picker
          selectedValue={this.state.tBreak}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ tBreak: itemValue })
          }>
          <Picker.Item label="2 min" value="120" />
          <Picker.Item label="1 min" value="60" />
        </Picker>


      </View>
    )
  }

}



export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
