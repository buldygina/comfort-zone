'use client'
import React from 'react';
import '@/app/shoppinginformation/shoppinginformation.css'
import { IoArrowBackOutline } from "react-icons/io5";
import {Button} from "antd";
import {CgCloseO} from "react-icons/cg";
import {AiOutlineClose, AiOutlineHeart} from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import {SlBasket} from "react-icons/sl";
export default function ShoppingInformation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    React.useEffect(() => {
        const body = document.body;
        if (isMenuOpen) {
            body.classList.add('scroll-lock');
        } else {
            body.classList.remove('scroll-lock');
        }

        // Очистка при размонтировании компонента
        return () => {
            body.classList.remove('scroll-lock');
        };
    }, [isMenuOpen]);

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <div>
            <div className='containerShoppingInformation'>
            <div className='headerShoppingInformation'>
                <IoArrowBackOutline size={30}/>
                <p>comfort zone</p>
            </div>
            <div className='button'>
                <VscAccount size={27} />
                <div className='hamburgerMenuContainer'>
                    {isMenuOpen &&
                        <div className="menuHeart">
                            <p>Favourites</p>
                            <div className='hamburgerMenuFavourites'>
                                <img src={"/3 свеча.png"} style={{ width: '15%', height: "15%", borderRadius:'25px' }} alt="" />
                                <img src={"/4 свеча.png"} style={{ width: '15%', height: "15%", borderRadius:'25px' }} alt="" />
                                <div className='favouritesText'>
                                    <p>CANDLE "WARM"</p>
                                    <p>CANDLE "PINK SET"</p>
                                </div>
                                <div className='descriptionOfItems'>
                                    <p>22$</p>
                                    <p>19$</p>
                                    <div className='deleteItemFavourites'>
                                        <CgCloseO size={27}/>
                                        <CgCloseO size={27}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='hamburgerMenuHeart' onClick={hamburgerMenu}>
                        {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineHeart size={30} />}
                    </div>
                </div>
                <SlBasket size={28} />
            </div>
            </div>
            <div className='shoppingInformationText'>
                Shopping information
            </div>
            <div className='Sales'>
                <p>Sales %</p>
                <div className='salesCard'>
                <img src={"/скидочная карта.png"} style={{ width: '40%', height: "40%" }} alt="" />
                </div>
                <div className='salesCardText'>
                    Get a discount on your first order. The discount will be sent to your email.
                </div>
                <Button type="primary" ghost style={{width: '200px',height:'50px',  color:'white', borderColor: '#D8B388', backgroundColor:'#D8B388', position: 'absolute', top: '132%', left: '51%', transform: 'translate(-50%, -50%)', fontFamily:'Raleway', fontSize:'20px'}}>
                    Get a discount
                </Button>
            </div>
            <div className='storesShoppingInformation'>
                Stores
            </div>
            <div className='pointDescription'>
                <p>Discover Comfort Zone: Your ultimate destination for cups, plaids, pillows, and candles across 5 locations in Moscow"</p>

                <p>Comfort Zone - Red Square:
                Address: 1 Red Square, Moscow, 109012</p>

               <p>Comfort Zone - Arbat Street:
                Address: 15 Arbat Street, Moscow, 119019</p>

               <p>Comfort Zone - Tverskaya Street:
                Address: 20 Tverskaya Street, Moscow, 125009</p>

               <p>Comfort Zone - Gorky Park:
                Address: 10 Gorky Park, Moscow, 119146</p>

               <p>Comfort Zone - Izmailovo Market:
                Address: 5 Izmailovskoye Highway, Moscow, 105187</p>
              <p>Visit any of our convenient locations to explore our curated selection of home essentials and discover the perfect items to enhance your comfort and style.</p>
            </div>
            <div className='guaranteeShoppingInformation'>
                Guarantee
            </div>
            <div className='guaranteeDescription'>
                Dear Customers,

               <p>We at Comfort Zone strive to provide you with only the highest quality products that will create for you an atmosphere of coziness and comfort in your home. We are proud of the quality of our products and are fully confident in their durability and functionality.</p>
                <p>All products purchased from our stores are covered by our warranty, which provides your protection in the event of any defects in materials or workmanship. The warranty period and terms of warranty may vary depending on the type of product.</p>

                <p>We ensure:</p>

                <p>Product Quality: All of our products go through a rigorous quality control process before hitting our store shelves. We ensure that they are made from high quality materials and meet our quality standards.</p>

              <p>Satisfaction Guarantee: We strive to ensure your complete satisfaction with your purchase. If you are not completely satisfied with the product you have purchased, please contact our customer service team and we will endeavor to resolve your issue as quickly as possible.</p>

              <p>Support and Service: Our team is here to help you with any issues you may have with our products. If you have any problems or warranty questions, feel free to contact us.</p>

             <p>We appreciate your trust in Comfort Zone and do our best to ensure your comfort and satisfaction with our products. Thank you for choosing us to create your cozy corner of your home.</p>

              <p>Regards,</p>
             <p>Comfort Zone team</p>
            </div>
            <div className='deliveryShoppingInformation'>
                Delivery
            </div>
            <div className='deliveryDescription'>
                <p>At Comfort Zone, we strive to ensure that your shopping experience is as convenient as possible, including our delivery process. Here's how it works:</p>

              <p>Shipping Method: We use СDEK for all our deliveries. Once your order is confirmed, it will be processed and dispatched through СDEK's reliable delivery network.</p>

            <p>Delivery Options: Depending on your preference, you can choose from a range of delivery options offered by СDEK. These options include delivery to your doorstep, pickup from a СDEK pickup point, and more.</p>

             <p>Shipping Tariffs: Our delivery charges are based on the СDEK shipping tariffs, which vary depending on the delivery destination, package size, and delivery speed. You can select the tariff that best suits your needs during the checkout process.</p>

             <p>Delivery Time: The delivery time may vary depending on your location and the chosen shipping tariff. СDEK offers fast and efficient delivery services to ensure that your order reaches you in a timely manner.</p>

            <p>Tracking Your Order: Once your order is dispatched, you will receive a tracking number that you can use to monitor the status of your delivery online. This allows you to stay updated on the whereabouts of your order until it reaches you.</p>

           <p>Customer Support: If you have any questions or concerns regarding your delivery, our customer support team is here to assist you. Feel free to reach out to us, and we will do our best to provide you with the information you need.</p>

            <p>At Comfort Zone, we are committed to providing you with a seamless shopping experience from start to finish. With our reliable delivery services through СDEK, you can shop with confidence knowing that your order will be delivered safely and efficiently to your desired location.</p>
            </div>
            <div className='workTimeShoppingInformation'>
                Work time
            </div>
            <div className='workTimeDescription'>
             <p>At Comfort Zone, we understand the importance of convenience and accessibility for our customers. That's why we strive to maintain flexible and accommodating store hours. Here's when you can visit us:</p>

            <p>Weekdays: Our stores are open from Monday to Friday to serve you throughout the week. You can drop by anytime during our regular business hours.</p>

            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>

            <p>Weekends: We also welcome you to shop with us on weekends. Whether you're looking to unwind after a busy week or take care of your shopping needs, we're here for you.</p>

            <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>

            <p>Please note that store hours may vary slightly depending on location and any special events or holidays. We recommend checking our website or contacting your nearest Comfort Zone store for the most up-to-date information on store hours.</p>

           <p>Whether you're browsing for cozy essentials or seeking inspiration for your home decor, our friendly staff will be delighted to assist you during our store hours. We look forward to welcoming you to Comfort Zone at a time that suits you best!</p>
            </div>
            <div className='questionsShoppingInformation'>
                If you have any questions, please contact us at @comfortzone@mail.ru
            </div>
            <div className='footerShoppingInformation'>
                <div className='footerText'><p>stores</p>
                    <p>guarantee</p>
                    <p>delivery</p>
                    <p>work time</p>
                </div>
                <p className="email">comfortzone@mail.ru</p>
            </div>
        </div>
    )
}