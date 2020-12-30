import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import en from './lang/en/index.json';
import vi from './lang/vi/index.json';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: en              // 'common' is our custom namespace
      },
      vi: {
          common: vi
      },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
