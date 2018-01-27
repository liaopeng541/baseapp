/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import { NavigationActions } from 'react-navigation'
import Base from "../components/BaseComponent"
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
class List extends Base {
    constructor(props) {
        super(props);
        this.state={
            aaa:this.params?this.params.aaa:"000"
        }
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text onPress={
                ()=>{
                    this.to("My")

            }}> List 333! </Text>
                <Text onPress={
                    ()=>{
                       // this.Back();
                        console.log(this.params);
                    }}> {this.state.aaa} </Text>

            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(List);
