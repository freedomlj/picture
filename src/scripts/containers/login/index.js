

import React,{Component} from "react";
import {Link} from "react-router";
import {Input,Button,message} from "antd"
import {connect} from "react-redux";
import {login} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import axios from "axios"
axios.defaults.baseURL="http://localhost:7100"


@connect(
    (state)=>({showPassword:state.showPassword})
)

export default class Picture extends Component{
    back(){
        browserHistory.go(-1)
    }
    toregister(){
        browserHistory.push("/register")
    }
    login=()=>{
        const {dispatch} = this.props;
        var email = this.refs.email.refs.input.value;
        var password = this.refs.password.refs.input.value;
        console.log(email,password)
        // dispatch(login(email,password))
        axios.get("/login",{
            params:{
                email:email,
                password:password
            }
        }).then(res=>{
            // console.log(res.data)
            if(res.data.length>0){
                localStorage.email = res.data[0].email;
                sessionStorage.email = res.data[0].email;

                message.success('登录成功',1,function(){
                    browserHistory.push("/");
                });
                                
                
            }else{
                message.success('用户名或密码错误',1.5);
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="login_head">
                    <div className="back" onClick={this.back}>
                        <i className="iconfont icon-icon"></i>
                        <span>返回</span>
                    </div>
                    <span>登录</span>
                    <span className="register_btn" onClick={this.toregister}>注册</span>
                </div>

                <div className="login_main">
                    <div className="username">
                        <i className="iconfont icon-youxiang"></i>
                        <Input placeholder="输入邮箱账号" name="email" ref="email"/>
                    </div>
                    
                    <div className="password">
                        <i className="iconfont icon-yaochi"></i>
                        <Input placeholder="输入密码" type="password" name="password" ref="password"/>
                    </div>

                    <Button type="primary" className="login_btn" onClick={this.login}>登录</Button>

                    <p className="forget">忘记密码</p>

                    <p className="login_more">
                        <i></i>
                        <span>你还可以选择第三方登录</span>
                        <i></i>
                    </p>

                    <div className="more_box">
                        <span className="qq"></span>
                        <span className="sina"></span>
                        <span className="wx"></span>
                    </div>
                </div>



            </div>
        );
    }


}