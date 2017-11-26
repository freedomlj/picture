

import React,{Component} from "react";

import {connect} from "react-redux";
import {getLclassify,setclass} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


@connect(
    (state)=>({Lclassify_list:state.Lclassify_list})
)

export default class Recommend extends Component{
    toclassDetail(id){
        const {dispatch} = this.props
        dispatch(setclass("l"))
        browserHistory.push("/classDetail/"+id)
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getLclassify("/Lclassify"))
    }
    render() {
        const {Lclassify_list} = this.props;
        return (
            <div className="Lclassify">
                <ul className="Lclassify_list">
                    {
                        Lclassify_list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>this.toclassDetail(item.name)}>
                                    <span>{item.name}</span>
                                    <div></div>
                                    <img src={item.cover} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}