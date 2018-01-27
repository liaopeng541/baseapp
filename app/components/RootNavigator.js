import React, {Component} from 'react';
import {
    BackHandler,
    ToastAndroid,
    View,
    StatusBar
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import List from '../pages/List'
import HomeTab from "./HomeTab";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation';
import My from "../pages/My";
import Last from "../pages/Last";
const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const {scene} = sceneProps;
        const {route} = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return CardStackStyleInterpolator[transition](sceneProps);
    },
});
export const Routers = StackNavigator({
    Home: {screen: HomeTab},
    List: {screen: List},
    My: {screen: My},
    Last: {screen: Last},
}, {
    navigationOptions: {header: null},
    initialRouteName: 'Home',
    transitionConfig: TransitionConfiguration,
});
class App extends Component {
    constructor(props) {
        super(props)
        this.onBackAndroid = this._onBackAndroid.bind(this)
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        Orientation.lockToPortrait();//锁定坚屏
        SplashScreen.hide();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
    _onBackAndroid() {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            return false;
        }
        const {dispatch, nav} = this.props;
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
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true}/>
                <Routers navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })}/>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(App);
