import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/purchases.css"

const Purchases = () => {
    
    const purchases = useSelector(state => state.purchases)

    console.log('purchases',purchases)

    return (
        <div className='purchases_container'>
            <header>
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <div>
                <i className="fa-solid fa-circle icon_circle"></i>
                </div> 
                <div className='title_product_'><b>purchases</b></div> 
            </header>
            <h1>My Purchases</h1>
            <ul>
                {
                    purchases.map(purchase => (
                        <li key={purchase.id}>
                            <div className="table_cart">
                                <div className="table_date">
                                    <p> {purchase.createdAt.toString().slice(0,10)} </p>
                                </div>
                                <div className="table_content">
                                    {purchase.cart.products?.map(product => (
                                        <div key={product.id}>  
                                            <div className="table_content_detail">
                                                <Link to= {`/products/${product.id}`} > {product.title} </Link>
                                                <div className="quantity"> {product.productsInCart.quantity}</div>
                                                <p>price $ {product.price}</p> 
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                

                        </li>
                    ))

                }
            </ul>

        </div>
    );
};

export default Purchases;