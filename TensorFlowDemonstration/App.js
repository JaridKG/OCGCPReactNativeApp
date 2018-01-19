import React from 'react';

import { StyleSheet, Text, View, Switch, TextInput, Button, Platform, Dimensions } from 'react-native';

import Svg from "react-native-svg";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryCandlestick,
  VictoryErrorBar,
  VictoryBar,
  VictoryLine,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictorySelectionContainer,
  VictoryBrushContainer,
  VictoryCursorContainer,
  VictoryPie,
  VictoryLabel,
  VictoryLegend,
  createContainer,
  VictoryPortal,
  Bar
} from "victory-native";

import { VictoryTheme } from "victory-core";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      useTensorFlow: true,
      twitterTerm: "",
      data: [
        { x: "Positive", y: 0, fill:"green" },
        { x: "Negative", y: 0, fill:"red" },
      ]
    }
  }

  toggleTensorFlow = (value) =>{
    this.setState({useTensorFlow: value})
    console.log(value);
  }
  
  SearchTwitter = () =>{
    console.log(this.state.twitterTerm)
    temp = Math.floor(Math.random() * 15)
    newData = [{ x: "Positive", y: temp, fill:"green" },
    { x: "Negative", y: 15-temp, fill:"red" },]
    this.setState({data: newData})
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Header />
        
        <SolidLine />
        
        <View style={styles.stackLayout}>
          <View style={styles.row}>
            <Text style={styles.label}>Use Tensorflow:</Text>
            <Switch style={styles.switch} onValueChange={(val)=>this.toggleTensorFlow(val)} value={this.state.useTensorFlow}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Search Term:</Text>
            <TextInput onChangeText={(val) => this.state.twitterTerm = val} style={styles.entry}/>
          </View>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <Button style={styles.button} title='Search Twitter' onPress={this.SearchTwitter}/>
        </View>
        <VictoryChart domainPadding={100}>
          <VictoryBar
            data={this.state.data}
            domain={{ y: [0, 10]}}
            labels={(d) => d.y}
            style={{ labels: { fill: "white"} }}
            alignment="middle"
            labelComponent={<VictoryLabel dy={30}/>}
            />
          </VictoryChart>

      </View>
    );
  }
}

export class SolidLine extends React.Component{
  render(){
    return (
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width:1000, paddingTop:5}} />
    );
  }
}

export class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      useTensorFlow: true,
      twitterTerm: ""
    }
  }
  toggleTensorFlow = (value) =>{
    this.setState({useTensorFlow: value})
    console.log(value);
  }
  SearchTwitter = () =>{
    console.log(this.state.twitterTerm)
  }
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headerText}>Sentiment Analysis with Google Cloud!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  stackLayout: {
    flex:.35,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 300,
    textAlign:'center'
  },
  row: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex:.40,
    fontWeight:'bold',
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  switch: {
    flex: .5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entry: {
    flex: .5,
    width: 200,
    height: 30,
    borderColor: 'black',
    borderWidth:1
  },
});
