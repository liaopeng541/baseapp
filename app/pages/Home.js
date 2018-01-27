/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";
import CryptoJS from "crypto-js"
import Page from "../components/Page"
import Base from "../components/BaseComponent"
class Home extends Base {
    constructor(props) {
        super(props);
        this.state={
            aaa:"1",
            bbb:"1"
        }
    }
    componentDidMount()
    {
        /*
        var ciphertext = CryptoJS.AES.encrypt('廖鹏', 'liaopeng');
        var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'liaopeng');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        console.log(ciphertext.toString())
        this.setState({
            bbb:plaintext
        })
        */
        var data = "KojsB9r5IvZFT+aSKUinRQ==";
        var key  = CryptoJS.enc.Latin1.parse('liaopeng19850224');
        var iv   = CryptoJS.enc.Latin1.parse('liaopeng19850224');
        var encrypted = CryptoJS.AES.encrypt(data,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding}).toString();
       // console.log(encrypted);
        var decrypted = CryptoJS.AES.decrypt(data,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8);
        this.setState({
            aaa:encrypted,
            bbb:decrypted
        })
        this.showLoading();
        setTimeout(this.hideLoading.bind(this),3000);
    }
    render() {
        return (
            <Page showLoading={this.state.isloading}>
                <Icon name={"ios-people"} style={{backgroundColor: "rgba(0,0,0,0)"}}
                       size={20} color="#cc0033"/>
            <Text onPress={()=>{
                this.bottomTo('List', {aaa: 'bbb'});
            }}> {this.state.aaa} </Text>
                <Text onPress={()=>{
                    // this.props.navigation.navigate('List', {goods_id: 'i am the param'});
                }}> {this.state.bbb} </Text>
            </Page>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Home);