import React, { useState } from 'react';
import '../styles/descriptionProd.css'

const DescriptionProd = ({ productFound }) => {
    const [quantity, setQuantity] = useState(0);

    const minus = () => {
        if (quantity===0){
        } else{
            setQuantity(quantity-1)
        }
    }
//    console.log('price',productFound?.price)

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
                >
                    Add to chart   <i className="fa-solid fa-cart-shopping  cart_icon"></i>
                </button>

                </div>

        </div>
    );
};

export default DescriptionProd;