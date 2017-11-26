

import React,{Component} from "react";

export default class Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {
            classify_list:[]
        }
    }

    // componentWillMount(){
    //     axios.get("/classify").then(res=>{
    //         this.setState({
    //             classify_list:res.data.res.category
    //         })
    //     })
    // }
    render() {
        const {classify_list} = this.state;
        return (
            <div className="classify">
                <h1>专辑</h1>
                {/* <ul className="classify_list">
                    {
                        classify_list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <img src={item.cover} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul> */}
            </div>
        );
    }
}