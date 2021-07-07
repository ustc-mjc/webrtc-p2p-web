import React from 'react';
import { Form, Input, Button } from 'antd';

export default class P2PLogin extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (values) => {
        console.log(values);
        this.props.loginHandler(values.userName, values.roomId)
    }
    render() {
        return (
            <Form onFinish={this.handleSubmit} className="login-form">
                <Form.Item name="userName">
                    <Input placeholder="请输入用户名"/>
                </Form.Item>
                <Form.Item name="roomId">
                    <Input placeholder="请输入房间号"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-join-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}