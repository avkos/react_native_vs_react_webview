import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Dashboard from './components/DashBoard'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'
import Test5 from './components/Test5'
import Back from './components/Back'

export default class test1 extends Component {

    componentWillMount() {
        this.state = {
            page: 'dashboard'
        };
    }

    changePage = () => (page) => () => {
        this.setState({page});
    }

    render() {
        let {page = 'dashboard'}=this.state;
        switch (page) {
            case 'dashboard':
                return <View>
                    <Dashboard onPress={this.changePage()}/>
                </View>;
                break;
            case 'test1':
                return <View>
                    <Back onPress={this.changePage()}/>
                    <Test1/>
                </View>;
                break;
            case 'test2':
                return <View>
                    <Back onPress={this.changePage()}/>
                    <Test2/>
                </View>;
                break;
            case 'test3':
                return <View>
                    <Back onPress={this.changePage()}/>
                    <Test3/>
                </View>;
                break;
            case 'test4':
                return <View>
                    <Back onPress={this.changePage()}/>
                    <Test4/>
                </View>;
                break;
            case 'test5':
                return <View>
                    <Back onPress={this.changePage()}/>
                  <Test5 changePage={this.changePage()}/>
                </View>;
                break;
        }

    }
}

AppRegistry.registerComponent('test1', () => test1);
