// 1. crear la propiedad en el objeto actions
// 2. creamos el case en el reducer con la propiedad que creamos en el paso 1
// 3. crear la función en el archivo actions
// 4. despachar en el componente la función creada en el paso 3


import axios from "axios"

export const actions = {
    setProducts: "SET_PRODUCTS",
    setIsLoading: "SET_IS_LOADING",
    setCategories: "SET_CATEGORIES",
    setFilterProducts: "SET_FILTER_PRODUCTS",
    setName: "SET_NAME"
}

export const setProducts = products => ({
    type: actions.setProducts,
    payload: products
})

export const setFilterProducts = (filter) => {
    //console.log('desde actions')
    return{
    type: actions.setFilterProducts,
    payload: filter
    }
}

export const setName = filter => ({
    type: actions.setName,
    payload: filter
})

export const setCategories = categories => ({
    type: actions.setCategories,
    payload: categories
})

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const getProductsThunk = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        return axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then((res) =>{ dispatch(setProducts(res.data.data.products))})
            .finally(()=> dispatch(setIsLoading(false)));
    };
}

export const getCategoriesThunk = () => {
    return dispatch =>{
        dispatch(setIsLoading(true));;
        return axios
            .get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => { dispatch(setCategories(res.data.data.categories))})
            .finally(()=> dispatch(setIsLoading(false)));
    };
}

export const filterCategoriesThunk = (id) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios
            .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`)
            .then( res => {dispatch(setProducts(res.data.data.products))})
            .finally(()=> dispatch(setIsLoading(false)));
    }
}

export const queryProductsThunk = (name) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios
            .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`)
            .then( res => {dispatch(setProducts(res.data.data.products))})
            .finally(()=> dispatch(setIsLoading(false)));
    }
}

export const loginThunk = credentials => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios
            .post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', credentials)
            .finally(dispatch(setIsLoading(false)));
    }
}