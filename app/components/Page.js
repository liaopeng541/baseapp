/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import Loading from "./Loading"
export default class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[{flex:1},this.props.style]}>
                {this.props.children}
                {this.props.showLoading &&
                <Loading/>
                }
            </View>
        );
    }

}
