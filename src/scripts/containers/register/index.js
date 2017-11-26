

import React,{Component} from "react";
import {Link} from "react-router";
import {Input,Button,Radio,message} from "antd"
import {connect} from "react-redux";
import {show_p,register} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import axios from "axios"
axios.defaults.baseURL="http://localhost:7100"


@connect(
    (state)=>({showPassword:state.showPassword})
)

export default class Picture extends Component{
    register=()=>{

        const {dispatch} = this.props;
        var istrue = true;
        var email = this.refs.email.refs.input.value;
        var name = this.refs.name.refs.input.value;
        var password = this.refs.password.refs.input.value;
        if(email.length==0){
            message.warning('邮箱不能为空',2);
            istrue = false;
        }
        else if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(email)){
            message.warning('邮箱格式错误',2);
            istrue = false;
        }
        else if(password.length<6 || password.length>16){
            message.warning('密码不能小于6位或大于16位',2);
            istrue = false;
        }
        else if(!/^[a-zA-Z\d_]{6,16}$/.test(password)){
            message.warning('密码只能由字母数字下划线组成',2);
            istrue = false;
        }
        if(istrue){
            //这里写验证成功后的ajax请求
            if(this.refs.man.checked==true||this.refs.woman.checked==true){
                
                // dispatch(register(email,name,password))
                axios.post("/register",{
                    params:{
                        email:email,
                        name:name,
                        password:password
                    }
                }).then(res=>{
                    if(res.data=="1"){        //注册成功
                        localStorage.email = email;
                        sessionStorage.email = email;
                        message.success('注册成功',1.5,function(){
                            browserHistory.push("/");
                        });
                    }else{
                        message.error('用户名已被注册',1.5);
                    }
                })
            }else{
                message.warning('请选择性别',1.5);
            }
        }
        
    }
    back(){
        browserHistory.go(-1)
    }
    showPassword=()=>{
        const {dispatch,showPassword} = this. props
        if(this.refs.password.refs.input.type=="password"){
            this.refs.password.refs.input.type="text";
            dispatch(show_p("隐藏密码"))
        }else{
            this.refs.password.refs.input.type="password"
            dispatch(show_p("显示密码"))
        }
    }
    render() {
        const {showPassword} = this. props
        console.log(showPassword)
        return (
            <div className="register">
                <div className="register_head">
                    <div className="back" onClick={this.back}>
                        <i className="iconfont icon-icon"></i>
                        <span>返回</span>
                    </div>
                    <span className="achieve" onClick={this.register}>完成</span>
                </div>

                <div className="register_box">
                    <div className="inp">
                        <Input placeholder="邮箱" ref="email"/>
                        <span></span>
                    </div>
                    <div className="inp">
                        <Input placeholder="昵称" ref="name"/>
                        <span></span>
                    </div>
                    <div className="inp">
                        <div className="password_box">
                            <Input placeholder="密码" type="password" className="password" ref="password"/>
                            <div className="show_password" onClick={this.showPassword} ref="showPassword">{showPassword}</div>
                        </div>
                        <span></span>
                    </div>

                    <div className="radio_btn">
                        <label className="demo--label">
                            <input className="demo--radio" type="radio" name="demo-radio" ref="man"/>
                            男<span className="demo--radioInput"></span>
                        </label>
                        <label className="demo--label">
                            <input className="demo--radio" type="radio" name="demo-radio" ref="woman"/>
                            女<span className="demo--radioInput"></span>
                        </label>
                    </div>
                </div>
                




            </div>
        );
    }


}