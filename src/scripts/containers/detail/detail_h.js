
import React, {Component} from "react";
import {Link} from "react-router";
import {browserHistory,Router,Route, IndexRedirect} from "react-router"

import {connect} from "react-redux";

@connect(
    (state)=>({header:state.header})
)

export default class Head extends Component{
    back(){
        browserHistory.go(-1)
    }
    render() {
        const {header} = this.props
        return (
            <div className="head">
                <i className="iconfont icon-icon" onClick={this.back}></i>
                <span>{header}</span>
            </div>
        );
    }
}