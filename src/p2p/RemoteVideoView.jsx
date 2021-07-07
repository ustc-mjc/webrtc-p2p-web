import React, { Component } from 'react'
import PropTypes from "prop-types";
import '../styles/css/remoteVideoView.scss';
/**
 * 远端视频组件
 */
export default class RemoteVideoView extends Component {
    constructor(props) {
        super(props);
        this.id = React.createRef();
    }
    //组件加载完成
    componentDidMount = () => {
        //获取到视频对象
        let video = this.id.current;
        //指定视频的源为stream
        video.srcObject = this.props.stream;
        //当获取到MetaData数据后开始播放
        video.onloadedmetadata = (e) => {
            video.play();
        };
    }

    render() {
        return (
            <div key={this.props.id} className="remoteVideoDiv">
                {/* 设置ref及id值 视频自动播放 */}
                <video ref={this.id} className="remoteVideo"
                autoPlay playsInline />
            </div>
        )
    }
}
//组件属性
RemoteVideoView.propTypes = {
    //媒体流
    stream: PropTypes.any.isRequired,
    //Id
    id: PropTypes.string.isRequired,
}
