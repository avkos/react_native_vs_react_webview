import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
export default class Back extends Component {


    render() {
        let {onPress=()=>{}}=this.props;
        return <Text onPress={onPress('dashboard')}
            style={{padding:10,fontSize:20,color:'blue'}}
        >Back</Text>;
    }
}