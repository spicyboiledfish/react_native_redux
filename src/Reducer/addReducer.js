import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import action from '../Action/index';
import add_action_type from '../Action/actionType';

const initialState = {
    //初始化中，最好将所有的addReducer中的state初始化，否则就是undefined了，没有数据类型
    count:0,
    a:3,
}

const addReducer = (state = initialState, action)=>{
    console.log('state',state);
    switch(action.type){
        case add_action_type:
            console.log(3);
            return {
                ...state,
                b:state.b-1 || 10,  
                //1. 如果写成：b:state.b-1 上面没有初始化的话，
                //这就意味着，b虽然没有初始化，但是b；undefined了，
                //那么undefined-1 = NaN
                //2. 如果写成b:state.b-1 || 0 上面没有初始化，
                //这样可以避免b会变成NaN，打印出来，会点击一下变成0，再点击一下变成-1；
                //但是如果你在界面上写这个b的值，会发现，界面刚加载完毕并没有b显示出来的值，
                //也就是说，最好还是写一下初始值。在||中存在 0 || 1 会取值为1
                //讨论出来的结果就是：不要在reducer的返回值中写 || 去赋初始值，不友好
                 count: state.count+1 
            }
        default:
            return state;
    }
}

export default addReducer;







