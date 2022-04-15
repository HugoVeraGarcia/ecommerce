import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/cart.css"

const Cart = ( {isCartOpen} ) => {

    const carts = useSelector(state => state.cart)
//    const [fullTotal, setFullTotal] = useState(0);


    console.log(carts.products)

//    let totaly

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
            {
                carts.products.map(cart => (
                    
                    
                    <li key={cart.id}>

                        <div className="brand gray">
                        <div className="label_brand"> {cart.brand} </div>
                            <i className="fa-solid fa-trash-can delete"></i>
                        </div>
                        {cart.title}<br />
                        
                        <div className="quantityCard">
                            {cart.productsInCart.quantity}
                        </div>

                        <div className="total">
                            <div className="label"> Total:</div> $ {cart.price * cart.productsInCart.quantity}<br />
                        </div>

                    </li>

                ))


            }   
            </ul>
            <div className="great_total">
                Total :
            </div>
        </div>
    );
};

export default Cart;