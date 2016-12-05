import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,Image,
    View, ScrollView
} from 'react-native';
export default class test4 extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }
    render() {
        let containerStyle={
            flex: 1, alignItems: 'stretch',marginBottom:30
        };
        let imgStyle={
            flex: 1,
            height:300
        };
        return <ScrollView style={{paddingLeft:10,paddingRight:10}}>
            <Text style={{fontSize:40}}>Some Gallery</Text>
            <View style={containerStyle}>
            <Image
                style={imgStyle}
                source={{uri: 'http://1.bp.blogspot.com/-9VWTk3LsUrU/UAe8GnV6hWI/AAAAAAAAHCw/ATOzf-5b230/s1600/Hdhut.blogspot.com+(12).jpg'}}
            /></View>
            <Image
                style={imgStyle}
                source={{uri: 'http://onehdwallpaper.com/wp-content/uploads/2015/07/Winter-Mountain-HD-Wallpapers.jpg'}}
            />
            <View style={containerStyle}>
            <Image
                style={imgStyle}
                source={{uri: 'http://www.pixelstalk.net/wp-content/uploads/2016/04/Beautiful-Mountain-in-Night-Wallpapers-HD-Pictures.jpg'}}
            /></View>
            <View style={containerStyle}>
            <Image
                style={imgStyle}
                source={{uri: 'http://1.bp.blogspot.com/-9VWTk3LsUrU/UAe8GnV6hWI/AAAAAAAAHCw/ATOzf-5b230/s1600/Hdhut.blogspot.com+(12).jpg'}}
            /></View>
            <View style={containerStyle}>
            <Image
                style={imgStyle}
                source={{uri: 'http://onehdwallpaper.com/wp-content/uploads/2015/07/Winter-Mountain-HD-Wallpapers.jpg'}}
            /></View>
            <View style={containerStyle}>
            <Image
                style={imgStyle}
                source={{uri: 'http://www.pixelstalk.net/wp-content/uploads/2016/04/Beautiful-Mountain-in-Night-Wallpapers-HD-Pictures.jpg'}}
            /></View>
        </ScrollView>
    }
}