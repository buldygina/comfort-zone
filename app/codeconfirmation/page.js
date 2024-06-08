'use client'
import React, { useRef, useState } from 'react';
import '@/app/codeconfirmation/codeConfirmation.css';
import { Input, Button} from 'antd';
import {useRouter} from "next/navigation";
import { useGetCurrentUserVerifyMutation } from "@/api/api";
import { useCookies } from "react-cookie";
import { number } from "prop-types";
export default function CodeConfirmation() {
    const [code, setCode] = useState("")
    const onChange = (text) => {
        setCode(text)
    };
    const sharedProps = {
        onChange
    };
    const router = useRouter()
    const [cookies] = useCookies()
    const [sendVerification] = useGetCurrentUserVerifyMutation()
    const handleButtonClick = async (e) => {
        e.preventDefault()
        await sendVerification({body: {code: Number(code)}, access: cookies.access})
        router.replace("/")
    };
    return(
        <div>
            <div className='codeConfirmationText'>
                <p>Email confirmation</p>
            </div>
            <div className='emailSentText'>
                A confirmation code will be sent to your e-mail
            </div>
            <div className='codeInputContainer'>
                <div className='centered-inputs'>
                <p>Validation code:</p>
                    <div className='inputs-row'>
                    <Input.OTP
                        length={6}
                        {...sharedProps}
                    />
                    </div>
                </div>
            </div>
            <div className='codeConfirmationAgain'>
                Send the confirmation code again
            </div>
            <div className='buttonsNextCancel'>
            <Button type="primary" onClick={handleButtonClick} style={{width:'100px', height:'50px', backgroundColor:'#D8B388', fontFamily:'Raleway', fontSize:'23px'}}>Check</Button>
            </div>
        </div>
    );
}
