

import React,{Component} from "react";

import {connect} from "react-redux";
import {getdetail,dianzan,zanclass,lookzan,collect,lookcollect} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import Head from "./detail_h"
import Foot from "./detail_f"
import axios from "axios";
axios.defaults.baseURL="http://localhost:7100"


@connect(
    // (state)=>({...state})
    (state)=>({
        collection_flag:state.collection_flag,
        detail_list:state.detail_list,
        count:state.count,
        zanflag:state.zanflag,
        collectflag:state.collectflag
    })
)
export default class Recommend extends Component{
    componentWillMount(){
        const {detail_list,dispatch} = this.props
        dispatch(lookzan(localStorage.email,detail_list.id))
        dispatch(lookcollect(localStorage.email,detail_list.id))
    }
    good=(flag,id)=>{
        const {dispatch,zanflag} = this.props;
        if(zanflag!="zan"){
            dispatch(dianzan(flag,id))
            dispatch(zanclass("zan"))
            console.log(id)
            axios.get("/dianzan",{
                params:{
                    collection:flag,
                    id:id
                }
            }).then(res=>{
                console.log(res.data)
            })
    
            axios.post("/udianzan",{
                params:{
                    email:localStorage.email,
                    id:id
                }
            }).then(res=>{
                console.log(res.data)
            })
        }
    }

    collect(flag,id){
        const {dispatch,collectflag} = this.props;
        if(collectflag!="collected"){
            dispatch(collect("collected"))
            axios.post("/ucollect",{
                params:{
                    email:localStorage.email,
                    id:id
                }
            }).then(res=>{
                console.log(res.data)
            })
        }
            
        
    }

    render() {
        console.log("=============")
        console.log(this.props)
        const {params,detail_list,collection_flag,zanflag,collectflag} = this.props
        console.log(zanflag)
        return (
            <div className="detail">
                <Head/>
                <div className="detail_main">
                    <img src={detail_list.img} alt="" className="detail_img"/>
                    <ul className="detail_i">
                        <li onClick={()=>this.good(collection_flag,detail_list.id)}>
                            <i className={"iconfont icon-dianzan "+zanflag}></i>
                            <span className={zanflag}>{detail_list.favs}</span>
                        </li>

                        <li onClick={()=>this.collect(collection_flag,detail_list.id)}>
                            <i className={"iconfont icon-aixin "+collectflag}></i>
                            <span className={collectflag}>收藏</span>
                        </li>
                    </ul>
                </div>
                <Foot/>
            </div>
        );
    }
}