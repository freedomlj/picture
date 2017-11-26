
import React,{Component} from "react";
import { Upload, Icon, message } from 'antd';
import {connect} from "react-redux";
import {getLhot,getdetail,setimg,userinfo,upimg} from "../../actions"
import {browserHistory,Router,Route, IndexRedirect} from "react-router"

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }


@connect(
    (state)=>({imgurl:state.imgurl,userinfo:state.userinfo})
)


export default class Logining extends Component{

    // state = {};
    
      handleChange = (info) => {
        const {dispatch} = this.props
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => 
            // this.setState({ imageUrl })
            {dispatch(upimg(localStorage.email,imageUrl));
            dispatch(setimg(imageUrl))}
        
        )}
      }

    back(){
        browserHistory.go(-1)
    }
    exit(){
        localStorage.email="";
        browserHistory.push("/my");
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(userinfo(localStorage.email));
    }
    componentWillReceiveProps(){
        console.log(this.props)
    }
    render() {
        // const imageUrl = this.state.imageUrl;
        // console.log(imageUrl)
        const {imgurl,userinfo} = this.props
        console.log(imgurl)
        console.log(userinfo)
        return (
            <div className="info">
                <div className="head">
                    <i className="iconfont icon-icon" onClick={this.back}></i>
                    <span>账号设置</span>
                </div>

                <div className="info_main">
                    <div className="tx">
                        <img src={userinfo.imgid} alt=""/>
                        {/* {
                        imgurl ?
                            <img src={imgurl} alt="" className="avatar" /> :
                            // <Icon type="plus" className="avatar-uploader-trigger" />
                            <img src={userinfo.imgid} alt=""/>
                        } */}
                        <div className="upload">
                            <Upload
                                className="avatar-uploader"
                                name="avatar"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                            上传头像
                            </Upload>
                        </div>
                    </div>

                    <h3>基本信息</h3>
                    <div className="name">
                        <span>昵称</span>
                        <p>{userinfo.name}</p>
                    </div>

                    <div className="sex">
                        <span>性别</span>
                        <p>男</p>
                    </div>

                    <div className="sign">
                        <span>签名</span>
                        <p>我是什么都没说的签名</p>
                        <i className="iconfont icon-arrow-right"></i>
                    </div>

                    <div className="exit" onClick={this.exit}>退出登录</div>

                    

                </div>

            </div>
        );
    }
}