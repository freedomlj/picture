console.log("react")


import React from "react";
import ReactDOM,{render} from "react-dom";

import "./utils/flexible"
import "./containers";  // 自动指向index.js
import "./utils/swiper-3.3.1.min"
import "../styles/index.scss";
import App from "./containers"

var app = document.getElementById("app");
import store from "./store"

import {Provider} from "react-redux"

var hotRender = ()=>{
    render(
       <Provider store={store}>
            <App/>
       </Provider>,
        app
    )
}
hotRender()

