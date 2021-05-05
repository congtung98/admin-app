import axios from "../../helpers/axios";
import { productConstants } from "./constants";

export const getProducts = () => {
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });
            const res = await axios.post(`product/getProducts`);
            if(res.status === 200){
                const { products } = res.data;
                console.log(products, 'GETPRODUCT');
                dispatch({
                    type: productConstants.GET_ALL_PRODUCT_SUCCESS,
                    payload: { products },
                });
            }else{
                dispatch({ type: productConstants.GET_ALL_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const addProduct = form => {
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
            const res = await axios.post(`product/create`, form);
            console.log(form, 'FORM');
            if(res.status === 201){
                dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const deleteProductById = (payload) => {
    return async (dispatch) => {
        try{
            const res = await axios.delete(`product/deleteProductById`, {
                data: {payload}
            });
            dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST })
            if(res.status === 202){
                dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
                dispatch(getProducts());
            }else{
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const updateProduct = form => {
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.UPDATE_PRODUCT_REQUEST });
            const res = await axios.post(`product/editProductById`, form);
            console.log(form, 'FORM');
            if(res.status === 201){
                dispatch({ type: productConstants.UPDATE_PRODUCT_SUCCESS });
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.UPDATE_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const getSmartPhoneProductDetailsById = (product) => {
    return async dispatch => {
        let res;
        dispatch({ type: productConstants.GET_SMART_PHONE_PRODUCT_DETAILS_BY_ID_REQUEST });
        try {
            const { _id } = product;
            res = await axios.get(`/product/smartPhone/${_id}`);
            dispatch({
                type: productConstants.GET_SMART_PHONE_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });
            console.log(_id, res);
        }catch(error){
            console.log(error);
            dispatch({
                type: productConstants.GET_SMART_PHONE_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addSmartPhoneProductDetails = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.ADD_SMART_PHONE_PRODUCT_REQUEST });
            const res = await axios.post(`product/editSmartPhoneProductDetail`, { ...payload });
            console.log(payload, 'smartphone payload');
            if(res.status === 201){
                dispatch({ type: productConstants.ADD_SMART_PHONE_PRODUCT_SUCCESS });
                dispatch(getSmartPhoneProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.ADD_SMART_PHONE_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
}

export const deleteSmartPhoneProductById = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            const res = await axios.delete(`product/deleteSmartPhoneProductById`, {
                data: {payload}
            });
            dispatch({ type: productConstants.DELETE_SMART_PHONE_PRODUCT_BY_ID_REQUEST })
            if(res.status === 202){
                dispatch({ type: productConstants.DELETE_SMART_PHONE_PRODUCT_BY_ID_SUCCESS });
                dispatch(getSmartPhoneProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_SMART_PHONE_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const getClothingProductDetailsById = (product) => {
    return async dispatch => {
        let res;
        dispatch({ type: productConstants.GET_CLOTHING_PRODUCT_DETAILS_BY_ID_REQUEST });
        try {
            const { _id } = product;
            res = await axios.get(`/product/clothing/${_id}`);
            dispatch({
                type: productConstants.GET_CLOTHING_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });
            console.log(_id, res);
        }catch(error){
            console.log(error);
            dispatch({
                type: productConstants.GET_CLOTHING_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addClothingProductDetails = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.ADD_CLOTHING_PRODUCT_REQUEST });
            const res = await axios.post(`product/editClothingProductDetail`, { ...payload });

            if(res.status === 201){
                dispatch({ type: productConstants.ADD_CLOTHING_PRODUCT_SUCCESS });
                dispatch(getClothingProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.ADD_CLOTHING_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
}

export const deleteClothingProductById = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            const res = await axios.delete(`product/deleteClothingProductById`, {
                data: {payload}
            });
            dispatch({ type: productConstants.DELETE_CLOTHING_PRODUCT_BY_ID_REQUEST })
            if(res.status === 202){
                dispatch({ type: productConstants.DELETE_CLOTHING_PRODUCT_BY_ID_SUCCESS });
                dispatch(getClothingProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_CLOTHING_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const getTelevisionProductDetailsById = (product) => {
    return async dispatch => {
        let res;
        dispatch({ type: productConstants.GET_TELEVISION_PRODUCT_DETAILS_BY_ID_REQUEST });
        try {
            const { _id } = product;
            res = await axios.get(`/product/television/${_id}`);
            dispatch({
                type: productConstants.GET_TELEVISION_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });
            console.log(_id, res);
        }catch(error){
            console.log(error);
            dispatch({
                type: productConstants.GET_TELEVISION_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addTelevisionProductDetails = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.ADD_TELEVISION_PRODUCT_REQUEST });
            const res = await axios.post(`product/editTelevisionProductDetail`, { ...payload });

            if(res.status === 201){
                dispatch({ type: productConstants.ADD_TELEVISION_PRODUCT_SUCCESS });
                dispatch(getTelevisionProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.ADD_TELEVISION_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
}

export const deleteTelevisionProductById = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            const res = await axios.delete(`product/deleteTelevisionProductById`, {
                data: {payload}
            });
            dispatch({ type: productConstants.DELETE_TELEVISION_PRODUCT_BY_ID_REQUEST })
            if(res.status === 202){
                dispatch({ type: productConstants.DELETE_TELEVISION_PRODUCT_BY_ID_SUCCESS });
                dispatch(getTelevisionProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_TELEVISION_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        }catch(error){
            console.log(error);
        }
    };
};

export const getLaptopProductDetailsById = (product) => {
    return async dispatch => {
        let res;
        dispatch({ type: productConstants.GET_LAPTOP_PRODUCT_DETAILS_BY_ID_REQUEST });
        try {
            const { _id } = product;
            res = await axios.get(`/product/laptop/${_id}`);
            dispatch({
                type: productConstants.GET_LAPTOP_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });
            console.log(_id, res);
        }catch(error){
            console.log(error);
            dispatch({
                type: productConstants.GET_LAPTOP_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addLaptopProductDetails = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            dispatch({ type: productConstants.ADD_LAPTOP_PRODUCT_REQUEST });
            const res = await axios.post(`product/editLaptopProductDetail`, { ...payload });

            if(res.status === 201){
                dispatch({ type: productConstants.ADD_LAPTOP_PRODUCT_SUCCESS });
                dispatch(getLaptopProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                dispatch({ type: productConstants.ADD_LAPTOP_PRODUCT_FAILURE });
            }
        }catch(error){
            console.log(error);
        }
    };
}

export const deleteLaptopProductById = (payload) => {
    const { product } = payload;
    return async (dispatch) => {
        try{
            const res = await axios.delete(`product/deleteLaptopProductById`, {
                data: {payload}
            });
            dispatch({ type: productConstants.DELETE_LAPTOP_PRODUCT_BY_ID_REQUEST })
            if(res.status === 202){
                dispatch({ type: productConstants.DELETE_LAPTOP_PRODUCT_BY_ID_SUCCESS });
                dispatch(getLaptopProductDetailsById({ _id: product }));
                dispatch(getProducts());
            }else{
                const { error } = res.data;
                dispatch({
                    type: productConstants.DELETE_LAPTOP_PRODUCT_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        }catch(error){
            console.log(error);
        }
    };
};