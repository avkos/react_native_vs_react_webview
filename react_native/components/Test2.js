import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, ScrollView
} from 'react-native';
export default class test2 extends Component {

    componentWillMount() {
        this.state = {
            startTime: new Date().getTime(),
            R: 0,
            G: 0,
            B: 0
        };

    }

    componentDidMount() {
        let {R, G, B,cnt=0}=this.state;
        let step=20;
        let interval = setInterval(() => {
            R+=step;
            cnt++;
            if (R > 255) {
                R = 0;
                G+=step;
            }
            if (G > 255) {
                G = 0;
                B+=step;
            }
            if (B > 255) {
                let endTime = new Date().getTime();
                clearInterval(interval)
                this.setState({
                    endTime: endTime,
                    totalTime: (endTime - this.state.startTime),
                    renderTime: (endTime - this.state.buildEnd)
                });
            } else {
                this.setState({R, G, B,cnt});
            }
        }, 0);
        this.setState({
            totalTime: (this.state.endTime - this.state.startTime)
        });
    }

    getResultTextStyle(){
        return {
            fontSize:30,
            marginBottom:10
        }
    }
    render() {
        let {totalTime = null, renderTime = null, buildTime = null, R, G, B,cnt=0} = this.state;

        if (!totalTime) {
            return (
                <View style={{height: 500, backgroundColor: `rgb(${R},${G},${B})`}}>
                    <Text style={{textAlign:'center',fontSize:100,paddingTop: 100}}>{cnt}</Text>
                </View>);
        }
        return <View>
            <Text style={this.getResultTextStyle()}>React - Native</Text>
            <Text style={this.getResultTextStyle()}>Total Time: {totalTime/1000}s</Text>
            <Text style={this.getResultTextStyle()}>Block Count: {cnt}</Text>
        </View>;
    }
}