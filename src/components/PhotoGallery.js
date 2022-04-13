import React, { useState } from 'react';
import '../styles/photogallery.css'

const PhotoGallery = ( { productFound }) => {
    const [index, setIndex] = useState(0);

    const nextImage = ()=> {
        if (index === 2){
            setIndex(0) 
        } else {
            setIndex(index+1)
        }
    }

    const previousImage = ()=> {
        if (index === 0){
            setIndex(2) 
        } else {
            setIndex(index-1)
        }
    }

    return (
        <div className='main'>
            <i 
                className="fa-solid fa-angle-left iconArrows"
                onClick={previousImage}
            ></i>
            <img 
                src={productFound?.productImgs[index]} 
                alt="product" 
                className='imgProductDetail'
            />
            <i 
                className="fa-solid fa-angle-right iconArrows"
                onClick={nextImage}
            ></i>
            <p></p>
            <div className='smallPhotosContainer'>
            <img 
                src={productFound?.productImgs[0]} 
                alt="product" 
                className={`${index===0 ? 'smallImg frame' : 'smallImg'}`}
            />
            <img 
                src={productFound?.productImgs[1]} 
                alt="product" 
                className={`${index===1 ? 'smallImg frame' : 'smallImg'}`}
                
            />
            <img 
                src={productFound?.productImgs[2]} 
                alt="product" 
                className={`${index===2 ? 'smallImg frame' : 'smallImg'}`}
            />
            </div>
            <p></p>
        </div>
    );
};

export default PhotoGallery; 
