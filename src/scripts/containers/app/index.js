
import React,{Component} from "react";
import {Link} from "react-router";
import Foot from "../../components/foot";

export default class App extends Component{
    render() {
        return (
            <div className="main">
                <div className="content">
                    {this.props.children}
                </div>
                <Foot/>
            </div>
        );
    }
}
