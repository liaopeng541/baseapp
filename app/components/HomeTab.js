/**
 * Created by liao on 2017/5/12.
 */
'use strict';
import React, {Component} from 'react'
import {
    StyleSheet,
    BackHandler,
    ToastAndroid,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import px2dp from '../lib/px2dp'
import HomePage from '../pages/Home'
import My from '../pages/My'
import List from "../pages/List";
import Global from "../theme/Global"
export default class HomeTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'HomePage',
            hideTabBar: false,
        }
        this.tabNames = [
            ["首页", "ios-home-outline", "HomePage", <HomePage {...this.props}/>],
            ["门店", "ios-pin-outline", "Store", <List {...this.props}/>],
            ["我的", "ios-person-outline", "My", <My {...this.props}/>]
        ]
    }
    render() {
        return (
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={{ height: Global.TabBar.height,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Global.TabBar.bg,}}
                sceneStyle={{paddingBottom:Global.TabBar.height}}
            >
                {
                    this.tabNames.map((item, i) => {
                        return (
                            <TabNavigator.Item
                                key={i}
                                title={item[0]}
                                titleStyle={{fontSize:13,color:"#ffffff"}}
                                selected={this.state.currentTab === item[2]}
                                tabStyle={(this.state.currentTab != item[2])?{justifyContent:"center",height:Global.TabBar.height,backgroundColor:Global.TabBar.bg}:{backgroundColor:Global.TabBar.selected_bg,height:Global.TabBar.height,justifyContent:"center"}}
                                selectedTitleStyle={{color: "#ffffff"}}
                                renderIcon={() => <Icon name={item[1]} size={px2dp(22)} color="#ffffff"/>}
                                renderSelectedIcon={() => <Icon name={item[1]}
                                                                size={px2dp(24)} color={"#ffffff"}/>}
                                onPress={() => {
                                    this.setState({currentTab: item[2]});
                                }}>
                                {item[3]}
                            </TabNavigator.Item>

                        )
                    })
                }
            </TabNavigator>
        )
    }
}

