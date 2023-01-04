// 1. crear la propiedad en el objeto actions
// 2. creamos el case en el reducer con la propiedad que creamos en el paso 1
// 3. crear la función en el archivo actions
// 4. despachar en el componente la función creada en el paso 3

import axios from "axios";

export const actions = {
  setProducts: "SET_PRODUCTS",
  setIsLoading: "SET_IS_LOADING",
  setCategories: "SET_CATEGORIES",
  setFilterProducts: "SET_FILTER_PRODUCTS",
  setName: "SET_NAME",
  setCart: "SET_CART",
  setPurchases: "SET_PURCHASES",
};

const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const setPurchases = (purchases) => ({
  type: actions.setPurchases,
  payload: purchases,
});

export const setCart = (cart) => ({
  type: actions.setCart,
  payload: cart,
});

export const setProducts = (products) => ({
  type: actions.setProducts,
  payload: products,
});

export const setFilterProducts = (filter) => {
  //console.log('desde actions')
  return {
    type: actions.setFilterProducts,
    payload: filter,
  };
};

export const setCategories = (categories) => ({
  type: actions.setCategories,
  payload: categories,
});

export const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading,
});

export const getProductsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/")
      .then((res) => {
        dispatch(setProducts(res.data.data.products));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getCategoriesThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        "https://e-commerce-api.academlo.tech/api/v1/products/categories"
      )
      .then((res) => {
        dispatch(setCategories(res.data.data.categories));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterCategoriesThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `https://e-commerce-api.academlo.tech/api/v1/products/?category=${id}`
      )
      .then((res) => {
        dispatch(setProducts(res.data.data.products));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const queryProductsThunk = (name) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        `https://e-commerce-api.academlo.tech/api/v1/products?query=${name}`
      )
      .then((res) => {
        dispatch(setProducts(res.data.data.products));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const loginThunk = (credentials) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(
        "https://e-commerce-api.academlo.tech/api/v1/users/login",
        credentials
      )
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const addCartThunk = (product) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(
        "https://e-commerce-api.academlo.tech/api/v1/cart",
        product,
        getConfig()
      )
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const addNewUserThunk = (user) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(`https://e-commerce-api.academlo.tech/api/v1/users`, user)
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getUserCartThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        "https://e-commerce-api.academlo.tech/api/v1/cart/",
        getConfig()
      )
      .then((res) => dispatch(setCart(res.data.data.cart)))
      .catch((error) => {
        if (error.response.status === 404) {
          dispatch(setCart([]));
        }
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const deleteProductThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .delete(
        `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`,
        getConfig()
      )
      .then((res) => dispatch(getUserCartThunk()))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const purchaseCartThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(
        `https://e-commerce-api.academlo.tech/api/v1/purchases`,
        {},
        getConfig()
      )
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const getPurchasesThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .get(
        "https://e-commerce-api.academlo.tech/api/v1/purchases",
        getConfig()
      )
      .then((res) => {
        dispatch(setPurchases(res.data.data.purchases));
      })
      .catch((error) => {
        if (error.response.status === 404) {
          dispatch(setPurchases([]));
        }
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
};
