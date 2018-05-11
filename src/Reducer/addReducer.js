import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import action from '../Action/index';
import add_action_type from '../Action/actionType';

const initialState = {
    count:0
}
const addReducer = (state = initialState, action)=>{
    switch(action.type){
        case add_action_type:
            return {
                ...state,
                count: state.count+1
            }
        default:
            return state;
    }
}

export default addReducer;
