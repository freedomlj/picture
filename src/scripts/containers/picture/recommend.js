

import React,{Component} from "react";

import {connect} from "react-redux";
import {getrecommend,getdetail,set_c_flag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"

@connect(
    (state)=>({tag:state.tag,hot_list:state.hot_list})
)
export default class Recommend extends Component{
    totag=(id)=>{
        browserHistory.push("/tag/"+id)
    }
    todetail=(item)=>{
        const {dispatch} = this.props;
        dispatch(getdetail(item))
        dispatch(set_c_flag("recommend"))  // 传递collection_flag
        browserHistory.push("/detail")
    }
    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getrecommend("/recommend"))
    }
    render() {
        console.log(this.props)
        const {tag,hot_list} = this.props;
        return (
            <div className="recommend">
                <ul className="tag">
                    {
                        tag.map((item,index)=>{
                            return (
                                <li key={index}><img src={item.thumb} alt="" onClick={()=>this.totag(item.value.id)}/></li>
                            )
                        })
                    }
                </ul>

                <div className="hot">
                    <h2><i></i>热门</h2>
                    <ul className="hot_list">
                        {
                            hot_list.map((item,index)=>{
                                return (
                                    <li key={index}><img src={item.thumb} alt="" onClick={()=>this.todetail(item)}/></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}