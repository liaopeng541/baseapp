/**
 * Created by liaopeng on 2018/1/25.
 */
import React from 'react';
import {Text,View,ScrollView} from 'react-native';
import {connect} from "react-redux";
import common from "../common/common";
import {
    SwRefreshScrollView, //支持下拉刷新的ScrollView
    SwRefreshListView, //支持下拉刷新和上拉加载的ListView
    RefreshStatus, //刷新状态 用于自定义下拉刷新视图时使用
    LoadMoreStatus //上拉加载状态 用于自定义上拉加载视图时使用
} from 'react-native-swRefresh'
class List extends React.Component {
    constructor(props) {
        super(props);
        this.F=new common(this)
        this.state={
            aaa:this.params?this.params.aaa:"000"
        }
    }
    rendrow()
    {
        var content=[];
        for(var i=1;i<50;i++)
        {
            content.push(
                <View key={i} style={{
                    height: 80,
                    borderWidth: 1,
                    borderColor: "#999999",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>{i}{i}{i}{i}</Text>
                </View>)
        }
        return content
    }
    render() {
        return (
                <SwRefreshScrollView
                    //bounces={false}
                    customRefreshView={(refresStatus,offsetY)=>{
                        console.log(offsetY)
                        return (
                            <View style={{height:100,alignItems:"center",justifyContent:"flex-end"}}>
                                <Text>{'状态:'+refresStatus+','+offsetY}</Text>
                            </View>)
                    }} //自定义下拉刷新视图参数，refresStatus是上面引入的RefreshStatus类型，对应刷新状态各个状态。offsetY对应下拉的偏移量,可用于定制动画。自定义视图必须通过customRefreshViewHeight指定高度

                    customRefreshViewHeight={100} //自定义刷新视图时必须指定高度
                >

                    {this.rendrow()}

                </SwRefreshScrollView>


        );
    }

}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(List);
