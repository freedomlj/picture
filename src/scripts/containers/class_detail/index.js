

import React,{Component} from "react";

import {connect} from "react-redux";
import {getclassDetail,getdetail,set_c_flag} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import Head from "./class_detail_h"
import async from "async";


@connect(
    (state)=>({cd_header:state.cd_header,cd_list:state.cd_list,class_flag:state.class_flag})
)
export default class Recommend extends Component{
    todetail=(item)=>{
        const {dispatch} = this.props;
        dispatch(getdetail(item))
        
        browserHistory.push("/detail")
    }
    componentWillMount(){
        const {dispatch,params,class_flag} = this.props
        console.log(params.id)
        console.log(class_flag)
        if(class_flag=="p"){
            async.waterfall([
                function(callback){
                    var name = ""
                    switch(params.id){
                        case "动物":
                        name="Panimal";
                        break;
    
                        case "动漫":
                        name="Panime";
                        break;
    
                        case "艺术":
                        name="Part";
                        break;
    
                        case "卡通":
                        name="Pcartoon";
                        break;
    
                        case "城市":
                        name="Pcity";
                        break;
    
                        case "设计":
                        name="Pdesign";
                        break;
    
                        case "情感":
                        name="Pfeel";
                        break;
    
                        case "游戏":
                        name="Pgame";
                        break;
    
                        case "美女":
                        name="Pgirl";
                        break;
    
                        case "机械":
                        name="Pmachine";
                        break;
    
                        case "男人":
                        name="Pman";
                        break;
    
                        case "影视":
                        name="Pmovie";
                        break;
    
                        case "风景":
                        name="Pscenery";
                        break;
    
                        case "运动":
                        name="Psport";
                        break;
    
                        case "明星":
                        name="Pstart";
                        break;
    
                        case "物语":
                        name="Pstory";
                        break;
    
                        case "视觉":
                        name="Pvision";
                        break;
    
                        case "文字":
                        name="Pword";
                        break;
    
                        default:
                        name="Panime"
                        break;
                    }
                    callback(null,name)
                }
            ],function(err,result){
                console.log(result)
                dispatch(getclassDetail(result))
                dispatch(set_c_flag(result))  // 传递collection_flag
            })
        }else{
            async.waterfall([
                function(callback){
                    var name = ""
                    switch(params.id){
                        case "动物":
                        name="Lanimal";
                        break;
    
                        case "动漫":
                        name="Lanime";
                        break;
    
                        case "艺术":
                        name="Lart";
                        break;
    
                        case "卡通":
                        name="Lcartoon";
                        break;
    
                        case "城市":
                        name="Lcity";
                        break;
    
                        case "设计":
                        name="Ldesign";
                        break;
    
                        case "情感":
                        name="Lfeel";
                        break;
    
                        case "游戏":
                        name="Lgame";
                        break;
    
                        case "美女":
                        name="Lgirl";
                        break;
    
                        case "机械":
                        name="Lmachine";
                        break;
    
                        case "男人":
                        name="Lman";
                        break;
    
                        case "影视":
                        name="Lmovie";
                        break;
    
                        case "风景":
                        name="Lscenery";
                        break;
    
                        case "运动":
                        name="Lsport";
                        break;
    
                        case "明星":
                        name="Lstart";
                        break;
    
                        case "物语":
                        name="Lstory";
                        break;
    
                        case "视觉":
                        name="Lvision";
                        break;
    
                        case "文字":
                        name="Lword";
                        break;
    
                        default:
                        name="Lanime"
                        break;
                    }
                    callback(null,name)
                }
            ],function(err,result){
                console.log(result)
                dispatch(getclassDetail(result))
                dispatch(set_c_flag(result))  // 传递collection_flag
            })
        }
        
    }
    render() {
        console.log(this.props)
        const {params,cd_list,class_flag} = this.props
        var cName = "";
        if(class_flag=="p"){
            cName = "p_c_detail"
        }else{
            cName = "l_c_detail"
        }
        return (
            <div className={cName}>
                <Head title={params.id}/>
                <ul className="c_detail_i">
                    {
                        cd_list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>this.todetail(item)}><img src={item.img} alt=""/></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}