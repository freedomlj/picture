
import React,{Component} from "react";
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import {connect} from "react-redux";
import {userinfo} from "../../actions"

@connect(
    (state)=>({userinfo:state.userinfo})
)

export default class Logining extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(userinfo(localStorage.email));
    }
    toinfo(){
        browserHistory.push("/info")
    }
    render() {
        const {userinfo} = this.props;
        console.log(userinfo)
        
        if(userinfo){
            var imgid = userinfo.imgid
            var username = userinfo.name
        }
        return (
            <dl className="logining" onClick={this.toinfo}>
                <dt>
                    <img src={imgid} alt=""/>
                </dt>
                <dd>
                    <h2>
                        <span className="my_name">{username}</span>
                        <span className="user_set">账号设置</span>
                    </h2>
                    <p className="my_sign">
                        <span className="sign">签名:</span>
                        <span>我是什么都没说的签名</span>
                    </p>
                </dd>
            </dl>
        );
    }
}