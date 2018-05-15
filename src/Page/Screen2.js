import React, { Component } from 'react';
import {  View, Text, TouchableOpacity} from 'react-native';

export default class Screen2 extends Component {
  static navigationOptions = {
    title: '第二页',
  };
  render() {
    const {navigation} = this.props;
    const title = navigation.getParam('title', '哈哈哈');
    return (
      <View>
        <Text> Details </Text>
        <Text> 查看从上级页面传递过来的参数：{JSON.stringify(title)} </Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.goBack();
        }} style={{width:120,height:30,backgroundColor:'orange',marginTop:100,justifyContent:'center',alignItems:'center'}}>
          <View>
            <Text>返回到上一个页面</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
