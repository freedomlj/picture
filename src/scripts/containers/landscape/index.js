

import React,{Component} from "react";
import {Link} from "react-router";
import Hot from "./hot";
import Classify from "./classify";
import New from "./new";
import Album from "./album";

import "../../utils/swiper-3.3.1.min";


export default class Picture extends Component{
    constructor(props){
        super(props)
        this.state = {
            swiperIndex:0
        }
    }

    static defaultProps={
        nav:[
            {path:"/",txt:"热门"},
            {path:"/",txt:"分类"},
            {path:"/",txt:"最新"},
            {path:"/",txt:"专辑"}
        ]
    }

    changeIndex=(idx)=>{
        // this.swiperIndex = idx;
        console.log(idx)
        this.mySwiper.slideTo(idx);
    }

    render() {
        const {nav} = this.props
        const {swiperIndex} = this.state
        return (
            <div className="picture">
                <div className="p_nav">
                    {
                        nav.map((item,index)=>{
                            return (
                                <div key={index} onClick={()=>this.changeIndex(index)} className={swiperIndex==index?"p_active":""}>
                                    {item.txt}
                                    <i></i>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="swiper-container " id="swipe">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide mt-2 slide1" >
                            <Hot/>
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <Classify/>
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <New/>
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <Album/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        const {swiperIndex} = this.state
        var that = this
        this.mySwiper = new Swiper("#swipe",{
            loop:false,
            autoplay: false,
            direction:"horizontal",
            pagination: '.swiper-pagination',
            resistanceRatio:0,
            calculateHeight:true,
            initialSlide:0,
            autoHeight:true,
            onSlideChangeEnd(swiper){
                console.log(swiper.activeIndex)
                console.log(swiperIndex)
                that.setState({
                    swiperIndex:swiper.activeIndex
                })
            }    
        });
    }

}