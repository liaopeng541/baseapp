/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Icon name={"ios-people"} style={{backgroundColor: "rgba(0,0,0,0)"}}
                       size={20} color="#cc0033"/>
            <Text onPress={()=>{
                this.props.navigation.navigate('List', {goods_id: 'i am the param'});
            }}> Home333 ! </Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Home);