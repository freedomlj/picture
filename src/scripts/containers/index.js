



import React, {Component} from "react"
import {render} from "react-dom"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"


import App from "./app"
import Picture from "./picture"
import Landscape from "./landscape"
import My from "./my"
import Detail from "./detail"
import Tag from "./tag"
import ClassDetail from "./class_detail"
import Login from "./login"
import Register from "./register"
import Info from "./info"

export default class Layout extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/picture"/>
                    <Route path="picture" component={Picture}/>
                    <Route path="landscape" component={Landscape}/>
                    <Route path="my" component={My}/>
                </Route>

                <Route path="/tag/(:id)" component={Tag}/>
                <Route path="/detail" component={Detail} />
                <Route path="/classDetail/(:id)" component={ClassDetail}/>
                
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/info" component={Info}/>
            </Router>
        )
    }
}