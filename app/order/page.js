'use client'
import React from "react";
import "@/app/order/order.css";
import { IoArrowBack } from "react-icons/io5";
import { Button } from 'primereact/button';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export default function Order() {
    const [itemCountFirst, setItemCountFirst] = React.useState(1);
    const [itemCountSecond, setItemCountSecond] = React.useState(1);
    return (
        <div>
            <div className="headerOrder">
                <div className="headerTexrOrder">
                    <IoArrowBack size={35} />
                    <div className="orderText">
                        <p>YOUR ORDER</p>
                    </div>
                </div>
            </div>
            <div className='OrderItems'>
                <div className='firstItemOrder'> <img src={"/4 свеча.png"} style={{width: "100%"}} alt=""/> </div>
                <div className='secondItemOrder'> <img src={"/6 свеча.png"} style={{width: "100%"}} alt=""/></div>
            </div>
            <div className='textItemsOrder'>
                <div className='textFirstOrder'>
                    <p>Pink Set 22$</p>
                </div>
                <div className='textSecondOrder'>
                    <p>Seashell 15$</p>
                </div>
            </div>
            <div className='quantityItems'>
                <div className='quantityItemsFirst'>
                    <div style={{ display: "block", padding: 30 }}>
                        <div>
                            <Badge color="secondary" badgeContent={itemCountFirst}>
                                <ShoppingCartIcon />{" "}
                            </Badge>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        setItemCountFirst(Math.max(itemCountFirst - 1, 0));
                                    }}
                                >
                                    {" "}
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setItemCountFirst(itemCountFirst + 1);
                                    }}
                                >
                                    {" "}
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className='quantityItemsSecond'>
                    <div style={{ display: "block", padding: 30 }}>
                        <div>
                            <Badge color="secondary" badgeContent={itemCountSecond}>
                                <ShoppingCartIcon />{" "}
                            </Badge>
                            <ButtonGroup>
                                <Button
                                    onClick={() => {
                                        setItemCountSecond(Math.max(itemCountSecond - 1, 0));
                                    }}
                                >
                                    {" "}
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <Button
                                    onClick={() => {
                                        setItemCountSecond(itemCountSecond + 1);
                                    }}
                                >
                                    {" "}
                                    <AddIcon fontSize="small" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='totalcostOrders'>
                <p>Total: 50$</p>
                <p>Delivery to CDEK warehouse: 13$</p>
                <p>Russia, Moscow</p>
                <p>Final amount 62,78$.</p>
            </div>
            <form>
                <div className="inputName">
                    <label htmlFor="name-input">Your name</label>
                    <input id="name-input" />
                </div>
                <div className="inputEmail">
                    <label htmlFor="name-email">Your e-mail</label>
                    <input id="name-email" />
                </div>
                <div className="inputPhone">
                    <label htmlFor="name-phone">Your phone number</label>
                    <input id="name-phone" />
                </div>
                <div className="delivery">Delivery</div>
                <div className="inputCity">
                    <label htmlFor="name-city">City</label>
                    <input id="name-city" />
                </div>
                <div className="radioOrder">
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
                        <input type="radio" name="rb" id="rb1" style={{ marginRight: '5px' }} />{" "}
                        <label htmlFor="rb1">
                            <p style={{ margin: '0' }}>Delivery to CDEK warehouse from 4 days from 6,75$.</p>
                        </label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
                        <input type="radio" name="rb" id="rb2" style={{ marginRight: '5px' }}/>{" "}
                        <label htmlFor="rb2">
                            <p style={{ margin: '0' }}>Delivery to the door by CDEK from 4 days from 9,22$.</p>{" "}
                        </label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
                        <input type="radio" name="rb" id="rb3" style={{ marginRight: '5px' }}/>{" "}
                        <label htmlFor='rb3'>
                            <p style={{ margin: '0' }}>Express delivery to CDEK warehouse from 4 days from 11,66$.</p>
                        </label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
                        <input type="radio" name="rb" id="rb4" style={{ marginRight: '5px' }} />{" "}
                        <label htmlFor="rb4">
                            <p style={{ margin: '0' }}>Express delivery to the door by CDEK from 4 days from 13$.</p>
                        </label>
                    </div>
                </div>
                <div className="receivingPoint">
                    <label htmlFor="name-point">Receiving point</label>
                    <input id="name-point" />
                </div>
                <div className="recepient">
                    <label htmlFor="name-recepient">Recepient</label>
                    <input id="name-recepient" />
                </div>
                <div className="commentOrder">
                    <label htmlFor="name-comment">Comment on the order</label>
                    <input id="name-comment" />
                </div>
            </form>
            <div style={{ marginLeft: '80px', marginTop:'100px' }}>
            <Button label="Place an order" className="custom-button" style={{ fontSize: '30px', padding: '30px 120px', fontFamily:'Raleway', color:'white', backgroundColor: '#CABAAE', border:'2px solid #BEAEA3'}} />
            </div>
            <div className='personalData' style={{ display: 'flex', alignItems: 'center', marginTop: '60px', marginLeft:'40px' }}>
                <input type="checkbox" id="cb3"  style={{ marginRight: '5px' }}/> <label htmlFor="cb3"><p style={{ margin: '0' }}>By clicking the button, you consent to the processing of your personal data.</p></label>
            </div>
            <div className='footer'>
                <div className='footerText'><p>stores</p>
                    <p>guarantee</p>
                    <p>delivery</p>
                    <p>work time</p>
                </div>
                <p className="email">comfortzone@mail.ru</p>
            </div>
        </div>
    );
}
