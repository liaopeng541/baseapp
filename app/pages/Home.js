/**
 * Created by liaopeng on 2018/1/25.
 */
import React from 'react';
import {Text,View,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";
import Page from "../components/Page"
import common from "../common/common"
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.F=new common(this)
        this.state={
            isloading: false,
            isRefreshing: false,
            v:"我的小小数据"
        }
    }
    componentDidMount()
    {
    }
    render() {
        return (
            <Page showLoading={this.state.isloading} style={{paddingTop:200}}>
                <Text onPress={this.F.to.bind(this,"My",{aa:"aaaa"})}>{this.state.v}</Text>
                <Text
                    onPress={this.F.showLoading.bind(this,this)}
                >还原222</Text>
            </Page>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Home);
