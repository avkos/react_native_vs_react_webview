import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class test1 extends Component {

    componentWillMount() {
        this.state = {
            startTime: new Date().getTime()
        };

    }

    componentDidMount() {
        this.state.endTime = new Date().getTime();
        let totalTime=this.state.endTime - this.state.startTime;
        let renderTime=this.state.endTime - this.state.buildEnd;
        setTimeout(()=>{
            this.setState({
                totalTime,
                renderTime,
            });
        },3000)

    }
    getStyle(r,g){
        return {
            width: 1,
            height: 5,
            backgroundColor: `rgb(${r},${g},100)`};
    }
    getColors() {
        let red = [], green = {},cnt=0;
        for (let r = 0; r < 255; r = r + 10) {
            green[r] = [];
            for (let g = 0; g < 255; g++) {
                cnt++;
                green[r].push(<View key={`s${r}-${g}`}
                                   style={this.getStyle(r,g)}/>)
            }
            red.push(<View key={`v${r}`} style={{flexDirection:'row'}}>{green[r]}</View>)
        }
        this.state.cnt=cnt;
        return red;
    }
    getResultTextStyle(){
        return {
            fontSize:30,
            marginBottom:10
        }
    }
    render() {
        // return <Text style={{padding: 10, fontSize: 20, color: '#000', textAlign: 'center'}}>Test 1</Text>;
        let {totalTime = null, renderTime = null, buildTime = null,colors=null,cnt=0} = this.state;
        if (!colors) {
            this.state.buildStart = new Date().getTime();
            colors=this.state.colors = this.getColors();
            this.state.buildEnd = new Date().getTime();
            this.state.buildTime = this.state.buildEnd - this.state.buildStart;
            return (
                <View>
                    {colors}
                </View>);
        }
        return <View>
            <Text style={this.getResultTextStyle()}>REACT - NATIVE</Text>
            <Text style={this.getResultTextStyle()}>Render Time: {renderTime/1000}s</Text>
            <Text style={this.getResultTextStyle()}>Total Time: {totalTime/1000}s</Text>
            <Text style={this.getResultTextStyle()}>Build Time:{this.state.buildTime/1000}s</Text>
            <Text style={this.getResultTextStyle()}>Elements on screen:{this.state.cnt}</Text>
        </View>;
    }
}