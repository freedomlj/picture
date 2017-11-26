
import React,{Component} from "react";
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


export default class Logining extends Component{
    tologin(){
        browserHistory.push("/login")
    }
    render() {
        return (
            <ul className="my_login">
                <li onClick={this.tologin}>
                    <i></i>
                    <span>账号登录</span>
                </li>    
                <li>
                    <i></i>
                    <span>QQ登录</span>
                </li>
                <li>
                    <i></i>
                    <span>微博登录</span>
                </li>
                <li>
                    <i></i>
                    <span>微信登录</span>
                </li>
            </ul>
        );
    }
}