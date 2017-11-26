

import React,{Component} from "react";
import {Link} from "react-router";
import Recommend from "./recommend";
import New from "./new";
import Classify from "./classify";

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
            {path:"/recommend",txt:"推荐"},
            {path:"/new",txt:"最新"},
            {path:"/classify",txt:"分类"}
        ]
    }

    changeIndex=(idx)=>{
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
                            <Recommend/>
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <New/>
                        </div>
                        <div className="swiper-slide mt-2 slide1">
                            <Classify/>
                        </div>
                    </div>

                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </div>
        );
    }
    componentDidMount(){
        const {swiperIndex} = this.state
        var nav = [
            {path:"/recommend",txt:"推荐"},
            {path:"/new",txt:"最新"},
            {path:"/classify",txt:"分类"}
        ]
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
            // paginationClickable: true,
            // paginationBulletRender: function (swiper, index, className) {
            //     var str="";
            //     nav.forEach((item,idx)=>{
            //         console.log(idx)
            //         str+='<span>' + (item.txt) + '</span>'
            //     })
                // return '<span>' + (index + 1) + '</span>';
                // return str;
                
            // },
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