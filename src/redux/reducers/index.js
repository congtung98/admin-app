import { combineReducers } from 'redux';
import userReducer from './user.reducers';
import authReducer from './auth.reducers';
import productReducer from './product.reducers';
import categoryReducer from './category.reducers';
import orderReducer from './order.reducers';
import pageReducer from './page.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    page: pageReducer
});

export default rootReducer;