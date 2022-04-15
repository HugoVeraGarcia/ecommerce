import { Card } from '../components';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DescriptionProd from '../components/DescriptionProd';
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


return (
    <Fragment>
          <form>
            <button>Search</button>
          </form>

        <div className="product_container">
            <header>
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <div>
                <i className="fa-solid fa-circle icon_circle"></i>
                </div> 
                <div className='title_product_'><b>{productFound?.title}</b></div> 
            </header>
            <div className="container_detail">
                <div className='photoGalery'>
                    <PhotoGallery
                        productFound = {productFound}
                    />
                </div> 
                <div className="description">
                    <DescriptionProd 
                        productFound = {productFound}
                        id = {id}
                    />
                </div>
            </div>
      
            <p className='discover'>Discover similar items</p>
            <div className="main_container">
            
                <div className='grid_similar'> 
            
                    {
                        productsCategory.map(element => (
                            <ul key={element.id}>
                                
                                    <Card product = {element} />
                                
                            </ul>
                        ))   
                    }
                </div>
            </div>
        </div>
    </Fragment>
);

};

export default ProductsDetail;