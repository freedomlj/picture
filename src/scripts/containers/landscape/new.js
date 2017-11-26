

import React,{Component} from "react";

import {connect} from "react-redux";
import {getLnew,getdetail,set_c_flag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


@connect(
    (state)=>({Lnew_list:state.Lnew_list})
)
export default class Recommend extends Component{
    todetail=(item)=>{
        const {dispatch} = this.props;
        dispatch(getdetail(item))
        dispatch(set_c_flag("Lnew"))  // 传递collection_flag
        browserHistory.push("/detail")
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getLnew("/Lnew"))
    }
    render() {
        console.log(this.props)
        const {Lnew_list} = this.props;
        return (
            <div className="Land">
                <ul className="Land_list">
                    {
                        Lnew_list.map((item,index)=>{
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