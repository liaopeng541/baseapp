import React, {Component} from 'react';
import {
    BackHandler,
    ToastAndroid
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import List from '../pages/List'
import HomeTab from "./HomeTab";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {addNavigationHelpers,NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation';
import My from "../pages/My";
import Last from "../pages/Last";
export const Routers = StackNavigator({
    Home: {screen: HomeTab},
    List:{screen:List},
    My:{screen:My},
    Last:{screen:Last},
},{
    navigationOptions:{header:null},
    initialRouteName: 'Home',
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
});
class RouterApp extends Component {
    constructor(props) {
        super(props)
        this.onBackAndroid=this._onBackAndroid.bind(this)
    }
    componentDidMount()
    {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        Orientation.lockToPortrait();//锁定坚屏
        SplashScreen.hide();
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this.onBackAndroid);
    }
    _onBackAndroid (){
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            return false;
        }
        const { dispatch, nav } = this.props;
        if (nav.index != 0) {
            dispatch(NavigationActions.back());
            return true;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };
    render() {
        return (
            <Routers navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export const App = connect(mapStateToProps)(RouterApp);
