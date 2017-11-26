

import React,{Component} from "react";

import {connect} from "react-redux";
import {gettag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"

@connect(
    (state)=>({tag_list:state.tag_list})
)
export default class Recommend extends Component{
    
    back(){
        browserHistory.go(-1)
    }
    componentWillMount(){
        const {dispatch,params} = this.props
        console.log(this.props)
        dispatch(gettag("/tag",params.id))
    }
    render() {
        console.log(this.props)
        const {tag_list} = this.props
        console.log(tag_list)
        if(tag_list.album){
            var tagimg = tag_list.album.lcover
            var name = tag_list.album.name
            var desc = tag_list.album.desc
            var list = tag_list.wallpaper
            var tagList = list.map((item,index)=>{
                return (
                    <li key={index}><img src={item.thumb} alt=""/></li>
                )
            })
        }
        console.log(list)
        return (
            <div className="tag">
                <div className="tag_head">
                    <i className="iconfont icon-icon" onClick={this.back}></i>
                    <i className="iconfont icon-fenxiang"></i>
                </div>

                <div className="tag_main">
                    <div className="tag_img">
                        <img src={tagimg} alt=""/>
                        <span>{name}</span>
                    </div>
                    <div className="desc">
                        <p>{desc}</p>
                    </div>
                    <ul className="tag_i">
                        {tagList}
                    </ul>
                </div>
            </div>
        );
    }
}