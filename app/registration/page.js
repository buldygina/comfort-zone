'use client'
import '@/app/registration/registration.css'
import React from 'react';
import { BsCupHot } from "react-icons/bs";
import { UserOutlined,  EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';
import { Input,  Space, Button } from 'antd';
import Link from "next/link";
import {useRouter} from "next/navigation";
export default function Registration() {
    const router = useRouter()
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/codeconfirmation')
    };
    const [registerCredentials, setRegisterCredentials] = React.useState({
        username: null,
        password: null,
        rePassword: null,
        email: null
    })
    const [error, setError] = React.useState({
        username: null,
        password: null,
        email: null
    })
    const [cookies,setCookie] = useCookies()
    const [register] = useRegisterMutation()
    const registerAccount = async (e) =>{
        e.preventDefault()
        setError({username: null, password: null, email: null})
        if (registerCredentials.password !== registerCredentials.rePassword) return setError({username: null, email:null, password: "Пароли не совпадают"})
        const response = await register({body: {username: registerCredentials.username, password: registerCredentials.password, email:registerCredentials.email}})
        if (!response.error) {
            setCookie('access', response.data.accessToken)
            setCookie('renew', response.data.refreshToken)
            router.replace('/')
        }
        else {
            if (typeof response.error.data.detail === 'object') setError({username: response.error.data.detail.username, password: response.error.data.detail.password, email: error.data.detail.email})
            else setError({password: null, username: null, email: null})
        }
    }
    return (
        <div>
            <div className='registrationFlex'>
            <div className='comfortzoneRegistration'>
                <p>comfort zone</p>
                <BsCupHot size={30}/>
            </div>
        </div>
            <div className='signUpText'>
                <p>Sign up for a new account</p>
            </div>
            <div className='logOutAccount'>
                <Link href='/login'style={{textDecoration:'none', color:'inherit'}}><p>or log in to your account</p></Link>
            </div>
            <div className='rectangleRegistration'>
                <div className='enterYourUsername' style={{ position: 'absolute', top: '42%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                <Input
                    placeholder="Enter your username"
                    prefix={<UserOutlined style={{ color: '#D8B388'}} />}
                    style={{ borderColor: '#D8B388', width: '450px', height: '40px'}}/>
                </div>
                <div className='enterYourEmail' style={{ position: 'absolute', top: '50%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                    <Input
                        placeholder="Enter your email"
                        style={{ borderColor: '#D8B388', width: '450px', height: '40px'}}/>
                </div>
                <div className='enterYourPassword' style={{ position: 'absolute', top: '60%', left: '51%', transform: 'translate(-50%, -50%)' }} >
                <Space direction="vertical" style={{width:'450px', gap:'20px', height:'60px'}}>
                    <Input.Password maxLength={10} placeholder="Input password" style={{height: '40px',  borderColor: '#D8B388', color: '#333333'}}/>
                    <Input.Password maxLength={10} style={{height: '40px', borderColor: '#D8B388'}}
                        placeholder="Reset your password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
                </div>
                <Button onClick={handleButtonClick} type="primary" ghost style={{width: '300px',height:'40px',  color:'white', borderColor: '#D8B388', backgroundColor:'#D8B388', position: 'absolute', top: '75%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    Create
                </Button>
                <div className='logInRegistration' style={{ position: 'absolute', top: '83%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                <div className='haveAccount'>
                    Already registered?
                </div>
                <div className='logIn'>
                    <Link href='/login'style={{textDecoration:'none', color:'inherit'}}>Log in to your account.</Link>
                </div>
                </div>
            </div>
        </div>
    );
}