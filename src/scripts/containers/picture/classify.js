

import React,{Component} from "react";

import {connect} from "react-redux";
import {getclassify,setclass} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


@connect(
    (state)=>({classify_list:state.classify_list})
)
export default class Recommend extends Component{
    toclassDetail(id){
        const {dispatch} = this.props
        dispatch(setclass("p"))
        browserHistory.push("/classDetail/"+id)
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getclassify("/classify"))
    }
    render() {
        const {classify_list} = this.props;
        return (
            <div className="classify">
                <ul className="classify_list">
                    {
                        classify_list.map((item,index)=>{
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