import React from "react";
import '@/app/orderprocessing/orderProcessing.css'
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
export default function orderProcessing() {
    return(
        <div>
      <div className='squareOrder'>
          <div className='textOrderProcessing'>
          <div className='orderProccesing'>THANK YOU FOR ORDER</div>
          <Link href='/' style={{textDecoration: "none", color: "inherit"}}><div className='closeButton'> <AiOutlineClose size={30}/></div></Link>
          </div>
        </div>
           <div className='checkMark'> <img src={"/gravity-ui_circle-check-fill.png"} style={{width: "30%"}} alt=""/></div>
            <div className='textCheckMark'>
                <p>The payment has been accepted for processing!</p>
                <p> We will contact you soon.</p>
            </div>
        </div>
    );
}