import React, { Component } from 'react';
import {  View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import add_action from '../Action/index';

class AddAcount extends Component {
  render() {
      const {count, addCount, b} = this.props;
      console.log(4);
    return (
      <View style={{margin:100}}>
        <Text>数字：{count}</Text>
        <Text>数字：{b}</Text>
        <TouchableOpacity onPress={()=>{addCount()}}>
        {/* 这里的addCount()不能写成 this.addCount()，因为这个addCount是上级传递过来的*/}
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


//mapStateToProps 是一个对象 所以当你用=》函数的形式的时候 是要返回一个对象（或者不用函数而是直接是一个对象也是可以的）
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
const mapStateToProps = state => {
  console.log(6);
  return {
    count: state.addReducer.count,
    b: state.addReducer.b,
  };
    //这边count：state.AddReducer.count的原因：
    //由于我们在store.js中执行了createStore(Reducer),这里的Reducer是combine过的
    //在Reducer的index.js文件中执行了combineReducers（addReducer,...）了，
    //Reducer = { AddReducer: {count: state.count+1} , ...}
    //那么：store.state=Reducer={{ addReducer: {count: state.count+1} , ...}}
    //所以这里的count就是：state.addReducer.count 
    // count: state.addReducer.count,
    // b: state.addReducer.b,
}

//上述如果直接返回一个对象，可以简写成：
// const mapStateToProps = state =>({
//   count: state.addReducer.count,
//   b: state.addReducer.b
// })


//mapDispatchToProps 是一个对象 所以当你用=》函数的形式的时候 是要
//返回一个对象（或者不用函数而是直接是一个对象也是可以的）
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
const mapDispatchToProps = dispath => {
  console.log(1);
  return {
    addCount: () => {
      console.log('看看这个dispatch了之后是啥玩意',dispath);
      console.log(5);
      //查看源码后，知道在回调函数中：调用了addReducer方法，
      //并把当前的state和action当做参数传递下去了
      //currentReducer(currentState, action);
      dispath(add_action());
      console.log(2);
    }
  }
  
};

/*
dispatch源码：

function dispatch(action) {
  if (!isPlainObject(action)) {
    throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
  }

  if (typeof action.type === 'undefined') {
    throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
  }

  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.');
  }

  try {
    isDispatching = true;
    currentState = currentReducer(currentState, action);
  } finally {
    isDispatching = false;
  }

  var listeners = currentListeners = nextListeners;
  for (var i = 0; i < listeners.length; i++) {
    var listener = listeners[i];
    listener();
  }

  return action;
}
*/


//本质是javaScript的普通对象


const Screen1 = connect(mapStateToProps, mapDispatchToProps)(AddAcount);

//通过console.log打印日志可以看出来，一切的数据流的走向如下：
//首先Screen1渲染是通过mapStateToProps和mapDispatchToProps父级传递过来的方法执行了之后，
//再传递给展示组件AddAcount了，所以界面第一次加载完毕，打印了 6 1 4
//点击按钮，首先执行了mapDispatchToProps的方法中的：addCount，所以执行了5
//然后开始执行 dispatch(add_action()),这个方法将action通过dispatch到reducer中，
//去了addReducer中，执行3
//addReducer通过传递过来的state和action,更新store中的state,
//state发生变化，执行了mapStateToProps，然后更新了当前的state, 6
//再执行剩下的2
//界面渲染 render 4

//总结：6 1 4（首页）-> 点击按钮（5，3，6，2，4）-> 再点击按钮 （5，3，6，2，4）

export default Screen1;