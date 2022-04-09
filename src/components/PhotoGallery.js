import React from 'react';
import '../styles/photogallery.css'

const PhotoGallery = ( { productFound }) => {
    return (
        <div className='main'>
            <img 
                src={productFound?.productImgs[0]} 
                alt="product" 
                className='imgProduct'
            />

        </div>
    );
};

export default PhotoGallery; 
