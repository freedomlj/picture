



var initState = {
    count:0,
    footList:[
        {path:"/picture",txt:"壁纸",icon:"icon-icon_home"},
        {path:"/landscape",txt:"横屏",icon:"icon-plus-pic"},
        // {path:"/music",txt:"铃声",icon:""},
        {path:"/my",txt:"我的",icon:"icon-tubiaozhizuomoban-"}
    ],
    header:"壁纸",
    Lclassify_list:[],
    Lhot_list:[],
    Lnew_list:[],
    classify_list:[],
    new_list:[],
    hot_list:[],
    tag:[],
    detail_list:[],
    tag_list:[],
    cd_list:[],
    class_flag:"",
    collection_flag:"",
    showPassword:"显示密码",
    username:"",
    password:"",
    register_flag:0,
    imgurl:"",
    x:"",  //  接收图片返回值 
    userinfo:{},
    zanflag:"",
    collectflag:""

}


export default (state=initState,action)=>{
    switch(action.type){

        case "getLclassify_s":
        state.Lclassify_list = action.json.res.category;
        return Object.assign({},state);
        break;
        
        case "getLhot_s":
        state.Lhot_list = action.json.res.wallpaper;
        return Object.assign({},state);
        break;
        
        case "getLnew_s":
        state.Lnew_list = action.json.res.wallpaper;
        return Object.assign({},state);
        break;
        
        case "getclassify_s":
        state.classify_list = action.json.res.category;
        return Object.assign({},state);
        break;
        
        case "getnew_s":
        state.new_list = action.json.res.vertical;
        return Object.assign({},state);
        break;
        
        case "getrecommend_s":
        state.hot_list = action.json.res.vertical;
        state.tag = action.json.res.homepage[0].items;
        return Object.assign({},state);
        break;
        
        case "getdetail_s":
        state.detail_list = action.item;
        return Object.assign({},state);
        break;
        
        case "gettag_s":
        state.tag_list = action.json[0].res;
        return Object.assign({},state);
        break;
        
        case "getclassDetail_s":
        if(state.class_flag=="p"){
            state.cd_list = action.json.res.vertical;
        }else{
            state.cd_list = action.json.res.wallpaper;
        }
        return Object.assign({},state);
        break;

        case "setclass_s":
        state.class_flag = action.flag;
        return Object.assign({},state);
        break;
        
        case "set_c_flag_s":
        state.collection_flag = action.flag;
        return Object.assign({},state);
        break;
        
        case "show_p_s":
        state.showPassword = action.txt
        return Object.assign({},state);
        break;

        case "login_s":
        if(action.json.length>0){
            state.username = action.json[0].username;
            state.password = action.json[0].password;
        }
        console.log(state.username,state.password)
        return Object.assign({},state);
        break;

        case "register_s":
        state.register_flag = action.json
        return Object.assign({},state);
        break;
        
        case "up_s":
        state.x = action.json
        return Object.assign({},state);
        break;
        
        case "setimg_s":
        console.log(action.img)
        state.userinfo.imgid=action.img
        state.imgurl = action.img
        return Object.assign({},state);
        break;
        
        case "userinfo_s":
        state.userinfo = action.json
        return Object.assign({},state);
        break;
        
        case "dianzan_s":        
        for(var i in state.detail_list){
            if(i=="favs"){
                console.log(i)
                console.log(state.detail_list[i])
                state.detail_list[i]++;
            }
        }
        state.count++;
        console.log(state.detail_list);
        console.log
        return Object.assign({},state);
        break;

        
        case "zanclass_s":
        state.zanflag = action.flag
        return Object.assign({},state);
        break;
        
        case "lookzan_s":
        if(action.x){
            state.zanflag = "zan"
        }else{
            state.zanflag = "no_zan"
        }
        return Object.assign({},state);
        break;
        
        case "collect_s":
        state.collectflag = action.flag
        return Object.assign({},state);
        break;
        
        case "lookcollect_s":
        if(action.x){
            state.collectflag = "collected"
        }else{
            state.collectflag = "no_collected"
        }
        return Object.assign({},state);
        break;
        


        default:
        return Object.assign({},state);
        break;
    }
}