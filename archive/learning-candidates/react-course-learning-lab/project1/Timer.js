import React from 'react';
import { Text, View, Button, Picker } from 'react-native';

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
    this.state = { time: 0, break: true, isWorking: false, tWork: 1500, tBreak: 300 }
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
    this.setState({ isWorking: true });
    this.active = true;
    clearInterval(this.interval);
    this.interval = setInterval(this.decrement, 1000);
  }

  resume = () => {
    this.active = !this.active;
  }

  reset = () => {
    this.setState({ time: 0, break: true })
  }

  back=()=>{
    this.setState({ time: 0, break: true, isWorking:false})
    this.active = false;  
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  makeGoodNumber(number){
    return number<10?"0"+number:number;
  }

  myStyle() {
    return {
      backgroundColor: this.state.break ? "#ff5959" : "#4f9da6",
      margin:0,
      flex:1,
      width: "100%",
      alignItems: "center",
      justifyContent: 'center'
    }
  }

  render() {
    const isWorking = this.state.isWorking;
    return (
      <View style={this.myStyle()}>
        {isWorking &&
          <View>
            <Text style={{fontSize:78}}>{this.makeGoodNumber(Math.floor(this.state.time / 60))}:{this.makeGoodNumber(Math.floor(this.state.time % 60))}</Text>
            <Button title="Resume/Stop" onPress={this.resume} color="#1a0841"/>
            <Button title="Reset" onPress={this.reset} color="#1a0841"/>
            <Button title="Back" onPress={this.back} color="#1a0841"/>
          </View>}

        {!isWorking &&
          <View>
            <Text>Work time:</Text>
            <Picker
              selectedValue={this.state.tWork}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ tWork: itemValue })
              }>
              <Picker.Item label="25 min" value={1500} />
              <Picker.Item label="30 min" value={1800} />
              <Picker.Item label="20 min" value={1200} />
              <Picker.Item label="10 min" value={600} />
              
              
            </Picker>

            <Text>Break Time:</Text>
            <Picker
              selectedValue={this.state.tBreak}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ tBreak: itemValue })
              }>
              <Picker.Item label="5 min" value={300} />
              <Picker.Item label="3 min" value={180} />
              <Picker.Item label="2 min" value={120} />
              <Picker.Item label="1 min" value={60} />
            </Picker>
            <Button title="Start" onPress={this.start} color="#ffad5a" />
          </View>}
      </View>
    )
  }
}

export default Timer;