'use client'
import React , { useRef } from 'react';
import '@/app/codeconfirmation/codeConfirmation.css';
import { Input, Button} from 'antd';
export default function CodeConfirmation() {
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));

    const handleInputChange = (index, e) => {
        const input = e.target;
        const nextInput = inputRefs[index + 1]?.current;
        const prevInput = inputRefs[index - 1]?.current;

        if (input.value.length === 0 && prevInput) {
            prevInput.focus();
        }

        if (input.value.length === 1 && nextInput) {
            nextInput.focus();
        }
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
                {[...Array(6)].map((_, index) => (
                    <Input
                        key={index}
                        style={{ width: '50px', marginRight: '8px' }}
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e)}
                        ref={inputRefs[index]}
                    />
                ))}
                    </div>
                </div>
            </div>
            <div className='codeConfirmationAgain'>
                Send the confirmation code again
            </div>
            <div className='buttonsNextCancel'>
            <Button type="primary" style={{width:'100px', height:'50px', backgroundColor:'#D8B388', fontFamily:'Raleway', fontSize:'23px'}}>Check</Button>
            </div>
        </div>
    );
}
