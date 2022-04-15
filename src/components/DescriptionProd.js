import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartThunk } from '../redux/actions';
import '../styles/descriptionProd.css'

const DescriptionProd = ({ productFound, id }) => {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const minus = () => {
        if (quantity===0){
        } else{
            setQuantity(quantity-1)
        }
    }

    const addCart = () => {
        const product =
            {
                id,
                quantity
            }
        dispatch(addCartThunk(product))
    }

    
    return (
        <div>
            <div>

                    <h1 className='title_product'>{productFound?.title}</h1>

                    <p className='description_prod'>{ productFound?.description }</p>

                    <div className="price_quantity">

                        <p>Price</p>
                        <p>Quantity</p>
                        <p>$ { productFound?.price }</p>
                        <div className='quantity_container'>
                            <div onClick={minus} className='increment'>-</div>
                            <div className='quantity'>{quantity}</div>
                            <div onClick={()=>setQuantity(quantity + 1)} className='increment'>+</div>
                        </div>
                    </div>


                <button
                    className='addChart'
                    onClick={addCart}
                >
                    Add to chart   <i className="fa-solid fa-cart-shopping  cart_icon"></i>
                </button>

                </div>

        </div>
    );
};

export default DescriptionProd;