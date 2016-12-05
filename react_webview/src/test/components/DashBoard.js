import React, {Component} from 'react';
export default class DashBoard extends Component {

    componentWillMount() {
        this.state = {
            btnStyle: {
                padding: '30px 0 20px 0',
                fontSize: 25,
                color: '#000000',
                marginTop: 7,
                textAlign:'center'

            },
            btn: {
                backgroundColor: '#fefefe',
                borderRadius: 100,
                margin: 20,
                border: '1px solid #000',
                width: 100,
                height: 100,
                display: 'inline-block',
            }
        }
    }

    render() {
        let {
            onPress = () => {
            }
        }=this.props;
        let {btnStyle, btn} = this.state;
        return (<div>
            <div>
                <div style={{textAlign:'center'}}><h1>React + WebView</h1></div>
                <div style={btn}><div style={btnStyle} onClick={onPress('test1')}>Test 1</div></div>
                <div style={btn}><div style={btnStyle} onClick={onPress('test2')}>Test 2</div></div>
                <div style={{textAlign:'center'}}><h1>Simple App</h1></div>
                <div style={btn}><div style={btnStyle} onClick={onPress('test3')}>Article</div></div>
                <div style={btn}><div style={btnStyle} onClick={onPress('test4')}>Gallery</div></div>
                <div style={btn}><div style={btnStyle} onClick={onPress('test5')}>Anim</div></div>
            </div>
        </div>);
    }

}