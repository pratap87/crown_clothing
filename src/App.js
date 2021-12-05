import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase-util";
import { HomePage } from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/Shop";
import {connect } from 'react-redux'
import Header from "./components/header/header";
import { setCurrentUser } from "./redux/user/user.action";
import SignInAndSignUpPage from "./pages/signIn-signUp/sign-in-and-sign-up";

function App(props) {
  const [User, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          props.setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        });
      }
      else{
        props.setCurrentUser(userAuth)
      }
   
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={props.currentUser ? <Navigate to='/'/>:  <SignInAndSignUpPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStatsToProps=({user})=>({
  currentUser:user.currentUser
})

const  mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStatsToProps,mapDispatchToProps)(App);
