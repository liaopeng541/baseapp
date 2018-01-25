import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import HomePage from '../pages/Home';
import My from '../pages/My'
import List from '../pages/List'
import NIcon from 'react-native-vector-icons/Ionicons'
import SplashScreen from 'react-native-splash-screen'
SplashScreen.hide();
const MainScreenNavigator = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            header:null,
            tabBarLabel:'首页',
            tabBarIcon: ({tintColor}) => (
                <NIcon name={"ios-people"} style={{backgroundColor: "rgba(0,0,0,0)"}}
                       size={20} color="#cc0033"/>
            ),
        }
    },
    Certificate: {
        screen: My,
        navigationOptions: {
            header:null,
            tabBarLabel:'我的',
            tabBarIcon: ({tintColor}) => (
                <NIcon name={"ios-people"} style={{backgroundColor: "rgba(0,0,0,0)"}}
                       size={20} color="#cc0033"/>
            ),
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      //  activeTintColor: '#008AC9', // 文字和图片选中颜色
      //  inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#000000', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});
const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    List:{screen:List},

});

export default SimpleApp;