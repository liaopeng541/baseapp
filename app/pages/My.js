/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import { NavigationActions } from 'react-navigation'
import Base from "../components/BaseComponent"
class My extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text onPress={
                    ()=>{
                        this.to("Last")

                    }}> my 222! </Text>
                <Text onPress={
                    ()=>{
                        this.back(2);

                    }}> my 222! </Text>

            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(My);
