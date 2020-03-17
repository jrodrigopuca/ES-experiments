import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


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
    this.state = { time: 0, active:false, break:true}
    this.active = false;
    this.interval = null;
  }

  decrement = () => {
    if (this.active){
      if (this.state.time > 0) {
        this.setState(prev => ({ time: prev.time - 1 }));
      }
      else{
        let newTime=this.state.break?10:5;
        this.setState(prev=>({ time: newTime, break:!prev.break }))
      }
    }
    
  }


  start = () => {
    this.active=true;
    this.interval = setInterval(this.decrement, 1000);

  }

  stop = () => {
    this.active = false;
  }

  reset = () =>{
    this.setState({ time: 0, active:false, break:true})
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
        <Button title="Reset" onPress={this.reset}/>
      </View>
    )
  }

}



export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
