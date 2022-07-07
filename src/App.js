import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authenticaton from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';
import{
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

const App=()=> {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    }, [dispatch]);
    return unsubscribe;
  })
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authenticaton/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
 );
};

export default App;
