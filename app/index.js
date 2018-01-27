/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import App from './components/RootNavigator';
import {Provider} from "react-redux";
import store from "./redux/configureStore"
class Index extends Component {
    render() {
        return (
                <Provider store={store}>
                    <App />
                </Provider>
        );
    }
}
AppRegistry.registerComponent('rnbase', () => Index);
