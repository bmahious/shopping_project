import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListner, createUserDocumetFromAuth } from './Utils/Firebase/Firebase';


import Home from "./Routes/Home/Home";

import { Routes, Route} from 'react-router-dom'
import Navigate from "./Routes/Navigate/Navigate";
import SighIn from "./Routes/SighIn/SighIn";
import ShopPage from "./Routes/Shop/ShopPage";
import Checkout from '../src/Routes/Checkout/Checkout'
import { setCurrentUser  } from './store/User/UserAction';

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumetFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Navigate />} >
         <Route index element={<Home />}/>
         <Route path="shop/*" element={<ShopPage />}/>
         <Route path="sign-in" element={<SighIn />}/>
         <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  )  
}

export default App;
