import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Screen1 from './src/Page/addAcount'

export default class App extends Component {
  render() {
    console.log('看一下store',store);
    return (
      <Provider store={store}> 
        <Screen1 />
      </Provider>
    );
  }
}
