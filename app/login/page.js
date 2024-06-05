'use client'
import '@/app/login/login.css'
import React from 'react';
import { BsCupHot } from "react-icons/bs";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { IoArrowBack } from "react-icons/io5";
import { Input, Space, Button } from 'antd';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from 'react-cookie';
export default function LogIn() {
    const router = useRouter()
    const handleButtonClick = (e) => {
        e.preventDefault()
        router.push('/')
    };
    const [loginCredentials, setLoginCredentials] = React.useState({
        username: null,
        password: null
    })
    const [error, setError] = React.useState({
        username: null,
        password: null
    })
    const [cookies, setCookie] = useCookies()
    // const [login] = useLoginMutation()
    // const loginAccount = async (e) => {
    //     e.preventDefault()
    //     setError({ username: null, password: null })
    //     if (loginCredentials.username && loginCredentials.password) {
    //         const response = await login({ body: loginCredentials })
    //         if (!response.error) {
    //             setCookie('access', response.data.accessToken)
    //             setCookie('renew', response.data.refreshToken)
    //             router.replace('/')
    //         }
    //         else {
    //             if (typeof response.error.data.detail === 'object') setError({ username: response.error.data.detail.username, password: response.error.data.detail.password })
    //             else setError({ username: null, password: null })
    //         }
    //     }
    // }
    return (
        <div>
            <div className='logInFlex'>
                <div className='comfortzoneLogIn'>
                    <p>comfort zone</p>
                    <BsCupHot size={30} />
                </div>
            </div>
            <div className='signUptext'>
                <p>Log in to your account</p>
            </div>
            <div className='logInAccount'>
                <Link href='/registration' style={{ textDecoration: 'none', color: 'inherit' }}><p>or sign up for a new account</p></Link>
            </div>
            <div className='rectangleLogIn'>
                <div className='enterYourEmailLogIn' style={{ position: 'absolute', top: '45%', left: '51%', transform: 'translate(-50%, -50%)' }} >
                    <Input
                        placeholder="Enter your email"
                        style={{ borderColor: '#D8B388', width: '450px', height: '40px' }} />
                </div>
                <div className='enterYourPasswordLogIn' style={{ position: 'absolute', top: '55%', left: '51%', transform: 'translate(-50%, -50%)' }} >
                    <Space direction="vertical" style={{ width: '450px', gap: '20px', height: '60px' }}>
                        <Input.Password maxLength={10} placeholder="Input password" style={{ height: '40px', borderColor: '#D8B388', color: '#333333' }} />
                    </Space>
                </div>
                <div className='forgetPasswordLogIn' style={{ position: 'absolute', top: '61%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    <div className='forgotPassword'>Forgot your password?</div>
                    <Link href='/newpassword' style={{ textDecoration: 'none', color: 'inherit' }}><div className='changePasword' >Change it to a new one.</div></Link>
                </div>
                <Button onClick={handleButtonClick} type="primary" ghost style={{ width: '300px', height: '40px', color: 'white', borderColor: '#D8B388', backgroundColor: '#D8B388', position: 'absolute', top: '70%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    Log in
                </Button>
                <div className='logInRegistrationPage' style={{ position: 'absolute', top: '77%', left: '51%', transform: 'translate(-50%, -50%)' }}>
                    <div className='haveAccountLogIn'>
                        You don't have an account?
                    </div>
                    <div className='logInText'>
                        <Link href='/registration' style={{ textDecoration: 'none', color: 'inherit' }}>Sign up.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}