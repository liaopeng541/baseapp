/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StatusBar,
} from 'react-native';
import {App} from './components/RootNavigator';
import {Provider} from "react-redux";
import store from "./redux/configureStore"
class Index extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0)"
                    translucent={true}
                />
                <Provider store={store}>
                    <App />
                </Provider>
            </View>
        );
    }
}
AppRegistry.registerComponent('rnbase', () => Index);
