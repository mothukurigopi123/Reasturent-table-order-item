import React, { useContext } from 'react';
import './Cart.css';
import { Storecontext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setTableNo }) => { // Accept setTableNo as a prop
    const { cartitem, food_list, removefromcart, gettotalcartamount } = useContext(Storecontext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item) => {
                    if (cartitem[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className='cart-item-title cart-item-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                    <p>{cartitem[item._id]}</p>
                                    <p>${(item.price * cartitem[item._id]).toFixed(2)}</p>
                                    <p className='cross' onClick={() => removefromcart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${gettotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Service Charge</p>
                            <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${gettotalcartamount() === 0 ? 0 : (gettotalcartamount() + 2)}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
                </div>
                <div className='Tableno'>
                    <div>
                        <p>Please enter the Table no here:</p>
                        <div className='Table-no'>
                            <input 
                                type="number" 
                                placeholder='Table No' 
                                onChange={(e) => setTableNo(e.target.value)} // Update table number state
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
