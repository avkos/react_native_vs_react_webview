import React, {Component} from 'react';

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
            fontSize:40,
            marginBottom:10
        }
    }
    render() {
        let {totalTime = null, renderTime = null, buildTime = null, R, G, B,cnt=0} = this.state;

        if (!totalTime) {
            return (
                <div style={{height: 500, backgroundColor: `rgb(${R},${G},${B})`,fontSize:120,textAlign:'center',paddingTop:100}}>
                    {cnt}
                </div>);
        }
        return <div>
            <div style={this.getResultTextStyle()}>React + WebView</div>
            <div style={this.getResultTextStyle()}>Block Count: {cnt}</div>
            <div style={this.getResultTextStyle()}>Total Time: {totalTime/1000}s</div>
        </div>;
    }
}