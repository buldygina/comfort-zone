'use client'
import React from 'react';
import '@/app/newpassword/newpassword.css'
import {BsCupHot} from "react-icons/bs";
import {Button, Input, Space} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from "@ant-design/icons";
export default function NewPassword() {
    return(
        <div>
            <div className='newPasswordFlex'>
                <div className='comfortzoneNewPassword'>
                    <p>comfort zone</p>
                    <BsCupHot size={30}/>
                </div>
            </div>
            <div className='newPasswordText'>
                <p>Change your password</p>
            </div>
            <div className='rectangleNewPassword'>
                <div className='enterYourPassword' style={{ position: 'absolute', top: '40%', left: '51%', transform: 'translate(-50%, -50%)' }} >
                    <Space direction="vertical" style={{width:'450px', gap:'20px', height:'60px'}}>
                        <Input.Password maxLength={10} placeholder="Input new password" style={{height: '40px',  borderColor: '#D8B388', color: '#333333'}}/>
                        <Input.Password maxLength={10} style={{height: '40px', borderColor: '#D8B388'}}
                                        placeholder="Reset your new password"
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space>
                </div>
                <Button type="primary" ghost style={{width: '300px',height:'40px',  color:'white', borderColor: '#D8B388', backgroundColor:'#D8B388', position: 'absolute', top: '60%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    Change password
                </Button>
            </div>
        </div>
    )
}