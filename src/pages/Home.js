import { Card } from '../components';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoriesThunk, getCategoriesThunk, getProductsThunk, queryProductsThunk } from '../redux/actions';
import "../styles/home.css"

const Home = () => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  const [nameProduct, setNameProduct] = useState('');
  const [isCategoryVisible, setIsCategoryVisible] = useState(true);
  const [isPriceVisible, setIsPriceVisible] = useState(true);

  const filterPrice = e=>{
    //e.preventDefault();
  }

  useEffect(()=> {
    dispatch(getProductsThunk());
    dispatch(getCategoriesThunk());
  },[dispatch])


  const searchNameProduct = e =>{
    e.preventDefault();
    dispatch(queryProductsThunk(nameProduct));
    setNameProduct('')
  }

    return (
        <div>
          <form>
            <button>Search</button>
          </form>

          <div className='home_container'>
            <div className="categories_container">
            
            <div className="price_title">
                  <p>Price</p> 
                  <i 
                    className="fa-solid fa-arrow-down arrow_down"
                    onClick={()=> setIsPriceVisible(!isPriceVisible)}
                    >                  
                  </i>
            </div>
                <form onSubmit={filterPrice()}>
                  <div className={`price_filter ${isPriceVisible ? '' : 'hide' }`}>
                      <p>FROM</p>
                      <input type="number" min={0} className="input_price" />

                      <p>TO</p>
                      <input type="number" min={0} className="input_price" />
                  </div>
                  <button
                    className='price_button'
                  >
                    Filter Price

                  </button>
                </form>

              <div className="category_title"> 
                <p>Category</p> 
                <i 
                  className="fa-solid fa-arrow-down arrow_down"
                  onClick={()=> setIsCategoryVisible(!isCategoryVisible)}
                  >                  
                </i>
              </div>
              
                <div className={`category_detail ${isCategoryVisible ? '' : 'hide' }`}>

                </div>
              
              
              
              <div className={`category_detail ${isCategoryVisible ? '' : 'hide' }`}>
                {
                    categories.map(category => (
                      
                        <p 
                          key={category.id} 
                          className="p_category"
                          onClick={()=>dispatch(filterCategoriesThunk(category.id))}
                        >
                          {category.name}
                        </p>
                    ))
                  }
              </div>
            </div>
            <div className='list_container'>
             
             <div className="search_container">
                <form onSubmit={searchNameProduct}>    
                  <div className="search_container_control">
                    <input
                      className='input_search'
                      type="text" 
                      placeholder='What are you looking for?'
                      value={nameProduct}
                      onChange={e=> setNameProduct(e.target.value)}
                    />
                    <div className='search_icon_container'>
                      <i className="fa-solid fa-magnifying-glass search"></i>
                    </div>
                  </div>
                
                </form>
              </div>

             <main>

                {
                  products.length === 0 ? 
                  <p>We didn't found a product with the word {nameProduct}</p>
                  :
                    products.map(product => (
                      <Card
                        product={product}
                      />
                    ))
                }

              </main>
            </div>
          </div>
        </div>
    );
};

export default Home;
