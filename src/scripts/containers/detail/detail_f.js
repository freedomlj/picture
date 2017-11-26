
import React, {Component} from "react";
import {Link} from "react-router";

import {connect} from "react-redux";

@connect(
    (state)=>({header:state.header})
)

export default class Foot extends Component{
    render() {
        const {header} = this.props
        return (
            <div className="detail_f">
                <i className="iconfont icon-fenxiang"></i>
                <span className="set_p">设为壁纸</span>
                <i className="iconfont icon-xiazai"></i>
            </div>
        );
    }
}