
import React, {Component} from "react";
import {Link} from "react-router";

import {connect} from "react-redux";

@connect(
    (state)=>({footList:state.footList})
)

export default class Foot extends Component{

    render() {
        const {footList} = this.props
        return (
            <div className="foot">
                {
                    footList.map((item,index)=>{
                        return (
                            <Link to={item.path} key={index} activeClassName="footactive" onlyActiveOnIndex={true}>
                                <i className={"iconfont "+item.icon}></i>
                                <span>{item.txt}</span>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}