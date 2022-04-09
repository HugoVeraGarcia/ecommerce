import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    return (
        <div>
            <div className="card">
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                <div className="img_container">
                    <img 
                    src={product.productImgs[0]} 
                    alt="product" 
                    className='imgProduct'
                    />
                </div>
                </Link>
                <div className='detail_container'>
                <p className='title'>{product.title} </p>
                <p className='price_text'>Price </p>
                <div className="price_cart">
                    <p className='price_value'>$ {product.price}</p>
                    <div className='icon_container_home'>
                    <i className="fa-solid fa-cart-shopping iconCart"></i>
                    </div>
                </div>
                </div>
                
            </li>
            </div>            
        </div>
    );
};

export default Card;