'use client'
import '@/app/registration/registration.css'
import React from 'react';
import { BsCupHot } from "react-icons/bs";
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from 'react-cookie';
import { useRegistrationMutation } from "@/api/api";

export default function Registration() {
	const router = useRouter()
	const [registerCredentials, setRegisterCredentials] = React.useState({
		username: null,
		password: null,
		rePassword: null,
		email: null
	})
	const [error, setError] = React.useState({
		username: null,
		password: null,
		email: null,
		detail: null
	})
	const [cookies, setCookie] = useCookies()
	const [register] = useRegistrationMutation()
	const registerAccount = async (e) => {
		e.preventDefault()
		setError({username: null, password: null, email: null})
		if (registerCredentials.password !== registerCredentials.rePassword) return setError({
			username: null,
			email: null,
			password: "Passwords don't match",
			rePassword: "Passwords don't match"
		})
		const response = await register({
			body: {
				username: registerCredentials.username,
				password: registerCredentials.password,
				email: registerCredentials.email
			}
		})
		if (!response.error) {
			setCookie('access', response.data.accessToken)
			setCookie('renew', response.data.refreshToken)
			router.replace('/codeconfirmation')
		} else {
			console.log(response.error)
			if (typeof response.error.data.detail === 'object') setError({
				username: response.error.data.detail.username,
				password: response.error.data.detail.password,
				email: response.error.data.detail.email
			})
			else {
				if (response.error.data.detail) setError({password: null, username: null, email: null, detail: response.error.data.detail})
				else setError({password: null, username: null, email: null})
			}
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
				<Link href='/login' style={{textDecoration: 'none', color: 'inherit'}}><p>or log in to your account</p>
				</Link>
			</div>
			<div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
				<div className='rectangleRegistration'>
					<div className='enterYourUsername'>
						<Input status={error.username ? "error" : null}
							   onChange={(event) => setRegisterCredentials((prev) => ({
								   ...prev,
								   username: event.target.value
							   }))}
							   placeholder="Enter your username"
							   prefix={<UserOutlined style={{color: '#D8B388'}}/>}
							   style={{borderColor: '#D8B388', width: '450px', height: '40px'}}/>
						{error.username && <p className='textError' style={{color: 'red'}}>{error.username}</p>}
					</div>
					<div className='enterYourEmail'>
						<Input status={error.email ? "error" : null}
							   onChange={(event) => setRegisterCredentials((prev) => ({
								   ...prev,
								   email: event.target.value
							   }))}
							   placeholder="Enter your email"
							   style={{borderColor: '#D8B388', width: '450px', height: '40px'}}/>
						{error.email && <p className='textError' style={{color: 'red'}}>{error.email}</p>}
					</div>
					<Input.Password status={error.password ? "error" : null}
									onChange={(event) => setRegisterCredentials((prev) => ({
										...prev,
										password: event.target.value
									}))} maxLength={10} placeholder="Input password"
									style={{height: '40px', width: '450px', borderColor: '#D8B388', color: '#333333'}}/>
					{error.password && <p className='textError2' style={{color: 'red'}}>{error.password}</p>}
					<Input.Password status={error.rePassword ? "error" : null}
									onChange={(event) => setRegisterCredentials((prev) => ({
										...prev,
										rePassword: event.target.value
									}))} maxLength={10} style={{height: '40px', width: '450px', borderColor: '#D8B388'}}
									placeholder="Reset your password"
									iconRender={(visible) => (visible ? <EyeTwoTone/> :
										<EyeInvisibleOutlined/>)}
					/>
					{error.rePassword && <p style={{color: 'red'}}>{error.rePassword}</p>}
					{error.detail && <p className='textError2' style={{color: 'red'}}>{error.detail}</p>}
					<Button onClick={registerAccount} type="primary" ghost style={{
						width: '300px',
						height: '40px',
						color: 'white',
						borderColor: '#D8B388',
						backgroundColor: '#D8B388',
					}}>
						Create
					</Button>
					<div className='logInRegistration'>
						<div className='haveAccount'>
							Already registered?
						</div>
						<div className='logIn'>
							<Link href='/login' style={{textDecoration: 'none', color: 'inherit'}}>Log in to your
								account.</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}