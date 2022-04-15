import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCartThunk } from '../redux/actions';

const Card = ({ product }) => {

    const dispatch = useDispatch();

    const addCart = () => {
        const productAdd =
            {
                id: product.id,
                quantity: 1
            }
        dispatch(addCartThunk(productAdd))
        console.log(productAdd)
    }

    return (
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
                    <i 
                        className="fa-solid fa-cart-shopping iconCart"
                        onClick={()=> addCart()}
                        >     
                    </i>
                    </div>
                </div>
                </div>
                
            </li>
            </div>            
    );
};

export default Card;