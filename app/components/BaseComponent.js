/**
 * Created by liao on 2017/5/13.
 */
import {Component} from 'react'
import Toast from 'react-native-root-toast';
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.params=this.props.navigation.state.params
        this.state = {
            isloading: false,
        }
    }
    to(component,args={})
    {
        this.props.navigation.navigate(component,args)
    }
    back(num=1) {
        this.props.navigation.goBack(this.props.nav.routes[this.props.nav.routes.length-num].key)
    }
    backTop()
    {
        this.props.navigation.goBack(this.props.nav.routes[1].key)
    }
    bottomTo(component,args={})
    {
        this.props.navigation.navigate(component,Object.assign({transition: 'forVertical'},args))

    }
    async getTokens()
    {

    }
    showLoading(){
        this.setState({
            isloading: true,
        })
    }
    hideLoading() {
        this.setState({
            isloading: false,
            isRefreshing: false,
        })
    }
    showToast(message, time = 3000,position='center') {
        var toastPosition=Toast.positions.CENTER;
        switch (position)
        {
            case 'top':toastPosition = Toast.positions.TOP;break;
            case 'bottom':toastPosition = Toast.positions.BOTTOM;break;
        }
        this.toast&&Toast.hide(this.toast);
        this.toast = Toast.show(message, {
            duration: time,
            position: toastPosition,
            shadow: true,
            animation: true,
            hideOnPress: false,
            delay: 0,
        });

        this.hideLoading();
    }


}