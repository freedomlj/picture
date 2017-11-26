

import React,{Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {show_p,userinfo} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import Mylogin from "./my_login"
import Logining from "./logining"

@connect(
    (state)=>({userinfo:state.userinfo})
)


export default class Picture extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(userinfo(localStorage.email));
    }
    render() {
        var item;
        if(localStorage.email){
            item =<Logining/>
        }else{
            item =<Mylogin/>
        }
        
        return (
            <div className="my">
                <div className="my_top">请选择以下账号登录</div>
                {item}
                <ul className="list">
                    <li className="download">
                        <b></b>
                        <span>我的下载</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                    <li>
                        <b></b>
                        <span>壁纸设置</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                    <li>
                        <b></b>
                        <span>视频壁纸设置</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                    <li>
                        <b></b>
                        <span>其他设置</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                    <li>
                        <b></b>
                        <span>反馈</span>
                        <i className="iconfont icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
        );
    }


}