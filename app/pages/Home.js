/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,StatusBar,View} from 'react-native';
import NIcon from 'react-native-vector-icons/Ionicons'
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    translucent={true}
                />
                <NIcon name={"ios-people"} style={{backgroundColor: "rgba(0,0,0,0)"}}
                       size={20} color="#cc0033"/>
            <Text> Home ! </Text>
            </View>
        );
    }
}
