/**
 * Created by liaopeng on 2018/1/25.
 */
import React,{Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";
import CryptoJS from "crypto-js"
import Page from "../components/Page"
import Base from "../components/BaseComponent"
import common from "../common/common"
class Home extends Component{
    constructor(props) {
        super(props);
        this.F=new common(this)
    }
    componentDidMount()
    {

    }
    render() {
        return (
            <View style={{height:50,backgroundColor:"#cc0033",marginTop:100}}>
                <Text onPress={()=>{this.F.to("My")}}>{this.F.getDeviceToken()}111</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Home);
