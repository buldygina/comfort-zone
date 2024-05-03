import React from "react";
import '@/app/orderprocessing/orderProcessing.css'
import { AiOutlineClose } from "react-icons/ai";
export default function orderProcessing() {
    return(
        <div>
      <div className='squareOrder'>
          <div className='textOrderProcessing'>
          <div className='orderProccesing'>THANK YOU FOR ORDER</div>
          <div className='closeButton'> <AiOutlineClose size={30}/></div>
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