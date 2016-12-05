import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Image, Animated,
    View, ScrollView, Easing
} from 'react-native';
export default class test5 extends Component {

    componentWillMount() {
        this.state = {};
        this.state.time=500;
        this.state.bike = new Animated.Value(200);
        this.state.rotateWheel = new Animated.Value(0);
        this.state.rotatePedal = new Animated.Value(0);
        this.state.drawWheel = new Animated.Value(0);
        this.state.drawBone = new Animated.Value(0);
        this.state.drawBone2 = new Animated.Value(0);
        this.state.drawBone3 = new Animated.Value(0);
        this.state.drawBone4 = new Animated.Value(0);
        this.state.drawBone5 = new Animated.Value(0);
        this.state.drawBone6 = new Animated.Value(0);
        this.state.drawBone7 = new Animated.Value(0);
        this.state.drawBone8 = new Animated.Value(0);
        this.state.runBox = new Animated.Value(500);
        this.state.runBox2 = new Animated.Value(900);
        this.state.runBox3 = new Animated.Value(1300);
        this.state.runBox4 = new Animated.Value(1700);
        this.state.runBox5 = new Animated.Value(2100);
        let box={
            width: 50,
            height: 150,
            marginTop:-100,
            backgroundColor: '#de6d7b'
        };
        this.state.styles = {
            box: {...box,
                marginLeft: this.state.runBox,
            },

            boneBack: {
                width: this.state.drawBone,
                height: 1,
                borderWidth: 3,
                marginTop: 44,
                marginLeft: -50,
                marginRight: 0,
                borderRadius: 5,

            },
            boneFront: {
                width: this.state.drawBone2,
                height: 1,
                borderWidth: 3,
                marginTop: 8,
                marginLeft: -7,
                marginRight: -50,
                borderRadius: 5,
                transform: [
                    {rotate: '-50deg'}
                ],
            },
            boneTop: {
                width: this.state.drawBone3,
                height: 1,
                borderWidth: 3,
                marginTop: -20,
                marginLeft: -35,
                marginRight: -65,
                borderRadius: 5,
                transform: [
                    {rotate: '-10deg'}
                ],
            },
            boneTopBack: {
                width: this.state.drawBone6,
                height: 1,
                borderWidth: 3,
                marginTop: 14,
                marginLeft: -112,
                marginRight: 22,
                borderRadius: 5,
                transform: [
                    {rotate: '-40deg'}
                ],
            },
            bonePedalTop: {
                width: this.state.drawBone4,
                height: 1,
                borderWidth: 3,
                marginTop: 0,
                marginLeft: -25,
                marginRight: -75,
                borderRadius: 5,
                transform: [
                    {rotate: '60deg'}
                ],
            },
            pedal: {
                width: this.state.drawBone7,
                height: this.state.drawBone7,
                borderWidth: 2,
                marginTop: 24,
                marginLeft: -25,
                marginRight: -25,
                borderRadius: 50,
                backgroundColor: 'rgba(0,0,0,0.2)',

            },
            pedalIn: {
                width: this.state.drawBone8,
                height: this.state.drawBone8,
                borderWidth: 3,
                marginTop: 14,
                marginLeft: 16,
                marginRight: 0,
                borderRadius: 10,

            },
            pedalOne: {
                width: 3,
                height: 80,
                backgroundColor: '#000',
                marginTop: 5,
                marginLeft: 0,
                marginRight: -15,
                transform: [
                    {rotate: '20deg'}
                ],
            },
            sit: {
                width: 40,
                height: this.state.drawBone8,
                backgroundColor: '#000',
                borderRadius: 10,
                marginTop: -45,
                marginLeft: -15,
                marginRight: -25,
                transform: [
                    {rotate: '-10deg'}
                ],
            },
            rule: {
                width: this.state.drawBone5,
                height: 1,
                borderWidth: 3,
                marginRight: -80,
                transform: [
                    {rotate: '60deg'}
                ],
                borderRadius: 5,
            },
            ruleTop: {
                width: 20,
                height: 1,
                borderWidth: 3,
                marginTop: -45,
                marginRight: -25,
                marginLeft: 5,
                transform: [
                    {rotate: '10deg'}
                ],
                borderRadius: 5,
            },
            ruleCircle: {
                width: 20,
                height: 1,
                borderWidth: 3,
                marginTop: -10,
                marginRight: -10,
                marginLeft: -10,
                transform: [
                    {rotate: '10deg'}
                ],
                borderRadius: 5,
            },
            wheel: {
                width: this.state.drawWheel,
                height: this.state.drawWheel,
                borderWidth: 3,
                borderRadius: 10,
                backgroundColor: 'rgba(0,0,0,0.2)',
                transform: []

            }

        };
    }

    render() {

        let {bike,rotateWheel, rotatePedal, styles}=this.state;
        let {box,wheel, ruleCircle, ruleTop, sit, boneBack, rule, boneFront, pedal, pedalIn, pedalOne, boneTop, boneTopBack, bonePedalTop}=styles;

        let rotateAnimation = rotateWheel.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        let rotatePedalAnimation = rotatePedal.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View>
                <View style={{
                    flexDirection: 'row', flex: 1,
                    paddingLeft: 0,
                    paddingTop: 60,
                    marginTop: -100,
                    height:150,
                    backgroundColor: '#5ba5de'
                }}>
                    <Text style={{paddingTop:20,borderRadius:50,marginRight:10,width:80,height:80,backgroundColor:'rgba(0,0,0,0.1)',
                        textAlign:'center',fontSize:20,color:'#fff'}} onPress={()=>{
                            let {changePage} = this.props;
                            changePage('dashboard')();
                    }}>Back</Text>

                        <Text style={{borderRadius:50,marginRight:10,width:80,height:80,backgroundColor:'rgba(0,0,0,0.1)',
                            textAlign:'center',fontSize:50,color:'#fff'}} onPress={()=>{this.state.time+=100}}>-</Text>

                        <Text style={{borderRadius:50,marginRight:10,width:80,height:80,backgroundColor:'rgba(0,0,0,0.1)',
                            textAlign:'center',fontSize:50,color:'#fff'}}  onPress={()=>{if(this.state.time>150)this.state.time-=100}}>+</Text>


                </View>
                <Animated.View style={{
                    flexDirection: 'row', flex: 1,
                    paddingLeft: bike,
                    paddingTop: 60,
                    marginTop:0,
                    height: 170,
                    backgroundColor: '#5ba5de'
                }}>

                    <Animated.View  style={[wheel, {transform: [{rotate: rotateAnimation}]}]}/>
                    <Animated.View style={sit}/>
                    <Animated.View style={bonePedalTop}/>
                    <Animated.View style={boneBack}/>
                    <Animated.View style={boneTopBack}/>
                    <Animated.View style={boneTop}/>

                    <Animated.View style={pedal}>
                        <Animated.View style={pedalIn}>

                        </Animated.View>

                    </Animated.View>
                    <Animated.View style={[pedalOne, {transform: [{rotate: rotatePedalAnimation}]}]}/>
                    <Animated.View style={boneFront}/>
                    <Animated.View style={ruleTop}/>

                    <Animated.View style={rule}/>

                    <Animated.View style={[wheel, {transform: [{rotate: rotateAnimation}]}]}/>


                </Animated.View>
                <View  style={{
                    flexDirection: 'row', flex: 1,
                    paddingLeft: 200,
                    paddingTop: 100,
                    height: 210,
                    backgroundColor: '#666'
                }}>
                    <Animated.View style={box}/>

                </View>

            </View>
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
        let springConfig = {
            toValue: 100,
            friction: 200,
            tension: 200
        }



        Animated.parallel([
            Animated.spring(this.state.drawBone, {...springConfig, toValue: 100}),
            Animated.spring(this.state.drawBone2, {...springConfig, toValue: 100}),
            Animated.spring(this.state.drawBone3, {...springConfig, toValue: 100}),
            Animated.spring(this.state.drawBone4, {...springConfig, toValue: 100}),
            Animated.spring(this.state.drawBone5, {...springConfig, toValue: 100}),
            Animated.spring(this.state.drawBone6, {...springConfig, toValue: 90}),
            Animated.spring(this.state.drawBone7, {...springConfig, toValue: 50}),
            Animated.spring(this.state.drawBone8, {...springConfig, toValue: 10}),
            Animated.spring(this.state.drawWheel, {...springConfig, toValue: 100}),
        ]).start();
        this.runBox();
        this.runWheel();
        this.runPedal();
        this.runBike();


    }
    runBike(){
        Animated.timing(this.state.bike, {
            toValue: 300,
            duration:2000,
        }).start(()=>{
            Animated.timing(this.state.bike, {
                toValue: 150,
                duration:5000,
            }).start(()=>{
                this.runBike()
            })
        })
    }
    runPedal(){
        Animated.timing(this.state.rotatePedal, {
            toValue: 360,
            duration: this.state.time,
            easing: Easing.linear
        }).start(()=>{
            this.state.rotatePedal.setValue(0)
            this.runPedal()
        })
    }
    runWheel(){
        Animated.timing(this.state.rotateWheel, {
            toValue: 180,
            duration: this.state.time,
            easing: Easing.linear
        }).start(()=>{
            this.state.rotateWheel.setValue(0)
            this.runWheel()
        })
    }
    runBox(){
        Animated.timing(this.state.runBox, {
            duration: this.state.time*2,
            easing: Easing.linear,toValue:-500
        }).start(()=>{
            this.state.runBox.setValue(500);
            this.runBox();
        });
    }
}