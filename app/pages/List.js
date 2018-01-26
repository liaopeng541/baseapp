/**
 * Created by liaopeng on 2018/1/25.
 */
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import { NavigationActions } from 'react-navigation'
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home'})
    ]
})




class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text onPress={()=>{this.props.dispatch(resetAction)

            }}> List ! </Text>
                <Text onPress={()=>{
                    var key = "";
                    this.props.nav.routes.map((item,i)=>{
                        if(item.routeName=="Home")
                        {
                            key=item.key;
                        }
                    })
                    console.log(key)
                    this.props.navigation.goBack(key);
                    this.props.navigation.goBack("Home");
                    console.log(this.props.nav.routes)
                 //   this.props.navigation.dispatch(backAction)
                }}> {this.props.navigation.state.params && this.props.navigation.state.params.goods_id} </Text>
            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(List);
