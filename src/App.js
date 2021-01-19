import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/SignUp';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './redux/actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData());
  }, []);

  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/category" exact component={Category} />
          <PrivateRoute path="/products" exact component={Products} />
          <PrivateRoute path="/orders" exact component={Orders} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
