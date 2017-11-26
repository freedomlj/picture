

import React,{Component} from "react";

import {connect} from "react-redux";
import {getnew,getdetail,set_c_flag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"

@connect(
    (state)=>({new_list:state.new_list})
)
export default class Recommend extends Component{
    todetail=(item)=>{
        const {dispatch} = this.props;
        dispatch(getdetail(item))
        dispatch(set_c_flag("new"))  // 传递collection_flag
        browserHistory.push("/detail")
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getnew("/new"))
    }
    render() {
        const {new_list} = this.props;
        return (
            <div className="new">
                <ul className="new_list">
                    {
                        new_list.map((item,index)=>{
                            return (
                                <li key={index}><img src={item.thumb} alt="" onClick={()=>this.todetail(item)}/></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}