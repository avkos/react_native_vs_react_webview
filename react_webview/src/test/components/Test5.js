import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class test5 extends Component {

    componentWillMount() {
        this.state = {};
        this.state.time = 500;
    }

    setStyle() {

        this.state.animateTime = this.state.time / 1000;
        this.state.bike = 100;
        this.state.rotateWheel = 0;
        this.state.rotatePedal = 0;
        this.state.drawWheel = 100;
        this.state.drawBone = 100;
        this.state.drawBone2 = 100;
        this.state.drawBone3 = 100;
        this.state.drawBone4 = 100;
        this.state.drawBone5 = 100;
        this.state.drawBone6 = 90;
        this.state.drawBone7 = 50;
        this.state.drawBone8 = 10;
        this.state.runBox = 500;

        this.state.styles = {
            box: {
                display: 'inline-block',
                width: 50,
                height: 150,
                marginTop: -100,
                backgroundColor: '#de6d7b',
                animationName: 'some-red-line',
                animationDuration: this.state.animateTime * 2 + 's',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },

            boneBack: {
                background: '#000',
                position: 'absolute', top: 118, left: 53, display: 'block',
                width: this.state.drawBone,
                height: 3,

                borderWidth: 3,
                borderRadius: 5,


            },
            boneFront: {
                background: '#000',
                position: 'absolute', top: 80, left: 140, display: 'block',
                width: this.state.drawBone2,
                height: 3,

                borderWidth: 3,
                borderRadius: 5,
                transform: 'rotate( -50deg)',
            },
            boneTop: {
                background: '#000',

                position: 'absolute', top: 51, left: 122, display: 'block',
                width: this.state.drawBone3,
                height: 3,
                borderWidth: 3,
                borderRadius: 5,
                transform: 'rotate( -10deg)',
            },
            boneTopBack: {
                background: '#000',


                position: 'absolute', top: 89, left: 42, display: 'block',
                width: this.state.drawBone6,
                height: 3,
                borderWidth: 3,
                borderRadius: 5,
                transform: 'rotate( -40deg)',
            },
            bonePedalTop: {
                background: '#000',

                position: 'absolute', top: 70, left: 80, display: 'block',
                width: this.state.drawBone4,
                height: 3,
                borderWidth: 3,
                borderRadius: 5,
                transform: 'rotate( 60deg)',
            },
            pedal: {
                position: 'absolute', top: 95, left: 130, display: 'block',
                width: this.state.drawBone7,

                height: this.state.drawBone7,
                borderWidth: 3,
                borderRadius: 50,
                backgroundColor: 'rgba(0,0,0,0.2)',

            },
            pedalIn: {
                background: '#000',

                position: 'absolute', top: 20, left: 20, display: 'block',
                width: this.state.drawBone8,
                height: this.state.drawBone8,
                borderWidth: 3,
                borderRadius: 10,

            },
            pedalOne: {
                background: '#000',

                position: 'absolute', top: 80, left: 153, display: 'block',
                width: 3,
                height: 80,
                backgroundColor: '#000',
                animationName: 'some-rotate',
                animationDuration: this.state.animateTime * 1.5 + 's',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
            },
            sit: {
                background: '#000',

                position: 'absolute', top: 20, left: 90, display: 'block',
                width: 40,
                height: this.state.drawBone8,
                backgroundColor: '#000',
                borderRadius: 10,
                transform: 'rotate( -10deg)',
            },
            rule: {
                background: '#000',

                position: 'absolute', top: 75, left: 190, display: 'block',
                width: this.state.drawBone5,
                height: 3,
                borderWidth: 3,
                transform: 'rotate( 60deg)',
                borderRadius: 5,
            },
            ruleTop: {
                background: '#000',

                position: 'absolute', top: 30, left: 197, display: 'block',
                width: 20,
                height: 3,
                borderWidth: 3,
                transform: 'rotate(10deg)',
                borderRadius: 5,
            },
            ruleCircle: {
                background: '#000',

                position: 'absolute', top: 120, left: 0, display: 'block',
                width: 20,
                height: 1,
                borderWidth: 3,
                transform: 'rotate( 10deg)',
                borderRadius: 5,
            },
            wheel: {

                position: 'absolute', display: 'block',
                width: this.state.drawWheel,
                height: this.state.drawWheel,
                top: 70,
                left: 0,
                border: '3px solid #000',
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.2)',
                animationName: 'some-rotate',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
                animationDuration: this.state.animateTime + 's'
            },
            wheel2: {

                position: 'absolute', display: 'block',
                width: this.state.drawWheel,
                height: this.state.drawWheel,
                top: 70,
                left: 215,
                border: '3px solid #000',
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.2)',
                animationName: 'some-rotate',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear',
                animationDuration: this.state.animateTime + 's'
            }

        };
    }

    render() {
        this.setStyle();
        let {bike, styles}=this.state;
        let {box, wheel, wheel2, ruleTop, sit, boneBack, rule, boneFront, pedal, pedalIn, pedalOne, boneTop, boneTopBack, bonePedalTop}=styles;

        return (


            <div style={{background: '#5ba5de', position: 'fixed'}}>
                <div style={{
                    width: '500%',
                    paddingLeft: 12,
                    paddingTop: 69,
                    marginTop: -100,
                    height: 150,
                    backgroundColor: '#5ba5de'
                }}>

                    <div style={{
                        display: 'block',
                        float: 'left',
                        lineHeight: 3.9,
                        borderRadius: 50,
                        marginRight: 10,
                        width: 80,
                        height: 80,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#fff'
                    }} onClick={() => {

                        let {changePage}=this.props;
                        changePage('dashboard')();
                    }}>Back
                    </div>
                    <div style={{
                        display: 'block',
                        float: 'left',
                        lineHeight: 1.4,
                        borderRadius: 50,
                        marginRight: 10,
                        width: 80,
                        height: 80,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        fontSize: 50,
                        color: '#fff'
                    }} onClick={() => {
                        let {time}=this.state;
                        time += 100;
                        console.log(time)
                        this.setState({time})
                    }}>-
                    </div>

                    <div style={{
                        display: 'block',
                        float: 'left',
                        lineHeight: 1.5,
                        borderRadius: 50,
                        marginRight: 10,
                        width: 80,
                        height: 80,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        fontSize: 50,
                        color: '#fff'
                    }} onClick={() => {
                        let {time}=this.state;
                        if (time > 150) {
                            time -= 100;
                            console.log(time)
                            this.setState({time})
                        }
                    }}>+
                    </div>


                </div>

                <div style={{
                    width: '100%',

                    animationName: 'some-roll',
                    animationIterationCount: 'infinite',
                    animationDuration: '8s',
                    paddingLeft: bike,
                    height: 60,
                    backgroundColor: '#5ba5de'
                }}>
                    <div style={{
                        width: 500,
                        top:-110,
                        position: 'relative',
                        height: 170,
                    }}>
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={2000}
                            transitionEnter={false}
                            transitionLeave={false}>
                            <div style={wheel}/>
                            <div style={sit}/>
                            <div style={bonePedalTop}/>
                            <div style={boneBack}/>
                            <div style={boneTopBack}/>
                            <div style={boneTop}/>

                            <div style={pedal}>
                                <div style={pedalIn}>

                                </div>

                            </div>
                            <div style={pedalOne}/>
                            <div style={boneFront}/>
                            <div style={ruleTop}/>

                            <div style={rule}/>

                            <div style={wheel2}/>

                        </ReactCSSTransitionGroup>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    paddingLeft: 200,
                    paddingTop: 100,
                    height: 210,
                    backgroundColor: '#666'
                }}>
                    <div style={box}/>


                </div>
            </div>

        );
    }

    componentDidMount() {

        // this.state.bounceValue.setValue(1.5);     // Start large
        //  this.state.width.setValue(500);     // Start large
        //  this.state.height.setValue(500);     // Start large
        // Animated.timing(this.state.rotateWheel, {
        //     toValue: 360,
        //     duration: 3000,
        //     easing: Easing.linear
        // }).start();

        // this.runBox();
        // this.runWheel();
        // this.runPedal();
        // this.runBike();


    }

}