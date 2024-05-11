'use client'
import '@/app/login/login.css'
import React from 'react';
import { BsCupHot } from "react-icons/bs";
import { UserOutlined,  EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import { Input,  Space, Button } from 'antd';
export default function LogIn() {
    return (
        <div>
            <div className='logInFlex'>
                <div className='comfortzoneLogIn'>
                    <p>comfort zone</p>
                    <BsCupHot size={30}/>
                </div>
            </div>
            <div className='signUptext'>
                <p>Log in to your account</p>
            </div>
            <div className='logInAccount'>
                <p>or sign up for a new account</p>
            </div>
            <div className='rectangleLogIn'>
                <div className='enterYourEmailLogIn' style={{ position: 'absolute', top: '45%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                    <Input
                        placeholder="Enter your email"
                        style={{ borderColor: '#D8B388', width: '450px', height: '40px'}}/>
                </div>
                <div className='enterYourPasswordLogIn' style={{ position: 'absolute', top: '55%', left: '51%', transform: 'translate(-50%, -50%)' }} >
                    <Space direction="vertical" style={{width:'450px', gap:'20px', height:'60px'}}>
                        <Input.Password maxLength={10} placeholder="Input password" style={{height: '40px',  borderColor: '#D8B388', color: '#333333'}}/>
                    </Space>
                </div>
                <Button type="primary" ghost style={{width: '300px',height:'40px',  color:'white', borderColor: '#D8B388', backgroundColor:'#D8B388', position: 'absolute', top: '65%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    Log in
                </Button>
                <div className='logInRegistrationPage' style={{ position: 'absolute', top: '75%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    <div className='haveAccountLogIn'>
                        You don't have an account?
                    </div>
                    <div className='logInText'>
                        Sign up.
                    </div>
                </div>
            </div>
        </div>
    );
}