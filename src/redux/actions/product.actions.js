import axios from "../../helpers/axios";
import { productConstants } from "./constants";

const getProducts = () => {
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