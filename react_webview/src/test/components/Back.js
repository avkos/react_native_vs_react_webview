import React, {Component} from 'react';
export default class Back extends Component {
    render() {
        let {onPress=()=>{}}=this.props;
        return <div onClick={onPress('dashboard')}
            style={{padding:10,fontSize:20,color:'blue'}}
        >Back</div>;
    }
}