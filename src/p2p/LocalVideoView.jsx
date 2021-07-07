import React, { Component } from 'react';
import VideocamOffIcon from "mdi-react/VideocamOffIcon";
import PropTypes from "prop-types";
import '../styles/css/localVideoView.scss'

export default class LocalVideoView extends Component {
    constructor(props) {
        super(props);
        this.id = React.createRef();
    }
    componentDidMount = () => {
        let video = this.id.current;
        video.srcObject = this.props.stream;
        video.onloadedmetadata = (e) => {
            video.play();
        }
    }

    render() {
        const videoMuteIcon = {
            position: 'absolute',
            color: '#fff',
        }
        return (
            <div className="localVideoDiv" key={this.props.id}>
                <video ref={this.id} className="localVideo" autoPlay playsInline muted={true} />
                {
                    this.props.muted? <VideocamOffIcon style={videoMuteIcon} /> : null
                }
            </div>
        )
    }
}

//组件属性
LocalVideoView.propTypes = {
    //媒体流
    stream: PropTypes.any.isRequired,
    //Id
    id: PropTypes.string,
}