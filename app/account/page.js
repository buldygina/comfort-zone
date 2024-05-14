import React from 'react';
import '@/app/account/account.css'
import { MdOutlineChangeCircle } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import {Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import { Button } from 'antd';
export default function Account() {
    return(
        <div>
            <div className='headerAccount'>
                <p>Profile</p>
            </div>
            <div className='rectangleAccount'>
                <div className='flexAccount'>
                <IoArrowBackOutline size={30}/>
                <img src={"/person-circle-sharp .png"}  />
                    <MdOutlineChangeCircle size={30}/>
                </div>
                <div className='enterYourUsername' style={{ position: 'absolute', top: '40%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                    <Input
                        placeholder="Username"
                        prefix={<UserOutlined style={{ color: '#D8B388'}} />}
                        style={{ borderColor: '#D8B388', width: '550px', height: '40px'}}/>
                </div>
                <div className='enterYourEmail' style={{ position: 'absolute', top: '55%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                    <Input
                        placeholder="Email"
                        style={{ borderColor: '#D8B388', width: '550px', height: '40px'}}/>
                </div>
                <div className='enterYourPassword' style={{ position: 'absolute', top: '70%', left: '51%', transform: 'translate(-50%, -50%)'}} >
                    <Input
                        placeholder="Password"
                        style={{ borderColor: '#D8B388', width: '550px', height: '40px'}}/>
                </div>
                <Button danger disabled style={{width:'120px', height:'50px', backgroundColor:'#D8B388', fontFamily:'Raleway', color:"white", fontSize:'20px', position: 'absolute', top: '80%', left: '45%'}}>
                    Save
                </Button>
            </div>
        </div>
    )
}