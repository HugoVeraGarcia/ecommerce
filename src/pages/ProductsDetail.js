import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';
import { getProductsThunk } from '../redux/actions';
import "../styles/productDetail.css"

const ProductsDetail = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const [productsCategory, setProductsCategory] = useState([]);

    const products = useSelector(state => state.products);

    useEffect(()=>dispatch(getProductsThunk()),[ dispatch ])
    
    const productFound = products.find(product => product.id === Number(id));

    useEffect(()=>{
        if(productFound){
            axios
            .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${productFound?.category.id}`)
            .then(res => setProductsCategory(res.data.data.products))
        }
    },[ dispatch, productFound ])

//    console.log('productsCategory',productsCategory)
return (
    <Fragment>
          <form>
            <button>Search</button>
          </form>

        <div className="product_container">
            <header>
                <div>Home</div>
                <div>
                <i class="fa-solid fa-circle icon_circle"></i>
                </div> 
                <div><b>{productFound?.title}</b></div> 
            </header>
            <div>

                <PhotoGallery
                    productFound = {productFound}
                />


                    <h1>{productFound?.title}</h1>


                <button
                    className='addChart'
                >
                    Add to chart
                </button>
                
            </div>
            <div>
                <ul> 
                    {
                        productsCategory.map(element => (
                            
                        <li key={element.id}>
                            {element?.title}
                            {element.category.name}
                            {element?.description}
                            {element?.price}
                            <img className='imgProduct' src={element.productImgs[0]} alt="" />
                            <button
                                className='addChart'
                            >Add to chart</button>
                        </li>
                    ))   
                }
                </ul>
            </div>
        </div>
    </Fragment>
);

};

export default ProductsDetail;