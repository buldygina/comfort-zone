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
import { useLoginMutation } from "@/api/api";

export default function LogIn() {
	const router = useRouter()
	const [loginCredentials, setLoginCredentials] = React.useState({
		email: null,
		password: null
	})
	const [error, setError] = React.useState({
		email: null,
		password: null
	})
	const [cookies, setCookie] = useCookies()
	const [login] = useLoginMutation()
	const loginAccount = async (e) => {
		e.preventDefault()
		setError({email: null, password: null})
		if (loginCredentials.email && loginCredentials.password) {
			const response = await login({body: loginCredentials})
			if (!response.error) {
				setCookie('access', response.data.accessToken)
				setCookie('renew', response.data.refreshToken)
				router.replace('/')
			} else {
				if (typeof response.error.data.detail === 'object') setError({
					password: response.error.data.detail.password,
					email: response.error.data.detail.email
				})
				else setError({password: null, email: null})
			}
		}
	}
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
				<Link href='/registration' style={{textDecoration: 'none', color: 'inherit'}}><p>or sign up for a new
					account</p></Link>
			</div>
			<div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
				<div className='rectangleLogIn'>
					<div className='enterYourEmailLogIn'>
						<Input status={error.email ? "error" : null}
							   onChange={(event) => setLoginCredentials((prev) => ({
								   ...prev,
								   email: event.target.value
							   }))}
							   placeholder="Enter your email"
							   style={{borderColor: '#D8B388', width: '450px', height: '40px'}}/>
						{error.email && <p style={{color: 'red', marginTop: '0'}}>{error.email}</p>}
					</div>
					<div className='enterYourPasswordLogIn'>
						<Space direction="vertical" style={{width: '450px', gap: '20px', height: '60px'}}>
							<Input.Password status={error.password ? "error" : null}
											onChange={(event) => setLoginCredentials((prev) => ({
												...prev,
												password: event.target.value
											}))}
											maxLength={10} placeholder="Input password"
											style={{height: '40px', borderColor: '#D8B388', color: '#333333'}}
							/>
							{error.password && <p style={{color: 'red'}}>{error.password}</p>}
						</Space>
					</div>
					<div className='forgetPasswordLogIn'>
						<div className='forgotPassword'>Forgot your password?</div>
						<Link href='/newpassword' style={{textDecoration: 'none', color: 'inherit'}}>
							<div className='changePasword'>Change it to a new one.</div>
						</Link>
					</div>
					<Button onClick={loginAccount} type="primary" ghost style={{
						width: '300px',
						height: '40px',
						color: 'white',
						borderColor: '#D8B388',
						backgroundColor: '#D8B388'
					}}>
						Log in
					</Button>
					<div className='logInRegistrationPage'>
						<div className='haveAccountLogIn'>
							You don't have an account?
						</div>
						<div className='logInText'>
							<Link href='/registration' style={{textDecoration: 'none', color: 'inherit'}}>Sign
								up.</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}