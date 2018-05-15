import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Screen1 from './src/Page/Screen1';
import Screen2 from './src/Page/Screen2';
import {StackNavigator,} from 'react-navigation';


const RootNavigator = StackNavigator({
  Home: {screen: Screen1},
  Detail: {screen: Screen2},
});

export default class App extends Component {
  render() {
    console.log('看一下store',store);
    return (
      <Provider store={store}> 
        <RootNavigator />
      </Provider>
    );
  }
}
