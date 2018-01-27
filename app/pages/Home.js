/**
 * Created by liaopeng on 2018/1/25.
 */
import React from 'react';
import {Text, View, ScrollView,InteractionManager} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from "react-redux";
import Page from "../components/Page"
import common from "../common/common"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.F = new common(this)
        this.state = {
            isloading: false,
            isRefreshing: false,
            v: "我的小小数据",
            title:"",
            en:true,


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
    componentDidMount() {
        this.on=false;
        setTimeout(()=>{
            this.r.scrollTo({x: 0, y: 150, animated: false})
        },0)
    }

    onScroll(e) {
        this.y=e.nativeEvent.contentOffset.y;
        if(!this.on && this.y>=150)
        {
            this.sback=false;
        }
        if(!this.on && this.y<=150 && !this.sback)
        {
            this.r.scrollTo({x: 0, y: 150, animated: true})
            this.sback=true;
        }
        if(this.on && this.y<=130)
        {
            this.setState({
                title:"下拉可以刷新"
            })
        }
        if(this.on && this.y<=75)
        {
            this.setState({
                title:"可以了，松手吧"
            })
        }
        if(this.on && this.y<=10)
        {
            this.setState({
                title:"哥，松手吧，真拉不动了"
            })

        }
    }
    onTouchStart()
    {
        this.on=true;
    }
    onend()
    {
        this.on=false;
        if(this.y<=75)
        {
            this.r.scrollTo({x: 0, y: 75, animated: true})
            this.setState({title:"正在刷新中"})
            if(!this.time){
                this.time = setTimeout(()=>{
                    if(!this.on){this.r.scrollTo({x: 0, y: 150, animated: true})}
                    this.setState({title:""})
                    this.time=null;
                },3000)
            }


        }else if(this.y<=150){
            this.r.scrollTo({x: 0, y: 150, animated: true})
        }
    }

    render() {
        return (
            <Page showLoading={this.state.isloading}>
                <ScrollView
                    ref={(r)=>{this.r=r}}
                    onScroll={this.onScroll.bind(this)}
                    onTouchStart={this.onTouchStart.bind(this)}
                    onScrollEndDrag={this.onend.bind(this)}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                  //  scrollEnabled={this.state.en}
                    bounces={false}

                >
                    <View style={{
                    height: 150,
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}>
                      <View>
                    <Text>{this.state.title}</Text>
                     </View>
                </View>

                    {this.rendrow()}

                </ScrollView>
            </Page>
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.navReducer
});
export default connect(mapStateToProps)(Home);
