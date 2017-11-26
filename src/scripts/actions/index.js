

import axios from "axios";
// axios.defaults.baseURL="http://120.78.188.31:7100"
axios.defaults.baseURL="http://localhost:7100"

import store from "../store"

export function change_title(title){
    return {
        type:"change_title",
        title
    }
}

export function getLclassify(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getLclassify_s",json})
    })
}

export function getLhot(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getLhot_s",json})
    })
}

export function getLnew(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getLnew_s",json})
    })
}

export function getclassify(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getclassify_s",json})
    })
}

export function getnew(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getnew_s",json})
    })
}

export function getrecommend(url){
    return axios.get(url).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"getrecommend_s",json})
    })
}

export function getdetail(item){
    return {
        type:"getdetail_s",
        item
    }
}


export function gettag(url,id){
    console.log(id)
    return axios.get(url,{
        params:{
            id:id
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        console.log(json)
        return store.dispatch({type:"gettag_s",json})
    })
}


export function getclassDetail(url){
    return axios.get("/classDetail",{
        params:{
            collection:url
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        console.log(json)
        return store.dispatch({type:"getclassDetail_s",json})
    })
}

export function setclass(flag){
    console.log(flag)
    return {
        type:"setclass_s",
        flag
    }
}

export function set_c_flag(flag){
    console.log(flag)
    return {
        type:"set_c_flag_s",
        flag
    }
}

export function show_p(txt){
    return {
        type:"show_p_s",
        txt
    }
}

export function login(username,password){
    return axios.get("/login",{
        params:{
            username:username,
            password:password
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        console.log(json)
        return store.dispatch({type:"login_s",json})
    })
}

// export function setimg(email,img){
//     console.log(email)
//     console.log(img)
//     return axios.post("/imgid",{
//         params:{
//             email:email,
//             imgid:img
//         }
//     }).then(res=>{
//         return img
//     }).then(json=>{
//         return store.dispatch({type:"setimg_s",json})
//     })
// }

export function upimg(email,img){
    console.log(email)
    console.log(img)
    return axios.post("/imgid",{
        params:{
            email:email,
            imgid:img
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"up_s",json})
    })
}

export function setimg(img){
    return {
        type:"setimg_s",
        img
    }
}



export function userinfo(email){
    console.log(email)
    return axios.get("/userinfo",{
        params:{
            email:email,
        }
    }).then(res=>{
        return res.data[0]
    }).then(json=>{
        console.log(json)
        return store.dispatch({type:"userinfo_s",json})
    })
}

export function dianzan(flag,id){
    return {type:"dianzan_s",json:1}
}


export function zanclass(flag){
    return {
        type:"zanclass_s",
        flag
    }
}


export function collect(flag){
    return {
        type:"collect_s",
        flag
    }
}


export function lookzan(email,id){
    var x = false
    return axios.get("/udianzan",{
        params:{
            email:email
        }
    }).then(res=>{
        console.log(res.data)
        if(res.data.length>0){
            return res.data[0].zan
        }else{
            return [1,2]
        }
    }).then(json=>{
        console.log(json)
        json.forEach((item,index)=>{
            if(item.id==id){
                console.log("已点赞")
                x = true;
                // dispatch(zanclass("zan"))
                return store.dispatch({type:"lookzan_s",x})
            }
        })
        return store.dispatch({type:"lookzan_s",x})
    })
}

export function lookcollect(email,id){
    var x = false
    return axios.get("/udianzan",{
        params:{
            email:email
        }
    }).then(res=>{
        console.log(res.data)
        if(res.data.length>0){
            return res.data[0].collect
        }else{
            return [1,2]
        }
    }).then(json=>{
        console.log(json)
        json.forEach((item,index)=>{
            if(item.id==id){
                console.log("已关注")
                x = true;
                // dispatch(zanclass("zan"))
                return store.dispatch({type:"lookcollect_s",x})
            }
        })
        return store.dispatch({type:"lookcollect_s",x})
    })
}




// export function register(email,name,password){
//     return axios.post("/register",{
//         params:{
//             email:email,
//             name:name,
//             password:password
//         }
//     }).then(res=>{
//         return res.data
//     }).then(json=>{
//         console.log(json)
//         return store.dispatch({type:"register_s",json})
//     })
// }





