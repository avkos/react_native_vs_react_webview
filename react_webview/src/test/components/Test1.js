import React, {Component} from 'react'
export default class Test1 extends Component {
    componentWillMount() {
        this.state = {
            startTime: new Date().getTime(),
            colorR: 0,
            colorG: 0,
            colorB: 0
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
            display:'inline-block',
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
                green[r].push(<div key={`s${r}-${g}`} style={this.getStyle(r,g)} />)
            }
            red.push(<div style={{height:5}} key={`v${r}`}>{green[r]}</div>)
        }
        this.state.cnt=cnt;
        return red;
    }
    getResultTextStyle(){
        return {
            fontSize:40,
            marginBottom:10
        }
    }
    render() {
        let {totalTime = null, renderTime = null, buildTime = null,colors=null,cnt=0} = this.state;
        if (!colors) {
            this.state.buildStart = new Date().getTime();
            colors=this.state.colors = this.getColors();
            this.state.buildEnd = new Date().getTime();
            this.state.buildTime = this.state.buildEnd - this.state.buildStart;
            return (
                <div>
                    {colors}
                </div>);
        }
        return <div >
            <h1>React + WebView</h1>
            <div style={this.getResultTextStyle()}>Render Time: {renderTime/1000}s</div>
            <div style={this.getResultTextStyle()}>Total Time: {totalTime/1000}s</div>
            <div style={this.getResultTextStyle()}>Build Time:{this.state.buildTime/1000}s</div>
            <div style={this.getResultTextStyle()}>Elements on screen:{this.state.cnt}</div>
        </div>;
    }

}
