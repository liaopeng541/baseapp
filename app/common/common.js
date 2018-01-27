/**
 * Created by liao on 17/4/27.
 */
import Toast from 'react-native-root-toast';
import CryptoJS from "crypto-js"
import Device from 'react-native-device-info';
export default common=(obj)=>{
    this.obj=obj;
    this.params=this.obj.props.navigation.state.params;//获取跳转参数
    this.key="liaopeng19850224";
    this.iv="liaopeng19850224";
    /**
     * 获取硬件唯一标识
     * @returns {string}
     */
    this.getDeviceToken=()=>{
        return Device.getUniqueID();
    }
    /**
     * 页面正常跳转
     * @param component
     * @param args
     */
    this.to=(component,args={})=>
    {
        this.obj.props.navigation.navigate(component,args)
    }
    /**
     * 底部弹出跳转
     * @param component
     * @param args
     */
    this.bottomTo=(component,args={})=>
    {
        this.obj.props.navigation.navigate(component,Object.assign({transition: 'forVertical'},args))

    }
    /**
     * 返回到首页
     */
    this.backTop=()=>
    {
        this.obj.props.navigation.goBack(this.obj.props.nav.routes[1].key)
    }
    /**
     * 返回到上几页
     * @param num
     */
    this.back=(num=1)=>
    {
        this.obj.props.navigation.goBack(this.obj.props.nav.routes[this.obj.props.nav.routes.length-num].key)
    }
    /**
     * 显示加载中
     */
    this.showLoading=(who)=>{
        who.setState({
            isloading: true,
        })
    }
    /**
     * 隐藏加载中
     */
    this.hideLoading=(who)=>{
        who.setState({
            isloading: false,
            isRefreshing: false,
        })
    }
    this.showToast=(message, time = 3000,position='center')=>{
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
    /**
     * 数据aes加密
     */
    this.encrypt=(data)=>
    {
        var _key  = CryptoJS.enc.Latin1.parse(this.key);
        var _iv   = CryptoJS.enc.Latin1.parse(this.iv);
        return CryptoJS.AES.encrypt(data,_key,{iv:_iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding}).toString();
    }
    /**
     * 数据aes解密
     * @param data
     * @returns {string}
     */
    this.decrypt=(data)=>{
        var _key  = CryptoJS.enc.Latin1.parse(this.key);
        var _iv   = CryptoJS.enc.Latin1.parse(this.iv);
        return CryptoJS.AES.decrypt(data,_key,{iv:_iv,padding:CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8);
    }


    return this;
};

