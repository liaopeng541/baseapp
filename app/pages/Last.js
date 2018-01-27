/**
 * Created by liaopeng on 2018/1/25.
 */
import React from 'react';
import {Text,View} from 'react-native';
import {connect} from "react-redux";
import common from "../common/common";
class Last extends React.Component {
    constructor(props) {
        super(props);
        this.F=new common(this)
    }
    render() {
        return (
            <View style={{backgroundColor:"#cccccc",flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text onPress={
                    ()=>{
                        this.F.backTop();
                      //  this.props.navigation.goBack("List");

                }}> Last0 ! </Text>
            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Last);
