/**
 * Created by liao on 2017/5/13.
 */
import {Component} from 'react'
import {Platform,AsyncStorage,DeviceEventEmitter} from 'react-native'
import {getDeviceToken} from '../common/common'
import Toast from 'react-native-root-toast';
import set from "../config/config";
import request from "../lib/request";
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo:null,
            isloading: false,
        }
    }
    To(component,Login=null,args={},float='right')
    {
        if(Login && !this.props.data.userinfo)
        {
            component=Login;
            float = "bottom"
        }
        this.props.navigator.push({
            component:component,
            float:float,
            args:args,
        })
    }
    
    Back() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    }
    BackTop()
    {
        this.props.navigator.popToTop();
    }
    bottomTo(component,args=null)
    {
        this.props.navigator.push({
            component:component,
            float:"bottom",
            args:args
        })
    }

    async getTokens()
    {
        await AsyncStorage.getItem("token").then((data) => {
            this.token=null;
            if(data)
            {
                this.token = data
            }
        })
        this.device_token = getDeviceToken();
    }



    /**
     * 加载中
     */
    showLoading() {
        this.setState({
            isloading: true,
        })
    }
    /**
     * 加载完成
     */
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