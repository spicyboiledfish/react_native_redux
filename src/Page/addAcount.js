import React, { Component } from 'react';
import {  View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import add_action from '../Action/index';

class AddAcount extends Component {
  render() {
      const {count, addCount} = this.props;
    return (
      <View style={{margin:100}}>
        <Text>数字：{count}</Text>
        <TouchableOpacity onPress={()=>{addCount()}}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnView:{
    justifyContent:'center',
    alignItems:'center',
    width:200,
    height:50,
    backgroundColor: 'orange',
  },
  btnText:{
    fontSize:25,
    fontWeight: '300',
  }
});


//mapStateToProps 是一个对象 所以当你用=》函数的形式的时候 是要染回一个对象（或者不用函数而是直接是一个对象也是可以的）
//mapStateToProps 的写法参照下面的mapDispatchToProps 一样有很多种
//这里要注意写的AddReducer这个对象
  //默认的state是一个{}
  //当你combine创建了一个reducer
  //那么state就变成了
  /* 
    state:{
      //你combine中的reducer
      AddReducer: {
        //这个reducer中的instailState
        //count：xxx
      }
    }
  */
const mapStateToProps = state => ({
    count: state.AddReducer.count
})


//mapDispatchToProps 是一个对象 所以当你用=》函数的形式的时候 是要染回一个对象（或者不用函数而是直接是一个对象也是可以的）
/**
 dispath => ({
  addCount: () => {dispath(add_action())}
});
这个等价于 function（dispath）{
  return {
    addCount: () => {dispath(add_action())}
  }
}
也等价于
dispath => {
  return {
    addCount: () => {dispath(add_action())}
  }
};
也等价于
{
  addCount: add_action
}
上面这些写法都是可以的
 */
const mapDispatchToProps = dispath => ({
  addCount: () => {dispath(add_action())}
});

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(AddAcount);

export default Screen1;