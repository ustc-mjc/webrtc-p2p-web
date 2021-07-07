import React from 'react';
import { Button, message } from 'antd';

const constrains = window.constrains = {
    audio: false,
    video: true
};

class Camera extends React.Component {
    constructor(props) {
        super(props);
        this.myVideo = React.createRef();
        this.oepnCamera = this.oepnCamera.bind(this);
    }
    oepnCamera = async (e) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constrains);
            console.log('handleSuccess');
            this.handleSuccess(stream);
        } catch (e) {
            this.handleError(e)
        }
    }
    handleSuccess = (stream) => {
        const video = this.myVideo.current;
        const videoTracks = stream.getVideoTracks();
        console.log('通过设置限制条件获取到流：', constrains);
        console.log(`使用的视频设备：${videoTracks[0].label}`);
        window.stream = stream;
        video.srcObject = stream;
    }
    handleError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
          const v = constrains.video;
          //宽高尺寸错误
          message.error(`宽:${v.width.exact} 高:${v.height.exact} 设备不支持`);
        } else if (error.name === 'PermissionDeniedError') {
          message.error('没有摄像头和麦克风使用权限,请点击允许按钮');
        }
        message.error(`getUserMedia错误: ${error.name}`, error);
    }

    render() {
        return (
            <div className="container">
                <h1>
                    <span>摄像头示例</span>
                </h1>
                <video className="video" ref={this.myVideo} autoPlay playsInline></video>
                <Button onClick={this.oepnCamera}>打开摄像头</Button>
                <Button>首页</Button>
            </div>
        )
    }
}
export default Camera;