/**
 * Created by liaopeng on 2018/1/25.
 */
import React from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import common from "../common/common";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.F=new common(this)
        this.state={
            aaa:this.params?this.params.aaa:"000"
        }
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text onPress={
                ()=>{
                    this.F.to("My")

            }}> List 555! </Text>
                <Text onPress={
                    ()=>{
                    }}> {this.state.aaa} </Text>

            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(List);
