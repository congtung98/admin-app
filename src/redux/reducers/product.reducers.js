import { productConstants } from "../actions/constants";

const initialState = {
    products: [],
    smartPhones: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case productConstants.GET_SMART_PHONE_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                smartPhones: action.payload.productDetails
            }
            break;
        case productConstants.ADD_SMART_PHONE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        }
    return state;
}