import React, { useState } from "react";
import CustomButton from "../button/button";
import FormInput from "../form-input/form-input";
import './signin.scss'
import {signInWithGoogle,auth} from '../../firebase/firebase-util'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
      
    event.preventDefault();
 
    try {
        await auth.signInWithEmailAndPassword(email,password)

        setEmail("");
        setPassword("");
    } catch (error) {
        console.error(error)
    }


  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
       
        <FormInput
          name="Password"
          type="password"
          value={password}
          required
          label="password"
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
       
       <CustomButton type='submit'>
           Sign In
           </CustomButton>
           <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn={true} >
            
           Sign In with Google
           </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
