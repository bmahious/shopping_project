import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Contexts/ContextUser';
import {ProductsProvider} from './Contexts/ProductContext';
import{CardProvider} from './Contexts/CardContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
