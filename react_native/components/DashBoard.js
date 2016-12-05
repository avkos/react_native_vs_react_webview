import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,ScrollView,
    Text,
    View
} from 'react-native';
export default class DashBoard extends Component {

    componentWillMount() {
        this.state = {
            btnStyle: {
                paddingTop: 20,
                textAlign: 'center',
                fontSize: 20,
                color: '#000000',

            },
            btn: {
                backgroundColor: '#fefefe',
                borderRadius: 100,
                paddingTop: 13,
                borderColor: '#000',
                margin: 20,
                borderWidth: 1,
                width: 100,
                height: 100,
            }
        }
    }

    render() {
        let {
            onPress = () => {
            }
        }=this.props;
        let {btnStyle, btn} = this.state;
        return (<ScrollView>
            <Text style={{padding: 10, fontSize: 20, color: '#000', textAlign: 'center'}}>React - Native</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={btn}><Text style={btnStyle} onPress={onPress('test1')}>Render 1</Text></View>
                <View style={btn}><Text style={btnStyle} onPress={onPress('test2')}>Render 2</Text></View>
            </View>
            <Text style={{padding: 10, fontSize: 20, color: '#000', textAlign: 'center'}}>Simple</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={btn}><Text style={btnStyle} onPress={onPress('test3')}>Article</Text></View>
                <View style={btn}><Text style={btnStyle} onPress={onPress('test4')}>Gallery</Text></View>
            </View>
            <Text style={{padding: 10, fontSize: 20, color: '#000', textAlign: 'center'}}>Animation</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={btn}><Text style={btnStyle} onPress={onPress('test5')}>Animation</Text></View>
            </View>
        </ScrollView>);
    }

}