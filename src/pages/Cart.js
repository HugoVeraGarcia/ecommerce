import React from 'react';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductThunk, purchaseCartThunk } from '../redux/actions';
import "../styles/cart.css"

const Cart = ( {isCartOpen} ) => {

    const carts = useSelector(state => state.cart)
//    const [fullTotal, setFullTotal] = useState(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(carts.products)

//    let totaly;

/*    const sumUp = ()=>{
        setFullTotal(fullTotal+100);
        
        carts.products.forEach(cart => {
            totaly = totaly + (cart.price * cart.productsInCart.quantity);
        });
        console.log('totaly', totaly);
    }
*/
    //sumUp();

    return (
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
            <h2>CART</h2>
            <ul>
            {   carts.products ?
                
                carts.products.map(cart => (
                    
                    
                    <li key={cart.id} >
                    
                        <div className="brand gray">
                            <div className="label_brand"> {cart.brand} </div>
                                <i 
                                    className="fa-solid fa-trash-can delete"
                                    onClick={()=>dispatch(deleteProductThunk(cart.id))}
                                    >

                                </i>
                            </div>
                        <div className="title" onClick={()=>navigate(`/products/${cart.id}`)}>
                            {cart.title} id {cart.id}<br />
                        </div>
                        
                        
                        <div className="quantityCard">
                            {cart.productsInCart.quantity}
                        </div>

                        <div className="total">
                            <div className="label"> Total</div> $ {cart.price * cart.productsInCart.quantity}<br />
                        </div>

                    </li>

                ))
                :
                <p></p>
          }   
            </ul>
            {
                carts.products ?
                    <div className="great_total">
                        <button 
                            className='button'
                            onClick={()=> dispatch(purchaseCartThunk())}
                        >
                                Checkout</button>
                    </div>
                :
                    <p>No products</p>
            }
        </div>
    );
};

export default Cart;