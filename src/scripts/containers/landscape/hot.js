

import React,{Component} from "react";

import {connect} from "react-redux";
import {getLhot,getdetail,set_c_flag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


@connect(
    (state)=>({Lhot_list:state.Lhot_list})
)

export default class Recommend extends Component{
    todetail=(item)=>{
        const {dispatch} = this.props;
        dispatch(getdetail(item))
        dispatch(set_c_flag("Lhot"))  // 传递collection_flag
        browserHistory.push("/detail")
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getLhot("/Lhot"))
    }
    render() {
        const {Lhot_list} = this.props;
        return (
            <div className="Lhot">
                <ul className="Lhot_list">
                    {
                        Lhot_list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>this.todetail(item)}>
                                    <img src={item.thumb} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}