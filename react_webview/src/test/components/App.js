import React, {Component} from 'react'
import Dashboard from './DashBoard'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'
import Back from './Back'
export default class App extends Component {


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
                return <div>
                    <Dashboard onPress={this.changePage()}/>
                </div>;
                break;
            case 'test1':
                return <div>
                    <Back onPress={this.changePage()}/>
                    <Test1/>
                </div>;
                break;
            case 'test2':
                return <div>
                    <Back onPress={this.changePage()}/>
                    <Test2/>
                </div>;
                break;
            case 'test3':
                return <div>
                    <Back onPress={this.changePage()}/>
                    <Test3/>
                </div>;
                break;
            case 'test4':
                return <div>
                    <Back onPress={this.changePage()}/>
                    <Test4/>
                </div>;
                break;
            case 'test5':
                return <div>
                    <Back onPress={this.changePage()}/>
                    <Test5 changePage={this.changePage()}/>
                </div>;
                break;
        }

    }

}
