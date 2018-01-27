/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import Loading from "./Loading"
var PropTypes = require('prop-types');
export default  Page = React.createClass({
    propTypes:{
        showLoading:PropTypes.bool
    },
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

})
