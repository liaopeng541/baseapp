/**
 * @author LiaoPeng
 *
 */
'use strict';
import React, {Component} from 'react'
import Spinkit from 'react-native-spinkit'
import {
    Text,
    View,
} from 'react-native'
import px2dp from '../lib/px2dp'
import Global from "../theme/Global"
export default class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{position: "absolute",left:0, right:0,top:Global.TopBar.height,bottom:Global.TabBar.height, alignItems:"center",justifyContent:"center"
            }}>
                <View style={{height:px2dp(100), width:px2dp(100),backgroundColor:"rgba(0,0,0,0.6)",justifyContent:"center",alignItems:"center",borderRadius:px2dp(10)
                }}>
                    <Spinkit isVisible={true} size={px2dp(50)} type={"Wave"} color={"#ffffff"}/>
                    <Text style={{color:"#ffffff"}}>加载中…</Text>
                </View>
            </View>

        )
    }
}