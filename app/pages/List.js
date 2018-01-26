/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import { NavigationActions } from 'react-navigation'
import Base from "../components/BaseComponent"
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'})
    ]
})
class List extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text onPress={
                ()=>{
                    this.To("My")

            }}> List 222! </Text>
                <Text onPress={
                    ()=>{
                        this.Back();

                    }}> List 222! </Text>

            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(List);
